# cpsc335-04project1
Project 1 Cella ant 12
CPSC 335-04
Team Name: GOOSE
Anthony Goossens


Intro:
This project is to write a program to display the generational progress of Turk & Propp's Ant #12, a cellular automaton (Cella).   (CF, en.wikipedia.org/wiki/Langton%27s_ant#Extension_to_multiple_colors )  The program will be written in Javascript with an HTML web page for display. The cella will be shown in a 2D grid of black, red, yellow, blue (etc.) cells. In this project I used a traveling algorithm for the ant to follow. The cells depcits which direction to go. Based on which color the ant lands on the cell changes colors.


Assets File Contains files for drawing algorithms and creating the 'ant'
      draw-stuff.js:
          Defines all important functions that both create and set values for each cell.
          Each cell can contain one of four colors and determines which direction the ant should travel
Main File contains the main.html which calls the functions in assets
      main.html:
          Uses and loops through all functions found in draw-stuff.js
          Creats the grid and sets values for all cells and 'releases' the ant to travel
Algorithms Used:
  Grid Creating Algorithm - aglorithm that creates and sets values for each cell
  Ant Aglorithm - Ant algorithm checks each cell values and decides which path to take dependent on the cell value
                  This algorithm has a run time on 0(N) since its goes as long as the user wants.
                      A bug that occurs is the 'ant' only wants to go right because each cell recieves the value '0'
                      Bug fixed when setting all cells to a random color / case.

External Requirements: NONE
Setup and Installation: NONE

Features: 
  Creates a grid with a title and description of the class. Each cell traveled changes color based on the direction the ant takes.
  Can go for an 'infinite' amount of moves depending on how long the user keeps the html file open
  
Bugs:
  If the ant starts in the top left it will only go right no matter the color set in the cell. This bug occurs because the ant cannot go   out of bounds and thus breaks the code.



