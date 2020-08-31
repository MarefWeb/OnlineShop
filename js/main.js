$(function(){

$('.main-slider').slick({
    dots:true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    pauseOnFocus: true    
})

$('.small-slider').slick({
    speed: 1000,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                pauseOnFocus: true    
            }
        },
        {
            breakpoint: 1000,
            settings: {  
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 880,
            settings: {  
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                pauseOnFocus: true  
            }
        },
        {
            breakpoint: 680,
            settings: {  
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true 
            }
        },
        {
            breakpoint: 580,
            settings: {  
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true 
            }
        }
    ]
})

  
$('.burger').click(function(event){
    $('.burger,.nav').toggleClass('active');
})

});