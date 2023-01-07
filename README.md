# PlantWatch

PlantWatch is a plant monitoring system developed by Andreas Siljefors and Lucas Villarroel. The purpose of the application is to help people monitor their houseplants in regards to watering and light exposure.

## Project structure
The application is written in JavaScript, HTML and CSS together with handlebars templating engine. 
It is composed of an express server wich can be found in `index.js` and the `server` directory, and a client that is located in the `client` directory.

### server/

- `models/`: contains database models.
- `routes/`: contains all endpoints.
- `services/`: contains helper functions.

### client/

- `public/`: static files served to the client by the server, either javascript or css files.
- `views/`: contains the views which are compiled by the server and rendered for the client. Also contains two subdirectories:
  - `layouts/`: contains the layouts used by the templating engine.
  - `partials/`: contains partial views.


## Setup
To get started with PlantWatch first clone the repository and run the command `npm install` in the root directory to install the required packages.

The application needs some environmental variables to function correctly. For this we are using the `dotenv` library. Create a file called `.env` in the root directory and add the following environmental variables:

```
PLANT_API_KEY="<Houseplant API key>"
MONGODB_CONNECTION_STRING="<MongoDB connection string>"
```
## Running the application

The entry file is `index.js`, to run the application use `node index.js`. 

If you run in developer mode with nodemon (restarts server on file changes) use `npm run dev`.

The application runs on localhost:3000.


## Demo
This link shows a demo of the application in action.
https://www.youtube.com/watch?v=6CMeBCmfPD0
