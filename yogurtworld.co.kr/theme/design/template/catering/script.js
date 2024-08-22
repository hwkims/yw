$('#header').load("/header.html");
$('#footer').load("/footer.html");





$(window).scroll(function(){
    var herecon = $(".main").offset().top-10;
    var herecon2 = $(".con5").offset().top-10;
    var herecon3 = $(".con7").offset().top-10;
    var herecon4 = $(".con11").offset().top-10;
    if(herecon <= $(document).scrollTop()  && herecon2 > $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(1)").addClass('floating_div_item_on')
    }
    else if(herecon2 <= $(document).scrollTop() && herecon3 > $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(2)").addClass('floating_div_item_on')
    }
    else if(herecon3 <= $(document).scrollTop() && herecon4 > $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(3)").addClass('floating_div_item_on')
    }
    else if(herecon4 <= $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(4)").addClass('floating_div_item_on')
    }

    else{
        $('.floating_div_item').removeClass('floating_div_item_on')

    }
})





$('.con2_left_2nd_close').on('click',function(){

    $('.con2_right').removeClass('hide')
    $('.con2_left_2nd').addClass('hide')
    tlclick3.restart();


})



$('.form_submit').on('click', function() {
    if ($('#tel1').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }

    if ($('.form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail5.php",
            type: "post",
            data: {
                name: $('#name').val(),
                address: $('#address').val(),
                email: $('#email').val(),
                tel: $('#tel1').val(),
                menu: $('#menu').val(),
                visitdatetime: $('#visitdate').val() +' '+ $('#visittime').val() +'시',
                form_index: $('#form_index').val(),

            }
        }).done(function(data) {
            alert("케이터링 문의가 전송 되었습니다.")
            $('#visitdate').val('')
            $('#visittime').val('')
            $('#name').val('')
            $('#tel1').val('')
            $('#email').val('')
            $('#menu').val('')
            $('#form_index').val('')
        });
    }
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})





const swiper2 = new Swiper('.con6_mid_swiper_1 ', {
    slidesPerView: 1,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.con7_next',
        prevEl: '.con7_prev',
    },
    // autoplay: {
    //     delay: 1800,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
    },

});




const swiper4 = new Swiper('.con6_mid_swiper_2 ', {
    slidesPerView: 1,
    spaceBetween:0,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.con7_next',
        prevEl: '.con7_prev',
    },
    // autoplay: {
    //     delay: 1800,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".fixed_popup .con1_top_4th_pagination",
        clickable:true,
    },



});



const swiper5 = new Swiper('.con6_mid_swiper_3 ', {
    slidesPerView: 2,
    spaceBetween:8,
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
            slidesPerView: 5,
            spaceBetween: 15,

        },
        600: {
            slidesPerView: 5,
            spaceBetween: 10,

        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".con2_top_3rd_pagination",
    },



});




const swiper6 = new Swiper('.con6_mid_swiper_4 ', {
    slidesPerView: 1,
    spaceBetween:15,
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

        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".con9_con .con1_top_4th_pagination",
        clickable:true,
    },



});




