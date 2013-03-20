$(window).load(function(){
	//global variables
	var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg']; //Your images in an array. This can be as large/small as you like
	var i = 0; //do not change
	var q = 1; //do not change
	var transitionLength = 6000 //Total time image is viewable, inlcluding the transition
	function changeBackground() {
		$('#front').css('background-image', function() { //changes front div image
			if (i >= images.length) { //allows loop to restart once final image loads
				i = 0;
			}
			return 'url(images/' + images[i++] + ')'; //returns an image string to the css background-image property
		});
		$('#main').css('background-image', function() { //changes back image to the following image so fade 
			if (q >= images.length) {
				q = 0;
			}
			return 'url(images/' + images[q++] + ')';
		});
		$('#front').delay(transitionLength/4).fadeOut(4000).show(); //delayed fade out after images are loaded, then shows the div again
		time = setTimeout(changeBackground, transitionLength); //runs function and loops FOREVER
	}
	changeBackground(); //funs the function for the first time
});
