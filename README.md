# Tic-Tac-toe

My first project for the General Assembly Web Development Immersive course.


## Background
This is my first project as part of the General Assembly [Web Development Immersive](https://generalassemb.ly/education/web-development-immersive) program.

This project needed to meet the following requirements/specifications:

### Technical Specifications
- Use a custom game engine written by you.
- Be a single-page application, no browser refresh.
- Render a game board in the browser.
- Switch turns between X and O (or whichever markers you select). Tip: Assume player X is the first player to start the game.
- Visually display which side won if a player gets three in a row or show a draw if neither wins.
- Support playing multiple games, one at a time.
- Use jQuery for DOM manipulation and event handling.
- Use AJAX for interacting with a provided API.

### API Specifications
- Create new games on the server. (CREATE)
- Update a game by storing new moves. (UPDATE)
- Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
- Give feedback to the user after each action.

### Auth Specifications
- Signup with email, password, and password confirmation.
- Login with email and password.
- Logout when logged in.
- Change password with current and new password.
- Give feedback to the user after each action's success or failure.


## My Planning and Development Process, and Problem Solving Strategy
I approached this first project by carefully reading the requirements and then building a backlog of stories. I then grouped and prioritized the stories using the following groups:
- Initial setup
- Game interface and engine
- Game authorization
- Game API

After the stories were defined I added tasks to the first group of stories and began working on them. At regular intervals I would recheck the prioritization and make any updates that I felt were necessary. As some stories were completed I would also add tasks to additional future stories so that they were ready for development.

Through the process of developing the game engine I defined some key parameters (currentPlayer, clickedSquare, gameComplete) which would be critical to understanding the flow of the game and determining how the game should react to the player actions. These parameters are also important for the game API which saves the progress of the game at each move. I was pleased with how these key parameters made some of the later development stories relatively easy because they simply needed those states to make decisions and create outcomes.

When I encountered problems I would search for help online. Very often my solutions could be found in the questions and responses available on Stack Overflow.


## Wireframes
Initial low-res hand sketch wireframes can be located [here](https://photos.app.goo.gl/ZSD4uiGlZoLDy18j2)


## User Stories
I utilized a [Trello board](https://trello.com/b/ckiOYB2Z/wdi-project-1-tic-tac-toe) to keep track of my user stories, progress, and bugs/issues during initial development. After initial development is complete I will switch to using the [GitHub repo issues list](https://github.com/JohnSnedden/ga-wdi-project1-tictactoe/issues) for ongoing issue management.


## Built With

* JavaScript
* jQuery
* AJAX
* Bootstrap


## Unsolved Problems

* Sizing and placement of the auth forms


## Acknowledgements
The wonderful consultants at GA:
* Jordan Alain
* Jess Cornman-Homonoff
* Scott Davidson
* Michael Finneran
* Maria Inés Peniche
* Toni Langley
* Chris Payne
* Caleb Pearce
