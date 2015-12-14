$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('https://insidenanabreadshead.files.wordpress.com/2010/12/den-haag-hilton-lobby1.jpg')");
		$("#goRight1").show();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('http://ennislifts.ie/wp-content/uploads/2012/02/hotel-front-300x300.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('http://cdn.kone.com/www.kone.co.uk/Images/20379_lift_shaft_chrome_493x370.jpg?v=1')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	}); $("#goleft1").hide();

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreHome1.jpg')");
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goright4").show();
	});



});