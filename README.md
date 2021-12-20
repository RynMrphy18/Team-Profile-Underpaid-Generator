GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

An html file is writtten into using functions in my index.js page

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

The mail section the user inputs into feature an href TO: that will link to their chosen email service

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

The github section the user inputs into features an href that will add a hyper link onto their github username

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

using node index.js inquirer will run questions asking for the necessary information

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

inquirerManager() is run first to allow the manager to eb thr first choice

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

Goes as written, option entered using if statements based off title

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

Goes as written, option entered using if statements based off title

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

Once max amount of users are inputted or user selects Finish Team HTML will be written into an index.html file


Github repo link: https://github.com/RynMrphy18/Team-Profile-Underpaid-Generator

HTML example link: file:///C:/Users/rmurp/Desktop/projects/challenge10/index.html

Video walkthrough link: https://drive.google.com/file/d/1hfIxhC1vNxcqUQLyI9OxOQQgbtuFJaYK/view?usp=sharing
