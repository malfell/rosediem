# RoseDiem Art Duels

## Inspiration
There is a major art event called Art Fight (https://artfight.net/) that occurs every year and lasts the whole the month of July. Anyone of all art styles and skill can participate. People add their original characters to the website (bio info, reference images) and are split until two teams. A participant can "attack" the opposite team by drawing someone else's character, and then they will receive points for it. Whichever team has the most points when the month ends is the winner. Essentially, it is an art gifting game. 

There are a many spin off versions of this event (the admin team is okay with this), although most of the spin off versions don't get much traction even though there are many, many people interested in another one of these events. Most of the spin off versions are dead, inactive, or exclusive. I think some of the issue could be that most of the dead/inactive events don't have official websites, strong enough marketing, and deal with general confusion (or other issues).

My friend and I have wanted to try making our own version of this event and include a website. The initial plan would be to have most of the event take place in Discord (as a way to send art), but then supplement the event with a website and Discord bot. Then we can continue to build on the website and add more functions and eventually shift the whole event over to the website. 

As a twist on the usual Art Fight-esque events, there will be three teams instead of two. People will have 2/3 of possibilities of characters to draw for points. We're tentaively planning to have 3-4 events a year, but if it becomes too time-consuming, we'll have to cut it down. Since the original Art Fight event is in July, we're steering clear of that month and the surrounding months.    

## How to Use the Application
Currently the application only allows a user to create a profile and submit/edit/delete their characters. (no account security yet--still working on that)

User can Register to create a profile. Once registered, they can go to their profile and submit characters. Characters can be edited/deleted too. 

## Demo
To be added...

## Technologies
* Express
* Node.js
* jsx
* scss + css
* Mongo/Mongoose
* React
### Minor Installations 
* method-override
* dotenv

## Outstanding Bugs
* Edit form doesn't have working form validation like the register form. This currently allows people to do things like changing their username to 1 letter when 2 is the minlength. 
* When I put a Submit Character button on a user's profile and make that Submit Character button take the user to a new character form page, it'll run into POST/profiles/undefined when the user tries to submit. If the form is straight on the user's profile page, then they can submit a character fine. Maybe characters need to be fully on their own route??
* Deleting a character redirects to the profile index instead of the user's profile. I know the route is wrong, but I was having trouble figuring out how to make it redirect properly. 

## Unfinished Functionality
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

## API Documentation
 Method | Path | Purpose
 ------- | ------ | ---------
 GET | / | Home
 GET | /profiles | Profile Index
 POST | /register | Create new profile 
 GET | /profiles/:id | User Profile (preferably going to user's username not ID number)
 PUT | /profiles/:id | Update user profile (user's can only update their own profile)
 DELETE | /profiles/:id | User can delete their profile
|          |                |
 GET | /profiles/:id/characters | Character Index for specific profile (unfinished)
 POST | /profiles/:id/characters/new | User can create a character for their profile
 GET | /characters/:id | User can view a profile's character page
 PUT | /characters/:id | User can edit their own character
 DELETE | /characters/:id | User can delete their own character

## App Documentation
Path | Component | Purpose
----- | ---------- | ------------------|
/ | | Home Page
/register | | Form for registering user
/login | | Form for logging in
/rules | | Page for rules
