# Firebase Authentication + Google maps Demo

## The Scenario/ Challenge

Create a Simple Application with simple login, signup via Firebase, Input box integrated with Google Places API, and users current location

### Tech details

Your application should consume firebase + free Google maps API

---

# Solution

## Setup

Clone the repo from the Github URL, and perform an install using `npm install` or `yarn install` commands to download the dependencies.

Before trying to run the application though, it is important to setup the environment. The required parameter here is the following API keys. Create a file called `.env` at the root of the project and copy the following line after replacing your API key.

```
REACT_APP_API_KEY="<your_firebase_api>"

REACT_APP_AUTHDOMAIN="<your_firebase_authdomain>"

REACT_APP_DATABASEURL="<your_firebase_databaseurl>"

REACT_APP_PROJECT_ID="<your_firebase_projectid>"

REACT_APP_STORAGEBUCKET="<your_firebase_storagebucket>"

REACT_APP_MESSAGING_SENDER_ID="<your_firebase_messagingDomain>"

REACT_APP_APP_ID="<your_firebase_app_id>"

REACT_APP_MAPS_API="<your_api_key_google_maps>"

```

for Google maps API please ensure you have enabled the following services: 

- Directions API
- Geocoding API
- Geolocation API
- Maps Embed API
- Maps Javascript API
- Places API


To execute the application on local environment, please issue `npm start` or `yarn start` commands.

### Browser Support

Application has been tested to be working fine on latest versions of

- Google Chrome
- Mozilla Firefox
- Apple Safari

browsers on **Desktop** only mode. The application hasn't been modified to run as intended on a mobile device though and should be viewed only on a Desktop machine.

## Tech Stack

### Scaffolding

This project has been bootstraped with create-react-app cli.

### Main Libraries

1. **React**: Library of choice.
2. **firebase**: For Authentication such as login, signup, signout, and managing session.
3. **Wouter**: Tiny 1.3kb routing library.
4. **use-position**: Small library for fetching users current geolocation.
4. **react-places-autocomplete**: React auto complete library for places and helper functions


## Highlights

> Only functional components, no class based approach.

> Custom React provider for signin, signout and signup.

> check Auth container that checks session when browser refreshes, so user session remains intact when logged in.

> CSS in JS approach. Used CSS global variables for theming.

> Simple CI/CD implemented using GitHub and Netlify.

## What's not been covered / What can be improved

Since the scope of project wasn't too elaborated, have tried to cover basic stuff while being cautious of my time with other tests.

- Simple CI/CD deployment

- Test coverage for the application is yet to be done.

- Have done only basic styling. The app hasn't been made responsive yet to work on smaller screens. One reason for this was also the lack of mobile wireframes in the brief.

- Server side rendering of the webpages not considered for this demo.

- Containerising the app at this stage would only have been an overkill.

- Node API not complete as I ran out of time.

- Google Maps integration with directions.

- plus more.
