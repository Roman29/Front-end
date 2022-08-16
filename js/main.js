
$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    dots: true,
    responsive:{
      576:{
        items: 1,
        margin: 20,
      },
      768:{
        items: 2,
        margin: 20,
      },
      992:{
        items: 3,
        margin: 20,
      }
    }
  });
});
