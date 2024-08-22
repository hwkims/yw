$('#header').load("/header.html");
$('#footer').load("/footer.html");


function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




$(window).scroll(function(){
    var herecon = $(".con2").offset().top-10;
    var herecon2 = $(".con3").offset().top-10;
    if(herecon <= $(document).scrollTop()  && herecon2 > $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(1)").addClass('floating_div_item_on')
    }
    else if(herecon2 <= $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(2)").addClass('floating_div_item_on')
    }
    else{
        $('.con7_mid_top_cate').removeClass('floating_div_item_on')
    }
})



const swiper5 = new Swiper('.con6_mid_swiper_3 ', {
    slidesPerView: 3,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,

    // autoplay: {
    //     delay: 1800,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 1,

        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 1,

        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".con2_top_3rd_pagination",
        clickable:true,
    },



});



const swiper6 = new Swiper('.con6_mid_swiper_4 ', {
    slidesPerView: 3,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,

    // autoplay: {
    //     delay: 1800,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 1,

        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 1,

        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".con3_top_3rd_pagination",
        clickable:true,
        
    },



});



$(window).on('load', function(){
    $('section > img').each(function() {
        var imageWidth = $('html').width()*$(this).prop('naturalWidth')/1905;    // Current image width
        var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산

        var percent =(imageWidth/parentsWidth) *100
        $(this).css('width',percent+'%')

    });


    $('section div').each(function() {
        // if($(this).children('img:visible').length>1){
        //     var imageWidth = $('html').width()*$(this).children('img').prop('naturalWidth')/2020;    // Current image width
        //     var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산
        //     var percent =(imageWidth/parentsWidth) *100
        //     $(this).css('width',percent+'%')
        //
        // }
        if( $(this).children('img:visible').length==1 && $(this).children('video:visible').length==0 &&$(this).children('p:visible').length==0 &&$(this).children('iframe:visible').length==0){

            var imageWidth = $('html').width()*$(this).children('img').prop('naturalWidth')/1905;    // Current image width
            var windowWidth = 1905;    // pc 기준 2020px 으로 계산
            var parentsWidth = $(this).parent().width();    // 현재 div의 부모 div width 계산

            //div 안에 div 또 있을경우 퍼센트 보정 계산식
            var percent =(imageWidth/parentsWidth) *100
            // * (parentsWidth/windowWidth*100) / 100
            if($(this).css('display')!='flex'){
                $(this).css('width',percent+'%')
                $(this).css('display','flex')
                $(this).css('justify-content','center')
                $(this).css('align-items','center')
            }

            //image 가 reveal class 가지고 있을때는 이미지에 vw 값 넣어주기 (vw[viewport width] 는 절대값이라 windowWidth 로 계산)
            if($(this).children('img').hasClass('reveal')){
                percent  =(imageWidth/$('html').width()) *100
                $(this).children('img').css('width',percent+'vw')
                $(this).css('overflow','hidden')
            }else{
                $(this).children('img').css('width','100%')
            }
        }
    });

    let tl = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl.from(".con01_08", {
        yPercent:101,
    },'< 30%').from(".con2_top_3rd", {
        yPercent:20,
        opacity:0,
    },'< 30%')



    let tl2 = gsap.timeline({  scrollTrigger: {
            trigger: ".con6_mid_swiper_4",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl2.from(".con01_09", {
        yPercent:101,
    },'< 30%').from(".con6_mid_swiper_4", {
        yPercent:20,
        opacity:0,
    },'< 30%')

    const urlParam2s = new URL(location.href).searchParams;
    const scroll = urlParams2.get('id');
    $( document ).ready(function() {

            if(scroll != undefined &&scroll != '' ){
            document.getElementById(scroll).scrollIntoView();
                
            }

    });







})