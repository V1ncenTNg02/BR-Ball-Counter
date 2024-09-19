# BR-Ball-Counter

## Vellum Coding Challenge

### **Requirement**:
- Shows a user an image of either a red or blue ball upon visiting the page. This should be random, with a 50/50 chance of a user being shown either color ball.
- Determine whether the user saw a red or a blue ball and the next time a user visits the page show them the same color ball they saw previously.
- Please work with cookies (and not local storage) to record how many times a user has seen each color of ball. You should be able to provide a report on users and number of times they saw each color ball.
- The test should work in any browser (including Chrome). Style as necessary (it is very much appreciated if you do).
- Code should be written in Javascript and feel free to use a framework for building the page/application. Any cookie functionality should not be abstracted by jQuery or any other module provided by NPM or the like.

### Technologies:

- **Frontend**: React, MUI, Axios

- **Backend**: Node.js, Express, PostgreSQL client, Google Cloud SQL


### Structure:

- **Frontend**:
  - **components**: Reusable component codes
  - **helper**: Helper functions for **cookies** (Cookies are handled there)
  - **pages**: Different pages of the app, three in total: Signin, Home, Report
  - **service**: Functions handling API connections with backend

- **Backend**:
  - **index.js**: Where backend logics are, supports simple Create, Read, Update functionality

- **Database**: On google cloud, your IP address needs to be configured to access this database


### How to Run:

- **Frontend**: navigate to frontend folder, run ``` npm start ```

- **Backend**: navigate to backend folder, run ```node index.js```