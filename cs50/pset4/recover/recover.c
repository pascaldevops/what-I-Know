#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

#define BLOCK_SIZE 512

void processing(FILE *inputCardFile);
bool checkHeader(uint8_t *block);

int main(int argc, char *argv[])
{

    // memory card file
    FILE *inputCardFile = NULL;

    // Making sure the proper command is entered
    if (argc != 2)
    {
        fprintf(stderr, "Usage: ./recover infile\n");
        return 1;
    }

    // open memory card file
    inputCardFile = fopen(argv[1], "r");

    // make sure the memory card file isn't empty
    if (inputCardFile == NULL)
    {
        printf("Unable to read card.raw\n");
        // Why keep it open if it is empty. close it.
        fclose(inputCardFile);
        return 1;
    }

    // Processing the recovery
    processing(inputCardFile);

    // close the card file reader
    fclose(inputCardFile);
    return 0;
}

// Processing the recovery
void processing(FILE *inputCardFile)
{
    FILE *outCardFile = NULL;       // File to the recovery
    int counter = 0;                // file counter
    char filename[8];
    uint8_t block[BLOCK_SIZE];      // serve as block

    // read card file block by block
    while (fread(block, sizeof(block), 1, inputCardFile) == 1)
    {
        // JPEG header
        if (checkHeader(block))
        {
            if (outCardFile != NULL)
            {
                fclose(outCardFile);
            }

            // JPEG block found, create new file
            sprintf(filename, "%03d.jpg", counter);

            // open file outCardFile for writing
            outCardFile = fopen(filename, "w");

            // keep track of the JPEG block found in file
            counter++;

            // write to outCardFile
            fwrite(block, sizeof(block), 1, outCardFile);
        }
        else if (counter > 0)
        {
            fwrite(block, sizeof(block), 1, outCardFile);
        }
        else
        {
            fread(block, sizeof(block), 1, inputCardFile);
        }
    }

    fclose(outCardFile);
}

// Checking the JPEG header
bool checkHeader(uint8_t *block)
{
    return (block[0] == 0xff && block[1] == 0xd8 && block[2] == 0xff && (block[3] >= 0xe0 && block[3] <= 0xef));
}