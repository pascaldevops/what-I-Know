Specification
=============
Write a program that prompts the user for the length of his or her shower
in minutes (as a positive integer) and then prints the equivalent number
of bottles of water (as an integer)

For simplicity, you may assume that the user will input a positive integer,
so no need for error-checking (or any loops) this time! And no need to worry
about overflow!

Thinking about the problem
==========================

-- 1.5 gallons every minute
-- 1 gallon = 128 ounces
-- 1.5 gallon = 128 + 64 = 192 ounces

-- one bottle of water = 16 ounces
-- number of bottle per 1-minute shower = 192/16 = 12 bottles

-- 10 minute shower = 10 * 1.5 =  15 gallon
-- 15 gallon = 128 * 10 = 1280 ounces
-- 1280 ounces = 1280 / 16 =  80 bottles
