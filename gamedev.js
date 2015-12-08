$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://www.lovile.com/wp-content/uploads/modern-sofa-for-hotel-lobby-best-hotel-design.jpg')");
		$("#goStraight1").show();
		$("#goBack").hide();
		$("#goRight-Straight1").hide();
		$("#goRight-Right2").hide();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://vignette2.wikia.nocookie.net/teenbeachmovie/images/b/bf/Sad-face.jpg/revision/latest?cb=20131020134253')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('https://s-media-cache-ak0.pinimg.com/236x/15/b5/ba/15b5ba58da3375f29dd7816ee500c454.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('http://www.gagecorp.net/gcsite/images/dajit_lg.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('http://megawattmedia.com.au/blog/wp-content/uploads/2010/03/shafted.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('http://www.publicdomainpictures.net/pictures/50000/nahled/hotel-hallway.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://fulal.com/wp-content/uploads/2015/11/Redd-Door-In-Hotel.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('https://palacestation.sclv.com/~/media/Images/Page%20Background%20Images/Palace/Hotel/PS_Hotel_KingRoom_new.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('http://mysteriouswritings.com/wp-content/uploads/2014/08/Clue.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});