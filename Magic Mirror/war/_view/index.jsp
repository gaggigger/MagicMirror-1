<html>
<head>
	<title>Magic Mirror</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link href='https://fonts.googleapis.com/css?family=Amatic+SC:400,700' rel='stylesheet' type='text/css'>
	<script src="js/jquery.js"></script>
    <script src="js/jquery.feedToJSON.js"></script>

	<script>						
		function intialize(){
			updateTimerDisplay();
			updateProgressBar();

			clearInterval(time_update_interval);
			
			time_update_interval = setInterval( function() {
				updateTimerDisplay();
				updateProgressBar();
			}, 1000 )
	
		}

		function updateTimerDisplay(){
			$('#current-time').text(formatTime(player.getCurrentTime() ));
			$('#duration').text(formatTime( player.getDuration() ));
		}

		function formatTime(time){
			time = Math.round(time);
			var minutes = Math.floor( time/60 ),
			seconds = time-minutes*60;
			seconds = seconds < 10 ? '0' + seconds : seconds;
		}
	</script>
</head>
<body>
<div>
	<div class="top right"><div class="date small dimmed"></div><div class="time"></div><div class="calendar xxsmall"></div></div>
	<div class="top left"><div class="windsun small dimmed"></div><div class="temp"></div><div class="forecast small dimmed"></div></div>
		
	<!--<div class="bottom center-hor"><div class="compliment light"></div></div>-->
	<!-- <div class="bottom center-hor"><div class="news medium"></div></div>-->

	<div class="bottom right" id="ytplayer"></div>
	
	
	<div class="bottom center-hor xxsmall">
	 <div id="results">
          <span class="final" id="final_span"></span> 
     </div>
    </div>
	
</div>
<script src="js/voice.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-locales.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/version/version.js" type="text/javascript"></script>
<script src="js/calendar/calendar.js" type="text/javascript"></script>
<script src="js/compliments/compliments.js" type="text/javascript"></script>
<script src="js/weather/weather.js" type="text/javascript"></script>
<script src="js/time/time.js" type="text/javascript"></script>
<script src="js/news/news.js" type="text/javascript"></script>
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->

</body>
</html>
