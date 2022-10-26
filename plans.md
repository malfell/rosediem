# PLAN DOCUMENT

## Initial Functionality
- [ ] Index Page
    - [ ] Navbar 
- [ ] SQL Database
    - [ ] Users
    - [ ] Characters
- [ ] Registration Form
    - [ ] Email, Username, Password, Doublecheck password, birthday
    - [ ] Email verification maybe?
    - [x] Red asterisks 
    - [ ] Backend validation
- [ ] Login Form
    - [x] Form: Username (or email?), Password
    - [ ] Option to stay logged in?
- [ ] User Profiles
    - [ ] User Passwords and Authentication
    - [ ] User Profile Page
    - [ ] Users can add a profile picture
    - [ ] Users can write/edit their profile bio?
    - [ ] Log out button
- [ ] Admin Profiles
- [ ] Character Profiles (these will be attached to the user's profile page)
    - [ ] GET Users can view their character profiles (or other people's character profiles)
    - [ ] POST Users can create a new character profile
    - [ ] POST/PUT Users can upload images/references to their character profile
    - [ ] PUT Users can write/edit their characters' bios
    - [ ] DELETE Users can delete their character profiles


## Schedule
### Friday, October 20
- [x] Decide what to use for backend. Python(with Flask or Django) or Node (with Express) NODE AND EXPRESS
- [x] Decide what to use for frontend. React?? REACT
- [x] Plan out Database
- [x] Get basic server up and running (index page)

### Saturday, October 22
- [x] Make Navbar and basic home page
- [x] Make initial users route

### Sunday, October 23
- [x] Style 404 page? (center everything and put it in a box)

### Sunday, October 24

### Monday, October 25
- [ ] Make registration form and make profiles appear in index
- [ ] Routes for editing and deleting profiles
- [ ] Database set up?

## Requirements
### General Requirements
- [x] This project cannot be part of a lab or assignment we've already done in class.
- [x] This project is group by default (no more than 4 people per group), but can be done individually if approved by instructor.
- [ ] This project should feature user authentication (i.e., secure logins and passwords).
- [ ] Effort must be spent on styling, appearance, and user experience.
- [x] This app must be tracked in GitHub, with a minimum of 25 commits.
- [x] Ideally, put your empty project up on GitHub on day one of development, 
    - [ ] and aim for multiple commits per day.
- [ ] This app must be deployed somewhere.
- [ ] The app should have a README.md file including what is referenced below in the application requirements.

### Application Requirements
- [ ] Your back-end uses Python or Node.
- [ ] Your back-end uses Flask or Django (Python) or Express (Node).
- [ ] Your front-end may use React, or another front-end framework (e.g., Vue, Angular), or a template language (EJS, Pug, Handlebars).
- [ ] Your app must have a database that has at least two tables (SQL) or collections (Mongo).
- [ ] Your database must support at least one type of database relationship between tables/collections.
* This can be embedded or relational data in Mongo (An embedded collection will qualify as your second collection).
* This can be a 1:M (one-to-many) or N:M (many-to-many) relationship between SQL tables.
- [ ] Your app uses an ORM or ODM to interact with your database (e.g., Sequelize, PyMongo, SQLAlchemy, TypeORM, Mongoose).
- [ ] This app must run in a web browser.
- [ ] Your website should be responsive to screen size changes.
* This means that your website should be viewable and usable on a mobile device or tablet via an internet browser. Text shouldn't be super tiny and layouts shouldn't exceed the screen size on smaller screens.
- [ ] The app should have a README.md file including the following:
    - [x] Describes the inspiration for the application.
    - [ ] Describes how to use the application.
    - [ ] Lists the technologies used to build the application.
    - [ ] Addresses any outstanding bugs or unfinished functionality.

### Deliverables
- [ ] A link to your app, which is deployed somewhere.
- [ ] A link to your GitHub repository (or repositories if there are multiple), so we can see the progress on your app.

### Later Functionality
- [ ] Let people choose whether to log in with email or username 
- [ ] Have a remember me option for log in
- [ ] Block feature
- [ ] When registering let person know if username is free or taken upon typing it
- [ ] Footer

- [ ] Rules Page
* A simple page for the event rules
- [ ] Attack Categorization Page
* This will show the sizes/types of art--like what we'll consider the difference between a bust, halfbody, and fullbody so people can categorize their art correctly) 
- [ ] Point Calculator Page
* This page will let people fill out a form with all of their art attack information, and then there will be functions to add up their total points. The end goal (probably much later) is to make a page where user's can submit their attacks directly, and the attack will end up on the recipient's profile page, but we aren't focused on this functionality quite yet. We're focusing on images being sent in a Discord server first, and then we'll get there. 
- [ ] Random Team Member Page
* This page will let user's click a button and receive a random team member's profile according to whichever team's button they clicked.
* Eventually, there could be the option to get a random team member's profile depending on what types of character's the person has?