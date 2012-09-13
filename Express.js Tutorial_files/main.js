
/** Initializations **/
$(document).ready(function() {

	
	prettyPrint();

	// Initialize the top menu items
	$.each(topMenuCSSconfig, function(i, val) { setTopMenuIcon(i); });

	// Add hover event listeners to menu items
	$('#top-menu li').hover(		
		function(e) { setTopMenuIcon(this.id, true); },
		function(e) { setTopMenuIcon(this.id); }
	);

	// Add click event listeners to menu items
	$('#top-menu li').hover(
		function(e) { showMenuDialog(this.id); }
	);
	
	// Mousedown on submit button
	$('#search-submit').mousedown(
		function(e) {
			$(this).css({'background-position':'0 -23px'});
		}
	);

	// Submit button mouseup
	$('#search-submit').mouseup(
		function(e) {
			$(this).css({'background-position':'0 0'});
			$('#search-form').submit();
		}
	);
	
	// Submit button mouseout
	$('#search-submit').mouseout(
		function(e) {
			$(this).css({'background-position':'0 0'});
		}
	);

	setupTopDialog();
	setupDynamicElements();
	
});

$(window).resize(function() { setupDynamicElements(); });


/**
*	Top dialog box position info
*/
var topDialogConfig = {
	"about-menu": [28, '<p>Home of the most excellent articles and tutorials on Node.js, Express.js, JavaScript, MongoDB, Redis, and Web technologies in general.<p>Follow the Captain on Twitter - <a href="http://twitter.com/hacksparrow/">@hacksparrow</a></p></p>'],
	"categories-menu":[74, ''],
	"archive-menu":[120, ''],
	"contact-menu":[160, '<a href="mailto:captain@hacksparrow.com">captain@hacksparrow.com</a>']	
};

function setupTopDialog() {

	topDialogConfig['categories-menu'][1] = '<ul id="categories-ul">' + $('#sidebar2').children().eq(0).children().eq(1).html() + '</ul>';
	topDialogConfig['archive-menu'][1] = '<ul id="archives-ul">' + $('#sidebar2').children().eq(1).children().eq(1).html() + '</ul>';	

	$('#about-menu, #categories-menu, #archive-menu, #contact-menu').mouseover(function() {
		
		$('#top-dialod-html').html(topDialogConfig[this.id][1]);
		$('#top-dialog').css('left', topDialogConfig[this.id][0]);
		$('#top-dialog').fadeIn(200);
		
	});
	
	$('body').click(function() {
		
		if ($('#top-dialog:visible')) {
			//$('#top-dialog').fadeOut(200);
		}
		
	});
	
	$('#top-dialog').mouseover(function(e) {
		e.stopPropagation();
	});
	$('#wrapper').mouseover(function() { $('#top-dialog').fadeOut(200); });

	$('#top-bar').animate({opacity:1});
	
}


/**
*	Defines my pet monkey's behavior for the session
* 	The monkey's name is Jack!
*/
function setupMonkey() {

	

}


/**
*	Sets up the top menubar and decorative elements (including the logo)
*	Should be called any time the window is resized
*/

function setupDynamicElements() {

	var fw = $(document).width();
	var sw = $('#search-box').width();
	var ww = $('#wrapper').width();
	var clw = Math.floor($('#top-menu').width() + $('#wrapper').offset().left + 30);
	var crw = Math.floor(fw-sw-clw-1);
	if ($.browser.msie) crw -= 16;
	$('#top-bar-left').width(clw);
	$('#top-bar-right').width(crw);
	
	//$('#logo').css('left', $('#wrapper').position().left - 30);
	//$('#search-input').val(fw +' '+ sw +' '+ clw + ' ' + crw);
}


/** 
*	Data object for top menu
*/

var topMenuCSSconfig = {
	// first block contains x,y of mouseout state, second block contains x,y of mouseover state
	"about-menu":[[5,0],[5,-41]],
	"categories-menu":[[-35,0],[-35,-41]],
	"archive-menu":[[-80,0],[-80,-41]],
	"contact-menu":[[-116,0],[-116,-41]]	
};


/**
*	Handles mouseover/mouseout states of the top menu items
*	@menuName	id of the menu
*	@mousover	flag indicating it's a mouseover
*/
function setTopMenuIcon(menuName, mouseover) {

	var menuName = menuName || false;
	var mouseoverAction = mouseover || false;

	if (menuName) {
		// on mouseover
		if (mouseoverAction) var cssObj = { 'background-position': topMenuCSSconfig[menuName][1][0] + 'px ' + topMenuCSSconfig[menuName][1][1]+'px' };
		// on mouseout or initial setup
		else var cssObj = { 'background-position': topMenuCSSconfig[menuName][0][0] + 'px ' + topMenuCSSconfig[menuName][0][1]+'px' };
		$('#'+menuName).css(cssObj);
	}
	else { throw new Error('setTopMenuIcons: Missing "menuName" argument'); }
}

// Stores all instances of open menu dialog boxes
// Ideally there should be only one
var _openMenuDialog = [];

/**
*	Shows the dialog box of top menu items
*	@menuName	id of the menu
*/
function showMenuDialog(menuName) {
	// If any dialog is open, close them first
	if (_openMenuDialog.length > 0) { hideMenuDialog(); }
	else {
		// display dialog box
	}
}

/**
*	Hides any open menu dialog box
*/
function hideMenuDialog() {
	$.each(_openMenuDialog, function(i, val) {
		// hide dialogs	
	});
}

