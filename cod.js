$(function(){

    $('.up_button').on('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0},800);
   });

   let header = $('#header');
   let iner = $('#iner');
   let but = $('.up_button');
   let inerH = iner.innerHeight();

   $(window).on('scroll', function(){
        scrolPos = $(this).scrollTop();

        if (scrolPos > inerH){
            header.addClass("fixed");
            but.css('opacity','1');
        } else {
            header.removeClass("fixed")
            but.css('opacity','0');
        }
   });

   //revievs: https://kenwheeler.github.io/slick/

   let slider = $('#reviewsSlider');
   
   
   slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: true
  });

  $(".slick-prev").text('<');
  $(".slick-next").text('>');

  let oneB = $(".slick-prev");
  let twoB =  $(".slick-next");

  $(window).on('scroll', function(){
    scrolPos = $(this).scrollTop();

    if(scrolPos > 100){
        oneB.hide()
        twoB.hide()
    } else {
        oneB.show()
        twoB.show()
    }
});
});