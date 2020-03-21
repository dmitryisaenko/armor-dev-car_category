document.addEventListener("DOMContentLoaded", function() {

	var $filter = $('.archivepage-filter__title');
       
   $filter.on('click', function() {
      $(this).siblings('.archivepage-filter__items').toggleClass('filter-items_hide');
      $(this).find('.archivepage-filter__icon').toggleClass('archivepage-filter__icon_closed');
   });


   $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      center: true,
      autoWidth:true,
      dots: false,
      stagePadding: false,
      // items:1,
      navText: [$('.archivepage-relarticles__controls_left'),$('.archivepage-relarticles__controls_right')],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              autoWidth:false
          },
          480:{
            autoWidth:true
          },
          768:{
              items:2
          },
          1200:{
              items:3
          }
      }
  })

});


