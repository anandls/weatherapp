# Weather App

- The solution fetches data from a third party API (https://openweathermap.org/api) that provides world weather related data.
- The application is a SPA with no additional routing and the default page renders components showing data for a default set city (this can be changed in the `constants`).
- Subsequent selection of a city from the rendered dropdown, fetches and displays weather information for that city.
- Please note : Icons were fetched from OpenWeather via an endpoint provided for the purpose and icons provided were not used.

## Table of contents

- [Overview](#overview)
- [Build](#build)
- [Running the application](#run)
- [Improvements](#improvements)

## Overview

The main elements of the project consists of the structure below:

```.
        src
         ├── components
         ├── constants
         ├── constants
         ├── hooks
         ├── layout
         ├── libs
         ├── styles
         ├── utils
        App.js
    README.md
    package.json
```

- The `layout` folder houses a component that acts as a layout container for components found under `components`
- The `libs` folder contains utilities for fetching data and uses the third party Axios library. It also contains custom messages (that are display in the UI) for error codes.
- The `utils` folder contains utilities to manipulate strings, date and format weather data, that is returned to the UI.
- CSS modules are used with CSS vars and SCSS for nesting CSS.
- The `components` folder contains all componets used to render the UI and display data.
- The `hooks` folder contains a single hook that is used to fetch and manage Current and Forecast data.
- The `constants` folder has defaults used in the app
- The .env contains an important url endpoint (in REACT_APP_API_URL) and key (in REACT_APP_API_KEY). Your own key can be used but one will be provided via email for testing purposes.

## Build

The application uses

- Create React App to bootstrap the project
- The project uses the Axios and sass packages as additional dependencies

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please clone the repo:

#### `git clone https://github.com/anandls/weatherapp`

#### `cd weatherapp`

Please run the command below, in the root folder of the project to install dependencies

#### `yarn`

## Run

To run the app in the development mode:
In the root directory of the project, please run:

#### `yarn run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The REACT_APP_BASE_URL env variable can be updated in the .env file if required

To run a build version of the project, please run the command below:

#### `yarn build`

To serve on a static server

#### `yarn global add serve`

#### `serve -s build`

## Improvements

- Proper test coverage
- Better handling of large JSON data file, for populating dropdown
