// Init Functions for Resume Page
// -------------------------

function init_languages() {
	function skillSet() {
	  $('.languages').each(function() {
		total = $(this).data("total");
		$(this).css("width", total + "%");
	  });
	}
	setTimeout(skillSet, 25);
}

// Init Functions for Resume Page
// -------------------------

function init_programs() {
	function skillSet() {
	  $('.programs').each(function() {
		total = $(this).data("total");
		$(this).css("width", total + "%");
	  });
	}
	setTimeout(skillSet, 50);
}

// Init Functions for Resume Page
// -------------------------

function init_hobbies() {
	function skillSet() {
	  $('.hobbies').each(function() {
		total = $(this).data("total");
		$(this).css("width", total + "%");
	  });
	}
	setTimeout(skillSet, 75);
}

// Resume page icon for experience
// -------------------------

$(function() {
	$(".exp-details p").prepend('<i class="fad fa-scrubber exp-details-icon"></i>');
});