function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$('.popup_close').on('click',function(){
    $('.fixed_popup').addClass('hide')

})
$('.fixed_popup_con').on('click',function(){
    $('.fixed_popup').addClass('hide')

})



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








    $.datepicker.setDefaults({
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
            "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
            "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        weekHeader: "주",
        dateFormat: "yy.m.d", // 날짜형태 예)yy년 m월 d일
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "년"
    })

    $(".datepicker").datepicker({
        minDate: 0
    })




    let tl = gsap.timeline({  scrollTrigger: {
            trigger: ".main",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl.from(".con01_01", {
        yPercent:101,
    },'< 30%').from(".main_top_2nd p", {
        yPercent:101,
    },'< 30%')



    let tl2 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl2.from(".con01_03", {
        yPercent:101,
    },'< 30%').from(".con1_top_2nd p", {
        yPercent:101,
    },'< 30%')


    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_4th",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl3.from(".con01_04", {
        yPercent:101,
    },'< 30%').from(".con1_top_4th p", {
        yPercent:101,
    },'< 30%')


    let tl2_5 = gsap.timeline({  scrollTrigger: {
            trigger: ".main",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.7},
        repeat:-1,

    });
    tl2_5.to('.con1_absol .con1_absol_item:nth-of-type(1)',
        {
            opacity:1.3,
            yPercent:-10,
            duration: 0.7,
        },'<').to('.con1_absol .con1_absol_item:nth-of-type(1)',
        {
            opacity:0.3,
            duration: 0.7,
            yPercent:0,
        })

        .to('.con1_absol .con1_absol_item:nth-of-type(2)',
            {
                opacity:1.3,
                yPercent:-10,
                duration: 0.7,
            },'<').to('.con1_absol .con1_absol_item:nth-of-type(2)',
        {
            opacity:0.3,
            duration: 0.7,
            yPercent:0,
        })


        .to('.con1_absol .con1_absol_item:nth-of-type(3)',
            {
                opacity:1.3,
                yPercent:-10,
                duration: 0.7,
            },'<').to('.con1_absol .con1_absol_item:nth-of-type(3)',
        {
            opacity:0.3,
            duration: 0.7,
            yPercent:0,
        })






        .to('.con1_absol .con1_absol_item:nth-of-type(4)',
            {
                opacity:1.3,
                yPercent:-10,
                duration: 0.7,
            },'<').to('.con1_absol .con1_absol_item:nth-of-type(4)',
        {
            opacity:0.3,
            duration: 0.7,
            yPercent:0,
        })



        .to('.con1_absol .con1_absol_item:nth-of-type(5)',
            {
                opacity:1.3,
                yPercent:-10,
                duration: 0.7,
            },'<').to('.con1_absol .con1_absol_item:nth-of-type(5)',
        {
            opacity:0.3,
            duration: 0.7,
            yPercent:0,
        })







    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_4th_item_1 .con1_top_4th_item_item_1_absol_2nd ",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl4.from(".con01_05", {
        yPercent:101,
    },'< 30%').from(".con1_top_4th_item_1 .con1_top_4th_item_item_1_absol_2nd p", {
        yPercent:101,
    },'< 30%')



    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_4th_item_2 .con1_top_4th_item_item_1_absol_2nd ",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl5.from(".con01_06", {
        yPercent:101,
    },'< 30%').from(".con1_top_4th_item_2 .con1_top_4th_item_item_1_absol_2nd p", {
        yPercent:101,
    },'< 30%')



    let tl6 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_3rd_1 ",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl6.from(".con01_14", {
        yPercent:101,
    },'< 30%')

        .from(".con01_15", {
        yPercent:101,
    },'< 30%')




    let tl7 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_3rd_3rd_2nd ",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl7.from(".con01_18", {
        yPercent:101,
    },'< 30%').from(".con3_top_3rd_1 .con3_top_3rd_4th p", {
        yPercent:101,
    },'< 30%').from(".con3_top_3rd_1 .con3_top_3rd_5th p", {
        yPercent:101,
    },'< 30%')



    let tl8 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_3rd_2_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl8.from(".con01_21", {
        yPercent:101,
    },'< 30%').from(".con3_top_3rd_2 .con3_top_3rd_4th p", {
        yPercent:101,
    },'< 30%').from(".con3_top_3rd_2 .con3_top_3rd_5th p", {
        yPercent:101,
    },'< 30%')



    let tl9 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_3rd_2_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl9.from(".con01_28 ", {
        yPercent:101,
    },'< 30%').from(".con4_top_2nd  p", {
        yPercent:101,
    },'< 30%').from(".con01_29", {
        yPercent:101,
    },'< 30%')

    let tl10 = gsap.timeline({  scrollTrigger: {
            trigger: ".con5_item",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl10.from(".con02_01 ", {
        yPercent:101,
    },'< 30%').from(".con5_top_2nd p", {
        yPercent:101,
    },'< 30%')


    let tl11 = gsap.timeline({  scrollTrigger: {
            trigger: ".con8_con",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl11.from(".con03_01 ", {
        yPercent:101,
    },'< 30%').from(".con7_top_2nd p", {
        yPercent:101,
    },'< 30%')



    let tl12 = gsap.timeline({  scrollTrigger: {
            trigger: ".con6_mid_swiper_4",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.6, ease: "power1.out" },
    });

    tl12.from(".con03_04 ", {
        yPercent:101,
    },'< 30%').from(".con03_05", {
        xPercent:-101,
    },'< 30%').from(".con9_con_top_absol_2nd p ", {
        yPercent:101,
    },'< 30%')




    let tl13 = gsap.timeline({  scrollTrigger: {
            trigger: ".con10_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.6, ease: "power1.out" },
    });

    tl13.from(".con03_10 ", {
        yPercent:101,
    },'< 30%').from(".con10_top_2nd p ", {
        yPercent:101,
    },'< 30%')



    let tl14 = gsap.timeline({  scrollTrigger: {
            trigger: ".con11_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.74, ease: "power1.out" },
    });

    tl14.from(".con03_12 ", {
        yPercent:101,
    },'< 30%').from(".con03_13", {
        yPercent:101,
    },'< 30%').from(".con11_top_2nd p", {
        yPercent:101,
    },'< 30%')





    let tl15 = gsap.timeline({  scrollTrigger: {
            trigger: ".con11",
            scrub:0.5,
            start: "0%",
            end: "100%",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.5, ease: "power1.out" },
    });

    tl15.from(
        ".con11_absol",
        { xPercent:-100}
    )


$('.푸드트럭').removeClass('hide')
$('.요거트아이스크림').removeClass('hide')

        

    
        let tlclick2 = gsap.timeline();
    tlclick2.from('.popup', {
        y:100,
        opacity:0,
    },'< 30%')
    
    
        let tlclick = gsap.timeline();
    tlclick.from('.con5_item', {
        y:100,
        opacity:0,
    },'< 30%')
    
        $('.con1_tab_item').on('click',function(){
        $('.con1_tab_item').removeClass('con1_tab_item_on')
        $(this).addClass('con1_tab_item_on')

        $('.con5_item_item').addClass('hide')
        $('.'+$(this).data('value')).removeClass('hide')
        tlclick.restart();
        
    })
    

    
            let tlclick3 = gsap.timeline();
    tlclick3.from('.con8_con_item', {
        y:100,
        opacity:0,
    },'< 30%')
    
        $('.con1_tab_2nd_item').on('click',function(){
        $('.con1_tab_2nd_item').removeClass('con1_tab_2nd_item_on')
        $(this).addClass('con1_tab_2nd_item_on')

        $('.con8_con_item').addClass('hide')
        $('.'+$(this).data('value')).removeClass('hide')
        tlclick3.restart();
        
    })
    
    
    
    
    
    
        $('.con5_item_item').on('click',function(){
        
        $('.fixed_popup').removeClass('hide')
        tlclick2.restart();
        

    
        
        $('.con02pop_02').attr('src',$(this).data('photo'))
            
            
            
        $('.con02pop_03').attr('src',$(this).data('photo2') !='/' ? $(this).data('photo2') :$(this).data('photo') )
        $('.con02pop_04').attr('src',$(this).data('photo3') !='/' ? $(this).data('photo3') :$(this).data('photo') )
        
        
        
        
    })
    
    
    
    
    
    
    const urlParams2 = new URL(location.href).searchParams;
    const scroll = urlParams2.get('id');
    $( document ).ready(function() {

            if(scroll != undefined &&scroll != '' ){
            document.getElementById(scroll).scrollIntoView();
                
            }

    });

    
    
    





})