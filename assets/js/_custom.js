document.addEventListener("DOMContentLoaded", function() {

	var $filter = $('.archivepage-filter__title');
       
   
   $filter.on('click', function() {
      $(this).siblings('.archivepage-filter__items').toggleClass('filter-items_hide');
      $(this).find('.archivepage-filter__icon').toggleClass('archivepage-filter__icon_closed');
   });

});


