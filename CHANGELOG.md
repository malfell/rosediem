# CHANGELOG 
https://keepachangelog.com/en/1.0.0/

## [0.0.10] 2022-10-31
### Added
* Delete button. Characters can be deleted from a user's profile. Unfortunately, it does not redirect the user to their profile. Also, there's no security and delete confirmation yet. 
* Edit button (and it WORKS)

## [0.0.9] 2022-10-30
### Fixed
* Create character route AND show character routes work together (only one or the other would work before--it was torture)

## [0.0.8] 2022-10-29
### Added
* Characters can be created from the user's profile page

## [0.0.7] 2022-10-28
### Added
* Characters can be shown on user's profile page

## [0.0.6] 2022-10-27
### Added
* Mongoose connection
* Added technologies to README
* Validation error messages to the registration page
* Character schema

### Changed
* Updated ReadMe API documentation

## [0.0.5] 2022-10-26
### Added
* Edit and Delete buttons to individual profile views
* Profiles can be deleted. Profiles can be deleted by ANYONE though, and that is not ideal. That'll be fixed later though. Also need to add a confirmation for deleting your profile. 
* Edit button is functional
* Profile pictures are automatically resized to 200 x 200 px
* Rules page
* Stubs for character routes

### Changed
* Adjusted default formatting so it scales better on mobile

## [0.0.4] 2022-10-25
### Added
* Log in page
* Randomized messages for the error 404 page--for flavor
* Basic show page
* Registration page

### Changed
* Styled navbar more and gave links a hover color

## [0.0.3] 2022-10-24
### Changed 
* Styled the error page more

## [0.0.2] 2022-10-23
### Added
* More SCSS styling

### Changed 
* Converted CSS to SCSS

## [0.0.1] 2022-10-22
### Added
* basic profiles index for backend
* basic default, error404, home, profile index views
* navbar

### Changed
* "users" changed to "profiles" because "users" will be used for the password and account stuff

## [0.0.0] 2022-10-20
### Added
* CHANGELOG.md
* Beginning of README.md + inspiration section
* Index stub
* 404 stub
* Controller files (characters + users)