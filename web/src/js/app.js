jQuery(document).ready(function ($) {

    // menu and scrolltop buttonn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header .navbar').addClass('minimize');
            $('.to-top').addClass('show');
        } else {
            $('.header .navbar').removeClass('minimize');
            $('.to-top').removeClass('show');
        }
    })

    // reveal when scroll
    ScrollReveal().reveal('.home .block', {
        reset: false,
        distance: '50px',
        scale: 0.8,
        delay: .5
    });

    // animate button using mojs
    $('.to-top').click(function (e) {
        e.preventDefault();

        let eli = this.querySelector('i');
        ani1 = new mojs.Shape({
            parent: this,
            radius: { 0: 50 },
            fill: 'transparent',
            stroke: '#C0C1C3',
            strokeWidth: { 35: 0 },
            opacity: 0.6,
            duration: 600,
            easing: mojs.easing.ease.inout
        })


        ani2 = new mojs.Tween({
            duration: 1100,
            onUpdate: function (progress) {
                if (progress > 0.3) {
                    var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
                    eli.style.WebkitTransform = eli.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                }
                else {
                    eli.style.WebkitTransform = eli.style.transform = 'scale3d(0,0,1)';
                }
            }
        })

        ani1.play();
        ani2.play();

    })


    // change state active in menu
    let menu = $('.menu');
    let menuItems = menu[0].querySelectorAll('li');
    $(menuItems).click(function(){
        // remove class active
        menuItems.forEach(item => {
            $(item).removeClass('active');
        })
        $(this).addClass('active');
    })

    // scroll animation
    $('.menu li').click(function(){
        let des = this.querySelector('li a').getAttribute('href');
        $(des).animatescroll({easing: 'easeInOutExpo'});
    })

    // to top button 
    $('.to-top').click(function(){
        $('#header').animatescroll({easing: 'easeInOutExpo'});
    })


    // show popup
    $('.login-button').click(function(){
        $('.login-section').addClass('show-popup');
    })
    $('.close-popup').click(function(){
        $('.login-section').removeClass('show-popup');
    })
});
