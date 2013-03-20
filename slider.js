$(window).load(function(){
  var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
	var i = 0;
	var q = 1;
	var transitionLength = 6000
	function changeBackground() {
		$('#front').css('background-image', function() {
			if (i >= images.length) {
				i = 0;
			}
			return 'url(images/' + images[i++] + ')';
		});
		$('#main').css('background-image', function() {
			if (q >= images.length) {
				q = 0;
			}
			return 'url(images/' + images[q++] + ')';
		});
		$('#front').delay(transitionLength/4).fadeOut(4000).show();
		time = setTimeout(changeBackground, transitionLength);
	}
	changeBackground();
});
