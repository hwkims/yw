$('#header').load("/header.html");
$('#footer').load("/footer.html");



  var menu = [];
array.forEach(function(a){
    menu.push(a.wr_subject)

})



function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}





const swiper2 = new Swiper('.con6_mid_swiper_1 ', {
    slidesPerView: 1,
    spaceBetween:15,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.con7_next',
        prevEl: '.con7_prev',
    },
     autoplay: {
         delay: 1800,
         disableOnInteraction: false,
     },
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


$('.form_submit').on('click', function() {
    if ($('#tel12').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }
    if ($('.form_agree01').is(':checked')) {
        $.ajax({
            url: "/bbs/mail.php",
            type: "post",
            data: {
                name: $('#name2').val(),
                tel1: $('#tel12').val(),
                duration: $('#area2').val(),
                choice: $('#budget2').val(),
                form_index: $('#form_index').val(),
            }
        }).done(function(data) {
            alert("문의양식이 전송 되었습니다.")
            $('#name2').val('')
            $('#tel12').val('')
            $('#area2').val('')
            $('#budget2').val('')
            $('#form_index').val('')
        });}
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})



    let mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", () => {
        
const swiper3 = new Swiper('.con2_half_swiper_1 ', {

    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 1,

     autoplay: {
         delay: 2500,
 //        disableOnInteraction: false,
     },
    mousewheel: {
        enable: true
    },
    pagination: {
        el: '.con2_half_pagination',
        clickable: true,
        renderBullet: function (index, className) {

            return '<span class="' + className+' '+className+index +' '+ 'con1_top_3rd_bullet'+'">' +
                menu[index]
                +'</span>';
        },
    },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        // when window width is >= 640px
    },

});
        
    })

    mm.add("(max-width: 600px)", () => {
        
const swiper3 = new Swiper('.con2_half_swiper_2 ', {

    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 1,

     autoplay: {
         delay: 2500,
 //        disableOnInteraction: false,
     },
    mousewheel: {
        enable: true
    },
    pagination: {
        el: '.con2_half_pagination',
        clickable: true,
        renderBullet: function (index, className) {

            return '<span class="' + className+' '+className+index +' '+ 'con1_top_3rd_bullet'+'">' +
                menu[index]
                +'</span>';
        },
    },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        // when window width is >= 640px
    },

});
        
    })




const swiper4 = new Swiper('.con6_mid_swiper_2 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 2,
    loop: true,

     autoplay: {
         delay: 2500,
         disableOnInteraction: false,
     },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
            slidesPerGroup: 5,

        },
        600: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".con1_top_4th_pagination",
        clickable: true
    },



});



const swiper5 = new Swiper('.con6_mid_swiper_3 ', {
    slidesPerView: 2,
    spaceBetween:15,
    slidesPerGroup: 2,
    loop: true,

     autoplay: {
         delay: 1800,
         disableOnInteraction: false,
     },
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
            slidesPerGroup: 4,

        },
        600: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 4,

        },
        // when window width is >= 640px
    },

    pagination: {
        el: ".con2_top_3rd_pagination",
        clickable: true
        
    },



});



const swiper6 = new Swiper('.con6_mid_swiper_4 ', {
    slidesPerView: 3,
    spaceBetween:15,
    loop: true,

     autoplay: {
         delay: 1800,
         disableOnInteraction: false,
     },
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



    
    let tl_intro = gsap.timeline({  scrollTrigger: {
            trigger: ".main",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl_intro.from(".con6_mid_swiper_1", {
        scale:0.8,
    },'< 30%')

    
    
    

    let tl = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl.from(".con02_01", {
        yPercent:101,
    },'< 30%')



    let tl2 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl2.from(".con03_01", {
        yPercent:101,
    },'< 30%')



    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl3.from(".con04_02", {
        yPercent:101,
    },'< 30%').from(".con04_03", {
        yPercent:101,
    },'< 30%').from(".con3_top_4th p", {
        yPercent:101,
    },'< 30%').from(".con3_top_5th p", {
        yPercent:101,
    },'< 30%')

    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con6_mid_swiper_4",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl4.from(".con05_01", {
        yPercent:101,
    },'< 30%').from(".con6_mid_swiper_4", {
        yPercent:20,
        opacity:0,
    },'< 30%')


    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con5_con_item",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl5.from(".con06_01", {
        yPercent:101,
    },'< 30%').from(".con06_02", {
        yPercent:101,
    },'< 30%')


    
    
          let tlscrub = gsap.timeline({  scrollTrigger: {
                trigger: ".con1_top",
                start: "0%",
                end: "100%",
                scrub:0.5,
                pin:true,
                toggleActions: "play none none none",
            },
            defaults: { duration: 1, ease: "power1.out" },
        });

        tlscrub.from(".tothetop", {
            css:{'pointer-events':'none',
                 'opacity':'0'
                },
            
        })
    
    
//    
//        
//    let mm2 = gsap.matchMedia();
//    mm2.add("(min-width: 600px)", () => {
//    let tlheader = gsap.timeline({  scrollTrigger: {
//            trigger: ".con1",
//            start:'0%',
//            end:'20%',
//            scrub:0.5,
//        markers:true,
//            toggleActions: "play none none none",
//        },
//        defaults: { duration: 1, ease: "power1.out" },
//    });
//
//
//    tlheader.from("header", {
//        css:{'background':'#f3f8ff'},
//    },'< 30%').from(".header_bg", {
//        css:{'background':'#f3f8ff'},
//    },'<').from(".header_sub", {
//        css:{'background':'#f3f8ff'},
//    },'<')
//        
//    });

    
    function yourFunction() {
  
}

window.addEventListener('scroll', () => {
  if (window.scrollY != 0){
      $('.header_bg').addClass('header_bg_on')
      $('.header_sub').addClass('header_sub_on')
      
  }else{
      $('.header_bg').removeClass('header_bg_on')
      $('.header_sub').removeClass('header_sub_on')
  }
}, true);
    
    
    
    
    
})