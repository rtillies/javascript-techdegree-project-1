# FSJS Techdegree Project 1
## Techdegree Project #1 - Full Stack JavaScript

### Treehouse FSJS Techdegree:
### Project 1 - A Random Quote Generator

 *   Author:  Richard Tillies
 *     Date:  February 25, 2021
 *  Purpose:  Generate and display quotations randomly onto a webpage.
 *            The quote and background will refresh automatically or by clicking a button on the page.

### Global entities
quotes[] - an array of quotation objects that contains quote, source, (year), (citation), (tags)

### Functions
randomNum(int) => int
Return a random number between 0 and one less than the given number (n-1)

getRandomQuote(array) => object
Return a random quote object from the quotes[] array

getRGB(int) => String
Return a six-digit hexadecimal RGB code for changing the background color

changeBGcolor()
Change the background color of the HTML page

printQuote()
Print the quote and attributes to the quote-box element on the webpage