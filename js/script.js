    $(document).ready(function(){

    $('.hide_check').click(function(){
        $('.nav').addClass('active-n');
    })

    $('.nav .close').click(function(){
        console.log(this);
        console.log(event.target);
        if(this === event.target){
            console.log("our target");
            $('.nav').removeClass('active-n');
        }
    })


    $('.selection-button').click(function () {
        const target = this;
        const id = $(this).data('target');
    
        $('.selection-button').each(function (index, button) {
          if (button === target) {
            $(button).addClass('ss-active');
          } else {
            $(button).removeClass('ss-active');
          }
        });
    
        $('.ss-tx').each(function (index, tab) {
          if ($(tab).attr('id') === id) {
            $(tab).addClass('ss-active-text');
          } else {
            $(tab).removeClass('ss-active-text');
          }
        });
      });
      
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

  
