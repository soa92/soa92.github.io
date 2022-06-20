// $(function () {
//     //////////////////////////////////////////////////////////\

//     //자바스크립트 화살표 함수, this가 없음. 이벤트 타깃을 씀.
//     // document.querySelector('.xi-bars').addEventListener('click', () => {

//     // })
//     //////////////////////////////////////////////////////////    
// });


// var bannerClose = function () {
//     document.querySelector('.top_banner').style.display = 'none';
// }

// document.querySelector('.top_banner i').addEventListener('click', bannerClose);
$(function () {
    $('.top_banner').on('click', function () {
        $('.top_banner').slideUp();
    });

    $('.main_slider').on('init afterChange', function(e,s,c){
        // console.log(e,s,c); //0,1,2
        // $('.main_slider figure').eq(c +1).addClass('on').siblings().removeClass('on');
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slideNum').text((c ? c+1 : 1) + "/" + s.slideCount); //삼항연산자
    });

    $('.main_slider').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
    });
    
    $('.slideArrows i:nth-child(1)').on('click', function(){
        $('.main_slider').slick('slickPrev');
    });
    
    $('.slideArrows i:nth-child(2)').on('click', function(){
        $('.main_slider').slick('slickNext');
    });

});
