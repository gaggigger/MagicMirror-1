# Magic Mirror

This is a magic mirror with voice recognition capabilities that builds off of [Michael Teeuw's](https://github.com/MichMich/MagicMirror) magic mirror project.


##Configuration

Modify `js/config.js` to change some general variables (language, weather location, compliments, news feed RSS and to add your own ICS calendars)

To use the OpenWeatherMap API, you'll need a free API key. Checkout [this blogpost](http://michaelteeuw.nl/post/131504229357/what-happened-to-the-weather) for more information.

##Commands
"Play news" - Opens news feed<br>
"Play music" - Plays a YouTube video<br>
"Stop" - Pauses video<br>
"Go" - Resumes video<br>
"Close YouTube" - Closes video window<br>

##Code

###[main.js](war/js/main.js)

This file initiates the separate pieces of functionality that will appear in the view.  It also includes various utility functions that are used to update what is visible.


###[voice.js](war/js/voice.js)

This file handles the communication between the browser and Google's Web Speech API. Functionality for the YouTube player is also included here.


###[Time](war/js/time)

Updates the time on the screen on one second interval. Can be changed to omit displaying seconds by adding the config option ```displaySeconds = false``` in [config.js](js/config.js). When the seconds are disabled the interval is set to 60 seconds on the full minute.

With the option ```digitFade = true```, changing digits are faded. This looks best if the seconds are omitted.


###[Version](war/js/version)

Checks the git version and refreshes if a new version has been pulled.


###[Weather](war/js/weather)

Takes the user's inserted location, language, unit type, and OpenWeatherMap API key and grabs the five day weather forecast from OpenWeatherMap. You need to set the API key in the config for this to work. (See *configuration*.)
