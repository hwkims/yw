$('#header').load("/header.html");
$('#footer').load("/footer.html");


function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



$('.form_submit').on('click', function() {
    if ($('#tel1').val().trim() == '') {
        alert('연락처를 입력 해주세요.')
        return
    }

    if ($('.form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail.php",
            type: "post",
            data: {
                name: $('#name').val(),
                tel1: $('#tel1').val(),
                area: $('#area').val(),
                form_index: $('#duration').val(),
            }
        }).done(function(data) {
			//NAVER SCRIPT
if (typeof(wcs) != "undefined") {
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_29fe1233fc66";
var _nasa={};
_nasa["cnv"] = wcs.cnv("4","1");
wcs_do(_nasa);
}
            alert("문의양식이 전송 되었습니다.")
            $('#name').val('')
            $('#tel1').val('')
            $('#area').val('')
            $('#duration').val('')
        });}
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})


$(window).on('load', function(){
    $('section > img').each(function() {
        var imageWidth = $('html').width()*$(this).prop('naturalWidth')/1907;    // Current image width
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
            trigger: ".main_top_3rd",
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
            trigger: ".con1_top_con",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl2.from(".con01_04", {
        yPercent:30,
        opacity:0,
    },'< 30%').from(".con1_top_mid", {
        width:0,
    },'< 30%').from(".con01_06", {
        yPercent:101,
    },'< 30%').from(".con01_07", {
        yPercent:-101,
    },'< 20%').from(".con01_08", {
        yPercent:101,
    },'< 50%').from(".con01_09", {
        yPercent:-101,
    },'< 20%')




    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2_top_2nd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl3.from(".con02_01", {
        yPercent:101,
    },'< 30%').from(".con2_top_2nd_item", {
        stagger:0.2,
        xPercent:20,
        opacity: 0,
    },'< 30%').from(".con2_top_2nd_item_arrow", {
        stagger:0.2,
        xPercent:-20,
        opacity: 0,
    },'< 30%')



    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_2nd_1st",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl4.from(".con3_top > img", {
        scale:1.7,
        opacity:0,
        ease:'expo.in',
    },'< 30%').to(".con3_top_absol > img", {
        scale:1.7,
        opacity:0,
        ease:'expo.in',
    },'< 30%').from(".con03_03", {
        yPercent:101,
    },'< 30%')



    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con25_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });
    tl5.from(".con03_07", {
        yPercent:101,
    },'< 30%').from(".con03_08", {
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