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

    $('#customer').click(function(){
        $('#customer').addClass('ss-active');
        $('.customer-text').addClass('ss-active-text');
        $('#consistent, #innovative, #business').removeClass('ss-active');
        $('.consistent-text, .innovative-text, .business-text').removeClass('ss-active-text')
    })

    $('#consistent').click(function(){
        $('#consistent').addClass('ss-active');
        $('.consistent-text').addClass('ss-active-text');
        $('#customer, #innovative, #business').removeClass('ss-active');
        $('.customer-text, .innovative-text, .business-text').removeClass('ss-active-text')
    })

    $('#innovative').click(function(){
        $('#innovative').addClass('ss-active');
        $('.innovative-text').addClass('ss-active-text');
        $('#customer, #consistent, #business').removeClass('ss-active');
        $('.customer-text, .consistent-text, .business-text').removeClass('ss-active-text')
    })

    $('#business').click(function(){
        $('#business').addClass('ss-active');
        $('.business-text').addClass('ss-active-text');
        $('#customer, #consistent, #innovative').removeClass('ss-active');
        $('.customer-text, .innovative-text, .consistent-text').removeClass('ss-active-text')
    })
    
});