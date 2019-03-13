## Overview

A simple project to get and view top watched repos for any github user. Should do all the following
-Search a user and get repos
-Organize the repos in a table of the top five repos with most watched on top
-indicate loading
-indicate if an error has occurred or a user hasn't been found

### Too run in development mode

1. Download the files in this repo
2. install node/npm
3. navigate to project folder
4. run `npm install`
5. run `npm start`
  5a. if this fails create .env file in project folder and add `SKIP_PREFLIGHT_CHECK=true`
  5b. rerun `npm start`
6. visit localhost:3000 in browser

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
