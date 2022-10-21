# RoseDiem Art Duels

## Inspiration
There is a major art event called Art Fight (https://artfight.net/) that occurs every year and lasts the whole the month of July. Anyone of all art styles and skill can participate. People add their original characters to the website (bio info, reference images) and are split until two teams. A participant can "attack" the opposite team by drawing someone else's character, and then they will receive points for it. Whichever team has the most points when the month ends is the winner. Essentially, it is an art gifting game. 

There are a many spin off versions of this event (the admin team is okay with this), although most of the spin off versions don't get much traction even though there are many, many people interested in another one of these events. Most of the spin off versions are dead, inactive, or exclusive. I think some of the issue could be that most of the dead/inactive events don't have official websites, strong enough marketing, and deal with general confusion (or other issues).

My friend and I have wanted to try making our own version of this event and include a website. The initial plan would be to have most of the event take place in Discord (as a way to send art), but then supplement the event with a website and Discord bot. Then we can continue to build on the website and add more functions and eventually shift the whole event over to the website. 

As a twist on the usual Art Fight-esque events, there will be three teams instead of two. People will have 2/3 of possibilities of characters to draw for points. We're tentaively planning to have 3-4 events a year, but if it becomes too time-consuming, we'll have to cut it down. Since the original Art Fight event is in July, we're steering clear of that month and the surrounding months.    

## How to Use the Application

## Demo

## Technologies

## Outstanding Bugs

## Unfinished Functionality


## API Documentation
 Method | Path | Purpose
 ------- | ------ | ---------
 GET | / | Home
 GET | /users | User Index
 POST | /users | Create new user (just registration??)
 GET | /user/:userId | User Profile (preferably going to user's username not ID number)
 PUT | /users/:userId | Update user profile (user's can only update their own profile)
 DELETE | /users/:userId | User can delete their profile
 POST | /users/:userId/character | User can create a character for their profile
 PUT | /users/:userId/characters/:characterId | User can edit their own character
 DELETE | /users/:userId/characters/:characterId | User can delete their own character

## App Documentation
Path | Component | Purpose
----- | ---------- | ------------------|
/ | | Home Page
/register | | Form for registering user
/login | | Form for logging in
/rules | | Page for rules
