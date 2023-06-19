// $(window).on('keydown',function(event)
// {
// if(event.keyCode==123)
// {
//     alert('Dont Still Code Not Allowed');
//     return false;
// }
// else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
// {
//     alert('Dont Still Code Not Allowed')
//     return false;  //Prevent from ctrl+shift+i
// }
// else if(event.ctrlKey && event.keyCode==73)
// {
//     alert('Dont Still Code Not Allowed')
//     return false;  //Prevent from ctrl+shift+i
// }
// });
// $(document).on("contextmenu",function(e)
// {
// alert('Dont Still Code Not Allowed')
// e.preventDefault();
// });

// document.onkeydown = function(e) {
//   if (e.ctrlKey && 
//       (e.keyCode === 67 || 
//        e.keyCode === 86 || 
//        e.keyCode === 85 || 
//        e.keyCode === 117)) {
//       alert('Dont Still Code');
//       return false;
//   } else {
//       return true;
//   }
// };

var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    prevNextButtons: false,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
    pageDots: false,
    lazy:true

  });
  
  var $imgs = $carousel.find('.carousel-cell img');
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/4;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

 