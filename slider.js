$(window).load(function(){
	//global variables	
	//Your images in an array. This can be as large/small as you like
	var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg']; 
	var i = 0; //do not change
	var q = 1; //do not change
	
	//Total time image is viewable, inlcluding the transition
	var transitionLength = 6000 
	
	//and so it begins (endless loop)
	function changeBackground() {

		//changes front div image
		$('#front').css('background-image', function() { 

			//allows loop to restart once final image loads
			if (i >= images.length) { 
				i = 0;
			}

			//returns an image string to the css background-image property
			return 'url(images/' + images[i++] + ')'; 
		});
		
		//changes back image to the following image so fade 
		$('#main').css('background-image', function() { 
			
			//allows loop to restart once final image loads
			if (q >= images.length) {
				q = 0;
			}

			//returns an image string to the css background-image property
			return 'url(images/' + images[q++] + ')';
		});

		//delayed fade out after images are loaded, then shows the div again
		//fade out time is related to the transition time and must stay shorter in order to prevent gaps and flickers
		$('#front').delay(transitionLength/4).fadeOut(4000).show(); 

		//runs function and loops FOREVER
		time = setTimeout(changeBackground, transitionLength); 
	}

	//funs the function for the first time
	changeBackground(); 
});
