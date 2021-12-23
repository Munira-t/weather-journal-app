# 📝 Weather Journal App

## Description

Asynchronous web app that uses Web API and user data to dynamically
update the UI for a Weather-Journal App. 
The user must enter a valid zip code/name of the desierd city, and write a description of thier feeling at the moment. The app will then process the zip code and send it to the OpenWeatherMap API and then retrieve the required data and display it to the user interface such as date, weather description, temperature, weather emoji with pre-entered feelings description from the user.


## 🧰 Built With:

- HTML
- CSS
- Bootstrap
- JavaScript
- NodeJS
- Express
- OpenWeatherMap API


## Features
- Search for the current weather by zip code or city name.
- Submit a journal entry which is then displayed on UI with the current weather data including: date, location, feelings and temperature.
- Journal entry saved in an object on the local Express server (server.js).
- 

## ⚙ Installation

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install
```

4. Start the project

|       Command        |                           Action                           |
| :------------------: | :--------------------------------------------------------: |
|     `npm start`      |  Run project then open http://localhost:3000/ in browser.  |


## Demo
[Weather Journal App Live ](https://weather-journal-app-m.herokuapp.com/)


## Acknowledgements

- [Font Awesome](https://fontawesome.com)
- [Photo by Lisa Fotios from Pexels](https://www.pexels.com/photo/silhouette-of-trees-during-golden-hour-1921336/)
- [OpenWeatherMap API](https://openweathermap.org/api)
