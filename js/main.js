var animateProgressBar = function ( el, value ) {
	var toAnimate = el.find(".bar");
	var textVal = el.find("span");
	var currentVal = parseInt( textVal.text() );
	var backgroundColor = "#0c69ff";

	currentVal += parseInt( value );

	if ( currentVal < 0 ) {
		currentVal = 0;
	} else if ( currentVal > 100 ) {
		backgroundColor = "#ff0000";
	}

	textVal.text( currentVal );

	toAnimate.animate({
		width: currentVal + "%",
		backgroundColor: backgroundColor
	}, 200);
};

var addValue = function () {
	var barToChange = $("#" + $("select").val() );
	var buttonClicked = $(this);
	animateProgressBar( barToChange, buttonClicked.attr("data-val") );
};

$(document).on("click", "button", addValue);