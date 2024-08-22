$('#header').load("/header.html");
$('#footer').load("/footer.html");


var menu = ['/images/2_con02_02.png', '/images/2_con02_03.png', '/images/2_con02_04.png', '/images/2_con02_05.png'];


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




let tlslide = gsap.timeline({  scrollTrigger: {
        trigger: ".main",
        toggleActions: "play none none none",
    },
    defaults: { duration: 0.75, ease: "power1.out" },
});



const swiper3 = new Swiper('.con6_mid_swiper_1 ', {
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
    pagination: {
        el: '.con1_top_4th_pagination',
        clickable: true,
        renderBullet: function (index, className) {

            return '<span class="' + className+' '+className+index +' '+ 'con1_top_4th_bullet'+'">' +
                '      <div class="con2_half_pagination_' + index+' absol">\n' +
                '        <img class=\'con02_03\' src="/images/2_con02_07.png">\n' +
                '      </div>' +
                '' +
                '</span>';
        },
    },
    on: {
        init: function() {
            tlslide.from(".con6_mid_swiper_1_slide_absol", {
                yPercent:30,
                opacity:0,
            },'< 30%').from(".con6_mid_swiper_1_slide_p_con_con_1st", {
                yPercent:-20,
                opacity:0,
            },'< 30%').from(".con6_mid_swiper_1_slide_p_con_con_2nd", {
                yPercent:20,
                opacity:0,
            },'< 30%').play(); //play the timeline
        },
        slideChangeTransitionStart: function () {
        },
        slideChangeTransitionEnd: function () {
        },
        slideChange : function() {
            tlslide.restart(true, false);
            tlslide.play(); //play the timeline
        },
    }


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
            trigger: ".main",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl.from(".con1_tab_item_con", {
        yPercent:10,
        opacity:0,
    },'< 30%')




    let tl2 = gsap.timeline({  scrollTrigger: {
            trigger: ".main_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl2.from(".tab_item > div:nth-child(1) img", {
        yPercent:101,
    },'< 30%').from(".tab_item > div:nth-child(2) p", {
        yPercent:101,
    },'< 30%').from(".con6_mid_swiper_1_slide_p_con_2", {
        yPercent:10,
        opacity:0,
    },'< 30%')




    $('.floating_div_item').on('click',function(){
        $('.floating_div_item_on').removeClass('floating_div_item_on')
        $(this).addClass('floating_div_item_on')
        $('.tab_item').addClass('hide')
        $('.'+$(this).data('value')).removeClass('hide')
        tl2.restart();
    })



    $('.con1_tab_item').on('click',function(){
        $('.con1_tab_item_on').removeClass('con1_tab_item_on')
        $(this).addClass('con1_tab_item_on')
        $('.con1_tab_item_con').addClass('hide')
        $('.'+$(this).data('value')).removeClass('hide')
        tl.restart();
    })





    
    
    let tlclick = gsap.timeline();
    tlclick.from(".popup", {
        yPercent: 5,
        opacity:0,
    })
    
    $('.con6_mid_swiper_1_slide_p_con_2').on('click',function(){
        
        $(this).data('name')
        $('.fixed_popup').removeClass('hide')
        tlclick.restart();
        
        $('.popup_right_1st').text($(this).data('name'))
        $('.popup_right_2nd').text($(this).data('nameeng'))
        $('.popup_right_3rd_left').text($(this).data('content'))
        $('.popup_right_5th_top_2nd span').text($(this).data('wr3'))
        $('.popup_right_5th_top_3rd span').text($(this).data('wr4'))
        $('.popup_right_5th_con_item_top_2nd_1').text($(this).data('wr4')?$(this).data('wr4') :'-')
        $('.popup_right_5th_con_item_top_2nd_2').text($(this).data('wr5')?$(this).data('wr5') :'-')
        $('.popup_right_5th_con_item_top_2nd_3').text($(this).data('wr6')?$(this).data('wr6') :'-')
        $('.popup_right_5th_con_item_top_2nd_4').text($(this).data('wr7')?$(this).data('wr7') :'-')
        $('.popup_right_5th_con_item_top_2nd_5').text($(this).data('wr8')?$(this).data('wr8') :'-')
        $('.popup_right_5th_con_item_top_2nd_6').text($(this).data('wr9')?$(this).data('wr9') :'-')
        $('.popup_right_5th_con_item_top_2nd_7').text($(this).data('wr11')?$(this).data('wr11') :'-')
        $('.popup_right_5th_con_item_top_2nd_8').text($(this).data('wr12')?$(this).data('wr12') :'-')
        
        
        
        
        var myArray = $(this).data('ingredient').split("|");
        $('.popup_right_4th').html('');
         myArray.forEach(a=>{
             var content = '<div class="popup_right_4th_item rltv ">\n' +
    '          <div class="popup_right_4th_item_con flexcol">\n' +
    '            <img class="con01pop_05" src="/images/2_con01pop_05.jpg">\n' +
    '          </div>\n' +
    '          <div class="popup_right_4th_item_p absol main_small_title">\n' +
    '            <p>\n' +
    '              '+a+'\n' +
    '            </p>\n' +
    '          </div>\n' +
    '        </div>'
             $('.popup_right_4th').append(content)
             
             
         })
        
        $('.con01pop_03').attr('src',$(this).data('photo') =='/'?$(this).data('photo2') : $(this).data('photo') )
        
        
        
        
        
    })
    
    
    
        const urlParams2 = new URL(location.href).searchParams;
    const scroll = urlParams2.get('id');
    $( document ).ready(function() {

        if(scroll=='yogurt'){
            $('.floating_div_item:nth-child(2)').click()
        }
        if(scroll=='greek'){
            $('.floating_div_item:nth-child(3)').click()
        }        
        if(scroll=='coffee'){
            $('.floating_div_item:nth-child(4)').click()
        }        
        if(scroll=='drink'){
            $('.floating_div_item:nth-child(5)').click()
        }  
        if(scroll=='dessert'){
            $('.floating_div_item:nth-child(6)').click()
        }          

    });







})