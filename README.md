# Project Summary
The objective of this project is to build a simple 5-days weather forecast application.

Users can input a city name to request the weather forecast of that city (within the next 5 days).
For each city, the information about Temperature, Pressure, and Humidity is returned and displayed on line charts. While the dashed line and the number below each chart indicated the average value. In addition, a mini map of searched city (Google map) is also provided.

The application is published by [surge](https://surge.sh/).

### Bug

Whenever users input a city name that cannot be identified, the search function stops working. In other words, the page must be reloaded after any failed search (which returned nothing).

# Getting started
Click [here](http://ln-weather.surge.sh/) to try the application.
Or clone the project:

```
> git clone https://github.com/longnghiem/weather-forecast.git
> cd weather forecast
> npm install
> npm start
```

#  Acknowledgments
This project was initialized by Mr. Stephen Grider as teaching materials for course
"Modern React with Redux" on Udemy.com.
More details can be found [here](https://github.com/StephenGrider/ReduxSimpleStarter)
