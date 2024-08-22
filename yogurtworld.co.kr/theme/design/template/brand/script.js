$('#header').load("/header.html");
$('#footer').load("/footer.html");


var menu = ['/images/2_con02_02.png', '/images/2_con02_03.png', '/images/2_con02_04.png', '/images/2_con02_05.png'];


function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




$(window).scroll(function(){
    var herecon = $(".main").offset().top-10;
    var herecon2 = $(".con5").offset().top-10;
    if(herecon <= $(document).scrollTop()  && herecon2 > $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(1)").addClass('floating_div_item_on')
    }
    else if(herecon2 <= $(document).scrollTop()){
        $('.floating_div_item').removeClass('floating_div_item_on')
        $(".floating_div .floating_div_item:nth-child(2)").addClass('floating_div_item_on')
    }
    else{
        $('.floating_div_item').removeClass('floating_div_item_on')

    }
})





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


    let typeSplit = new SplitType('.con1_top_con p', {
        types: 'lines, words, chars',
        tagName: 'span'
    })


    let $target = $('.con5_top_absol');
    let $footer = $('.con5_top');
    $(window).on('scroll', function () {
        var $window = $(window),
            anchor = $window.scrollTop();
        var fot = $footer.offset().top;
        if (anchor > fot) {
            $target.addClass('is-fixed');

        } else {
            $target.removeClass('is-fixed');
        }
    });


    
        var counter = { var: 24 };
    var tal = document.querySelector('.con5_top_absol_1 span')
    
    

    let mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", () => {


        let tlyear = gsap.timeline({  scrollTrigger: {
                trigger: ".con5_mid_item_right_pin_2023",
                scrub:0,
                start: "bottom 0%",
                end: "bottom 200%",
                toggleActions: "play none none none",
            },
            defaults: { duration: 0.5, ease: "power1.out" },
        });

        tlyear.to(counter, {
            var: 23,
            duration:1,
//    ease: "circ.out",
            onUpdate: function() {
                tal.innerHTML = numberWithCommas(Math.ceil(counter.var));
            },
        },'<')



        let tlyear2 = gsap.timeline({  scrollTrigger: {
                trigger: ".con5_mid_item_right_pin_2022",
                scrub:0.5,
                start: "bottom 0%",
                end: "bottom 200%",
                toggleActions: "play none none none",
            },
            defaults: { duration: 0.5, ease: "power1.out" },
        });

        tlyear2.to(counter, {
            var: 22,
            duration:1,
//    ease: "circ.out",
            onUpdate: function() {
                tal.innerHTML = numberWithCommas(Math.ceil(counter.var));
            },
        },'<')



        let tlyear3 = gsap.timeline({  scrollTrigger: {
                trigger: ".con5_mid_item_right_pin_2021",
                scrub:0.5,
                start: "bottom 0%",
                end: "bottom 200%",
                toggleActions: "play none none none",
            },
            defaults: { duration: 1, ease: "power1.out" },
        });

        tlyear3.to(counter, {
            var: 21,
            duration:1,
//    ease: "circ.out",
            onUpdate: function() {
                tal.innerHTML = numberWithCommas(Math.ceil(counter.var));
            },
        },'<')



    })


    mm.add("(max-width: 599px)", () => {


    })



    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".main",
            scrub:0.5,
            start: "0%",
            end: "100%",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.5, ease: "power1.out" },
    });

    tl5.from(
        ".main_absol",
        { yPercent:-12}
    )



    let tl6 = gsap.timeline({  scrollTrigger: {
            trigger: ".main",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl6.from(".con01_01", {
        yPercent:101,
    },'< 30%')
        .from(".main_top_2nd p", {
            yPercent:101,
        },'< 30%')



    let tl7 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl7

        .from('.con1_top_con .word', {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: 0.1,
        })


        .from(".con01_04", {
            xPercent:-101,
        },'< 30%').from(".con1_top_con_absol_2nd p", {
        yPercent:-101,
    },'< 30%')


    let tl8 = gsap.timeline({  scrollTrigger: {
            trigger: ".con1_top_4th_item_1",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl8.from(".con01_06", {
        yPercent:101,
    },'< 30%').from(".con1_top_4th_item_1 .con01_07", {
        yPercent:101,
    },'< 30%').from(".con1_top_4th_item_1 .con1_top_4th_item_item_1_absol_2nd p", {
        yPercent:101,
    },'< 30%')



        .from(".con1_top_4th_item_2 .con01_10", {
            yPercent:101,
        },'< 30%')
        .from(".con1_top_4th_item_2 .con1_top_4th_item_item_1_absol_2nd p", {
            yPercent:101,
        },'< 30%')

        .from(".con1_top_4th_item_3 .con01_11", {
            yPercent:101,
        },'< 30%')
        .from(".con1_top_4th_item_3 .con1_top_4th_item_item_1_absol_2nd p", {
            yPercent:101,
        },'< 30%')




    let tl9 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl9.from(".con01_14", {
        yPercent:101,
    },'< 30%').from(".con01_15", {
        xPercent:-101,
    },'< 30%').from(".con2_top_con_absol_2nd p", {
        yPercent:-101,
    },'< 30%')

    let tl10 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_2nd_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl10.from(".con02_01", {
        yPercent:101,
    },'< 30%').from(".con2_2nd_top_2nd p", {
        yPercent:101,
    },'< 30%')


    let tl11 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl11.from(".con02_03", {
        yPercent:101,
    },'< 30%').from(".con3_top_2nd p:nth-child(1)", {
        yPercent:-101,
    },'< 30%').from(".con3_top_2nd p:nth-child(2)", {
        yPercent:101,
    },'< 30%')



    let tl12 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });

    tl12.from(".con02_05", {
        scale:1.2,
        opacity:0,
        ease:'expo.in',
        duration:0.5,
    },'< 30%')
        .from(".con02_06", {
            yPercent:101,
        },'< 30%')
        .from(".con02_07", {
            yPercent:101,
        },'< 30%')


        .from(".con02_08", {
            scale:1.2,
            opacity:0,
            ease:'expo.in',
            duration:0.5,
        },'< 30%')




        .from(".con02_09", {
            yPercent:101,
        },'< 30%').from(".con02_10", {
        yPercent:101,
    },'< 30%')



        .from(".con02_11", {
            scale:1.2,
            opacity:0,
            ease:'expo.in',
            duration:0.5,
        },'< 30%')


        .from(".con02_12", {
            yPercent:101,
        },'< 30%').from(".con02_13", {
        yPercent:101,
    },'< 30%')




    let tl13 = gsap.timeline({  scrollTrigger: {
            trigger: ".con5_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl13.from(".con03_01", {
        yPercent:101,
    },'< 30%')




    const urlParams2 = new URL(location.href).searchParams;
    const scroll = urlParams2.get('id');
    $( document ).ready(function() {

            if(scroll != undefined &&scroll != '' ){
            document.getElementById(scroll).scrollIntoView();
                
            }

    });




})