# PLAN DOCUMENT

## Initial Functionality
- [ ] Index Page
    - [ ] Navbar 
    - [ ] Fix Navbar home button because it gets chopped up on mobile
- [x] SQL Database
    - [x] Users
    - [x] Characters
- [ ] Registration Form
    - [ ] Email, Username, Password, Doublecheck password, birthday
    - [ ] Birthday is buggy. Change is to three fields for each number? Because it won't save the info as it is.
    - [ ] Make sure the validation errors don't delete all the info the user filled out
    - [ ] Email verification maybe?
    - [ ] Backend validation (profiles.js in models)
    - [ ] Style the validation error thing and make it better
- [ ] Login Form
    - [x] Form: Username (or email?), Password
    - [ ] Option to stay logged in?
- [ ] User Profiles
    - [ ] User Passwords and Authentication
    - [ ] User Profile Page
    - [ ] Users can add a profile picture
    - [x] Users can write/edit their profile bio?
    - [ ] Log out button
    - [ ] Users must be logged in to view profiles
    - [ ] Profile navbar?
- [ ] Admin Profiles
- [ ] Character Profiles (these will be attached to the user's profile page)
    - [x] GET Users can view their character profiles (or other people's character profiles)
    - [x] POST Users can create a new character profile
    - [ ] POST/PUT Users can upload images/references to their character profile
    - [x] PUT Users can write/edit their characters' bios
    - [x] DELETE Users can delete their character profiles
-[x] Rules Page
* A simple page for the event rules


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
- [x] Make registration form and make profiles appear in index (for testing purposes)
- [x] Routes for editing and deleting profiles
- [x] Database set up?

### Wednesday, October 28
- [x] Make sure character are connected to database


### Monday, October 31
- [x] Finish character routes
- [ ] Make top navbar yellow again
- [ ] Add images to character show pages
- [ ] Account auth! Security!


## Requirements
### General Requirements
- [x] This project cannot be part of a lab or assignment we've already done in class.
- [x] This project is group by default (no more than 4 people per group), but can be done individually if approved by instructor.
- [ ] This project should feature user authentication (i.e., secure logins and passwords).
- [ ] Effort must be spent on styling, appearance, and user experience.
- [x] This app must be tracked in GitHub, with a minimum of 25 commits.
- [x] Ideally, put your empty project up on GitHub on day one of development, 
    - [/] and aim for multiple commits per day.
- [ ] This app must be deployed somewhere.
- [x] The app should have a README.md file including what is referenced below in the application requirements.

### Application Requirements
- [x] Your back-end uses Python or Node.
- [x] Your back-end uses Flask or Django (Python) or Express (Node).
- [x] Your front-end may use React, or another front-end framework (e.g., Vue, Angular), or a template language (EJS, Pug, Handlebars).
- [x] Your app must have a database that has at least two tables (SQL) or collections (Mongo).
- [x] Your database must support at least one type of database relationship between tables/collections.
* This can be embedded or relational data in Mongo (An embedded collection will qualify as your second collection).
* This can be a 1:M (one-to-many) or N:M (many-to-many) relationship between SQL tables.
- [x] Your app uses an ORM or ODM to interact with your database (e.g., Sequelize, PyMongo, SQLAlchemy, TypeORM, Mongoose).
- [ ] This app must run in a web browser.
- [ ] Your website should be responsive to screen size changes.
* This means that your website should be viewable and usable on a mobile device or tablet via an internet browser. Text shouldn't be super tiny and layouts shouldn't exceed the screen size on smaller screens.
- [x] The app should have a README.md file including the following:
    - [x] Describes the inspiration for the application.
    - [x] Describes how to use the application.
    - [x] Lists the technologies used to build the application.
    - [x] Addresses any outstanding bugs or unfinished functionality.

### Deliverables
- [ ] A link to your app, which is deployed somewhere.
- [ ] A link to your GitHub repository (or repositories if there are multiple), so we can see the progress on your app.

### Later Functionality
- [ ] Edit form validation
- [ ] Account security and password authentication 
- [ ] Log in 
- [ ] Let people change their emails
- [ ] Let people change their passwords
- [ ] Let people choose whether to log in with email or username 
- [ ] Delete buttons show a confirm delete pop up
- [ ] Have a remember me option for log in
- [ ] Let users add images to their character pages
- [ ] Block feature
- [ ] When registering let person know if username is free or taken upon typing it
- [ ] Footer
- [ ] Let people adjust profile/picture thumbnails directly on the website
- [ ] Default profile image
- [ ] Rich text editor for profile info
- [ ] Attack Categorization Page
* This will show the sizes/types of art--like what we'll consider the difference between a bust, halfbody, and fullbody so people can categorize their art correctly) 
- [ ] Point Calculator Page
* This page will let people fill out a form with all of their art attack information, and then there will be functions to add up their total points. The end goal (probably much later) is to make a page where user's can submit their attacks directly, and the attack will end up on the recipient's profile page, but we aren't focused on this functionality quite yet. We're focusing on images being sent in a Discord server first, and then we'll get there. 
- [ ] Random Team Member Page
* This page will let user's click a button and receive a random team member's profile according to whichever team's button they clicked.
* Eventually, there could be the option to get a random team member's profile depending on what types of character's the person has?
- [ ] Give people ability to favorite characters (private favorites probably)
- [ ] Let people have shared characters? Since some people share them.