// Helper functions for music

#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>
#include <math.h>
#include "helpers.h"

// Function definitions
int processTone(char  note);
int processAccidental(char acc);

// Converts a fraction formatted as X/Y to eighths
int duration(string fraction)
{
    int dividend = atoi(&fraction[0]);
    int devisor = atoi(&fraction[2]);
    int duration = (8.0 / devisor) * dividend;

    return duration;
}

// Calculates frequency (in Hz) of a note
int frequency(string note)
{

    int semitone = 0;
    int octave = 0;
    float freq = 0.0;

    if (processAccidental(note[1]) == 0)
    {
        octave = atoi(&note[1]);
    }
    else
    {
        octave = atoi(&note[2]);
        semitone = processAccidental(note[1]);
    }

    semitone = (semitone + processTone(note[0])) + (octave - 4) * 12;
    freq = round(pow(2, semitone / 12.0) * 440);

    return freq;
}

// Determines whether a string represents a rest
bool is_rest(string s)
{
    return strcmp(s, "\0") == 0;
}

// Process notes
int processTone(char note)
{
    switch (note)
    {
        case 'A' :
            return 0;

        case 'B' :
            return 2;

        case 'C' :
            return -9;

        case 'D' :
            return -7;

        case 'E' :
            return -5;

        case 'F' :
            return -4;

        case 'G' :
            return -2;
    }

    return 0;
}

// Process accidental
int processAccidental(char acc)
{
    switch (acc)
    {
        case '#' :
            return 1;

        case 'b' :
            return -1;
    }

    return 0;
}
