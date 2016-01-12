// Initilizing gallery via jQuery
$('.main-gallery').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  // pagedots below gallery
  pageDots: false,
  // arrow buttons inside gallery
  prevNextButtons: false
});

// Running prev-next buttons
$(document).ready( function() {
	var $gallery = $('.main-gallery').flickity();
  // next
  $('.button--next').on( 'click', function() {
    $gallery.flickity('next');
  });
  // previous
  $('.button--previous').on( 'click', function() {
    $gallery.flickity('previous');
  });
});