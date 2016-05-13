var div_result = document.getElementById('div_result');
var containerId = 'ytplayer';
var videoId;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = function(event) {
    var interim_transcript = '';
    if (typeof(event.results) == 'undefined') {
      recognition.onend = null;
      recognition.stop();
      upgrade();
      return;
    }
    
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        voiceCommand(event.results[i][0].transcript );
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    //interim_span.innerHTML = linebreak(interim_transcript);
    setTimeout(textTimeout, 5000);
    
 // Reset transcript string
	final_transcript = '';
	interim_transcript = '';
  };
  
textTimeout = function()
{
	final_span.innerHTML = linebreak(' ');
}

voiceCommand = function(transcript) {
	time = 0;
	// Play news video
	if( transcript.valueOf() === new String("play news").valueOf() || transcript.valueOf() === new String(" play news").valueOf() )
	{
		console.log('Playing News');
		player.playVideo(containerId, 'y60wDzZt8yg');
	}
	// Play Jimi Hendrix
	else if( transcript.valueOf() === new String("play music").valueOf() || transcript.valueOf() === new String(" play music").valueOf())
	{
		console.log('Playing Music');
		player.playVideo(containerId, 'IZBlqcbpmxY');
	}
	// Pause video
	else if( transcript.valueOf() == new String("stop").valueOf() || transcript.valueOf() == new String(" stop").valueOf() )
	{
		console.log('Paused');
		player.pauseVideo();
	}
	// unPause video
	else if( transcript.valueOf() == new String("go").valueOf() || transcript.valueOf() == new String(" go").valueOf() )
	{
		console.log('Play');
		player.unPause();
	}
	// Stop video and remove div
	else if( transcript.valueOf() === new String("close YouTube").valueOf() || transcript.valueOf() === new String(" close YouTube").valueOf() )
	{
		console.log('Stopping Video');
		player.stopVideo();	
	}
	
	else {	
		console.log('You said: ' + transcript );
	}
}

recognition.onstart = function() {
  console.log("onstart");
  recognizing = true;
  final_transcript = '';
  recognition.lang = 'en-US';
  ignore_onend = false;
  final_span.innerHTML = '';
  //interim_span.innerHTML = '';
  start_timestamp = event.timeStamp;
};

recognition.onerror = function(event) {
  console.log("event.error=" + event.error);
  div_status.innerText = event.error;
};

recognition.onend = function() {
	console.log("End audio capture");
	 recognition.start();
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    if (!final_transcript) {
      return;
    }
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
    
   
  };
  
  var two_line = /\n\n/g;
  var one_line = /\n/g;
  function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
  }
  
  var first_char = /\S/;
  function capitalize(s) {
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
  }

recognition.lang = 'en-US';
recognition.start();

// Youtube Functionality
var player = {
	    playVideo: function(container, videoId) {
	       document.getElementById("ytplayer").style.display="inline";
	       if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
	            window.onYouTubePlayerAPIReady = function() {
	                player.loadPlayer(container, videoId);
	            };
	            $.getScript('//www.youtube.com/player_api');
	        } else {
	            player.loadVideoById(videoId);
	        }
	    },
	    pauseVideo: function() {
	    	window.myPlayer.pauseVideo();
	    }, 
	    unPause: function() {
	    	window.myPlayer.playVideo();
	    },
	    stopVideo: function() {
	    	window.myPlayer.stopVideo();
	    	document.getElementById("ytplayer").style.display="none";
	    },
	    loadPlayer: function(container, videoId) {
	        window.myPlayer = new YT.Player(container, {
	            playerVars: {
	                modestbranding: 1,
	                rel: 0,
	                showinfo: 0,
	                autoplay: 1,
	                html5: 0,
	                controls: 0,	                
	            },
	            height: 360,
	            width: 480,
	            videoId: videoId,
	        });
	    },
	    // Changes video without creating new YT.Player
	    loadVideoById: function( videoId ) {
	    	window.myPlayer.loadVideoById(videoId);   		    	
	    }
	};