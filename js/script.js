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


    
});