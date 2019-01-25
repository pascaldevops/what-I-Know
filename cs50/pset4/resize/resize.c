#include <stdio.h>
#include <stdlib.h>
#include "bmp.h"

int main(int argc, char *argv[])
{
    // ensure proper usage
    if (argc != 4)
    {
        fprintf(stderr, "Usage: ./resize n infile outfile\n");
        return 1;
    }

    // size image factor
    int n = atoi(argv[1]);

    // make n is non-negative and less 100
    if  (n < 0 || n > 99)
    {
        fprintf(stderr, "Usage: ./resize n infile outfile\n");
        return 1;
    }

    // remember filenames
    char *infile = argv[2];
    char *outfile = argv[3];

    // open input file
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        fprintf(stderr, "Could not open %s.\n", infile);
        return 2;
    }

    // open output file
    FILE *outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fclose(inptr);
        fprintf(stderr, "Could not create %s.\n", outfile);
        return 3;
    }

    // read infile's BITMAPFILEHEADER
    BITMAPFILEHEADER bf;
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);

    // read infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

    // ensure infile is (likely) a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 ||
        bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        fprintf(stderr, "Unsupported file format.\n");
        return 4;
    }

    /*
        STEP1 - WORKING ON THE IMAGE HEARDER

        Do the following calculations:
            (1) -- bi.biWidth *= n
            (2) -- bi.biHeight *= n
            -- new_image_padding is based on the width of the previous image size

        Change the bi.biSizeImage and bi-fiSize:
            -- bi.biSizeImage using new_image_padding
            -- bf.bfSize is based on the new_image_size
    */

    // old image padding, height and width
    int oldWidth = bi.biWidth;
    int oldHeight = bi.biHeight;
    int oldPadding = (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;

    // Image new width and height
    bi.biWidth = bi.biWidth * n;
    bi.biHeight = bi.biHeight * n;

    // Figure out the padding for the new image
    int new_image_padding =  (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;

    // The new image and file size
    int headerSize = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER);
    bi.biSizeImage = ((bi.biWidth * sizeof(RGBTRIPLE)) + new_image_padding) * abs(bi.biHeight);
    bf.bfSize = bi.biSizeImage + headerSize;

    // write outfile's BITMAPFILEHEADER
    fwrite(&bf, sizeof(BITMAPFILEHEADER), 1, outptr);

    // write outfile's BITMAPINFOHEADER
    fwrite(&bi, sizeof(BITMAPINFOHEADER), 1, outptr);

    /*
        STEP2 - START PROCESSING THE PIXELS
        -- We need to scan the line vertically and horizontally
        --
    */

    // iterate over infile's scanlines
    for (int i = 0, biHeight = abs(oldHeight); i < biHeight; i++)
    {
        for (int j = 0; j < n; j++)
        {
            fseek(inptr, headerSize + (oldWidth * 3 + oldPadding) * i, SEEK_SET);

            // iterate over pixels in scanline
            for (int k = 0; k < oldWidth; k++)
            {
                // temporary storage
                RGBTRIPLE triple;

                // read RGB triple from infile
                fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

                // iterate each pixel n times
                for (int l = 0; l < n; l++)
                {
                    // write RGB triple to outfile
                    fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
                }
            }

            // then add it back to outfile
            for (int m = 0; m < new_image_padding; m++)
            {
                fputc(0x00, outptr);
            }
        }
    }

    // close infile
    fclose(inptr);

    // close outfile
    fclose(outptr);

    // success
    return 0;
}
