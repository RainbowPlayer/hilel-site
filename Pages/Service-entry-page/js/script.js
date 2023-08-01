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

    $('.popup').click(function () {
      $('.popup-wrapper').addClass('active-p');
    
      if ($('body').css('overflow') === 'hidden') {
        $('body').css('overflow', '');
      } else {
        $('body').css('overflow', 'hidden');
      }
    });

    $('.close-popup').click(function(){
      console.log("our target");
      $('.popup-wrapper').removeClass('active-p');
      $('body').css('overflow', '');
      
  })
});

  
