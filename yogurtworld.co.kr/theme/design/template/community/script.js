$('#header').load("/header.html");
$('#footer').load("/footer.html");





$('.con5 .form_submit').on('click', function() {
    if ($('#tel1_3rd').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }

    if ($('.con5 .form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail2.php",
            type: "post",
            data: {
                title: $('#title_3rd').val(),
                name: $('#name_3rd').val(),
                tel: $('#tel1_3rd').val(),
                email: $('#email_3rd').val(),
                form_index: $('#form_index_3rd').val(),

            }
        }).done(function(data) {
            alert("제휴/제안 문의가 전송 되었습니다.")
            $('#title_3rd').val('')
            $('#name_3rd').val('')
            $('#tel1_3rd').val('')
            $('#email_3rd').val('')
            $('#form_index_3rd').val('')
        });
    }
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})





$('.fixed_popup_1 .form_submit').on('click', function() {
    if ($('#tel1').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }

    if ($('.fixed_popup_1 .form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail3.php",
            type: "post",
            data: {
                name: $('#from_name2').val(),
                tel: $('#tel1').val(),
                email: $('#email').val(),
                store: $('#store').val(),
                visitdatetime: $('#visitdate').val() +' '+ $('#visittime').val() +'시',
                form_index: $('#form_index').val(),

            }
        }).done(function(data) {
            alert("매장칭찬을 전송 하였습니다.")
            $('#visitdate').val('')
            $('#visittime').val('')
            $('#name').val('')
            $('#tel1').val('')
            $('#email').val('')
            $('#store').val('')
            $('#form_index').val('')
        });
    }
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})




$('.fixed_popup_2 .form_submit').on('click', function() {
    if ($('#tel1_2nd').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }

    if ($('.fixed_popup_2 .form_agree_check').is(':checked')) {
        $.ajax({
            url: "/bbs/mail4.php",
            type: "post",
            data: {
                name: $('#name_2nd').val(),
                tel: $('#tel1_2nd').val(),
                email: $('#email_2nd').val(),
                form_index: $('#form_index_2nd').val(),

            }
        }).done(function(data) {
            alert("개선사항을 전송 하였습니다.")
            $('#name_2nd').val('')
            $('#tel1_2nd').val('')
            $('#email_2nd').val('')
            $('#form_index_2nd').val('')
        });
    }
    else{
        alert('개인정보취급방침을 동의해주세요.')
    }
})




$(window).scroll(function(){
    var herecon = $(".main").offset().top-10;
    var herecon2 = $(".con2").offset().top-10;
    var herecon3 = $(".con5").offset().top-10;
    var herecon4 = $(".con7").offset().top-10;
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





function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$('.con8_con_item_top_3rd').slideUp();
$('.con8_con_item').on('click',function(){
    
    
    
    $(this).children('.con8_con_item_top_absol_2nd').toggleClass('con8_con_item_top_absol_2nd_rotate')

    $(this).toggleClass('con8_con_item_on')
    $(this).children('.con8_con_item_top_3rd').slideToggle();
})



    let tl22 = gsap.timeline({  scrollTrigger: {
            trigger: ".main",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl22.from(".popup", {
        yPercent:10,
        opacity:0,
    },'< 30%')



$('.con3_top_3rd_item').on('click',function(){
    $('.fixed_popup').addClass('hide')
    $('.'+$(this).data('value')).removeClass('hide')
    tl22.restart();
})






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
            trigger: ".con2_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl2.from(".con02_01", {
        yPercent:101,
    },'< 30%').from(".con2_top_2nd p", {
        yPercent:101,
    },'< 30%')





    let tl3 = gsap.timeline({  scrollTrigger: {
            trigger: ".con2",
            scrub:0.5,
            start: "0%",
            end: "100%",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.5, ease: "power1.out" },
    });

    tl3.to(
        ".con2_top_3rd",
        { scale:1.05}
    )


    let mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", () => {

        let tl3_2nd = gsap.timeline({  scrollTrigger: {
                trigger: ".con4",
                scrub:0.5,
                start: "0%",
                end: "100%",
                toggleActions: "play none none none",
            },
            defaults: { duration: 0.5, ease: "power1.out" },
        });

        tl3_2nd.to(
            ".con4_top_3rd",
            {
                css:{

                    'border-radius':'23px',
                    'width':'96%',

                },
            }
        )



        let tl4_2nd = gsap.timeline({  scrollTrigger: {
                trigger: ".con7",
                scrub:0.5,
                start: "0%",
                end: "100%",
                toggleActions: "play none none none",
            },
            defaults: { duration: 0.5, ease: "power1.out" },
        });

        tl4_2nd.to(
            ".con7_top_3rd",
            {
                css:{

                    'border-radius':'23px',
                    'width':'96%',

                },
            }
        )





    })


    mm.add("(max-width: 600px)", () => {


        let tl3_2nd = gsap.timeline({  scrollTrigger: {
                trigger: ".con4",
                scrub:0.5,
                start: "0%",
                end: "100%",
                toggleActions: "play none none none",
            },
            defaults: { duration: 0.5, ease: "power1.out" },
        });

        tl3_2nd.to(
            ".con4_top_3rd",
            {
                css:{

                    'border-radius':'11px',
                    'width':'96%',

                },
            }
        )



    })










    let tl4 = gsap.timeline({  scrollTrigger: {
            trigger: ".con3_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl4.from(".con02_03", {
        yPercent:101,
    },'< 30%').from(".con3_top_2nd p", {
        yPercent:101,
    },'< 30%')



    let tl5 = gsap.timeline({  scrollTrigger: {
            trigger: ".con4_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl5.from(".con03_01", {
        yPercent:101,
    },'< 30%').from(".con4_top_2nd p", {
        yPercent:101,
    },'< 30%')




    let tl6 = gsap.timeline({  scrollTrigger: {
            trigger: ".form_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl6.from(".con03_03", {
        yPercent:101,
    },'< 30%')




    let tl7 = gsap.timeline({  scrollTrigger: {
            trigger: ".con6_mid",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl7.from(".con03_05", {
        yPercent:101,
    },'< 30%')



    let tl8 = gsap.timeline({  scrollTrigger: {
            trigger: ".con7_top_3rd",
            toggleActions: "play none none none",
        },
        defaults: { duration: 0.75, ease: "power1.out" },
    });


    tl8.from(".con04_01", {
        yPercent:101,
    },'< 30%').from(".con7_top_2nd p", {
        yPercent:101,
    },'< 30%')



    
            let tlclick3 = gsap.timeline();
    tlclick3.from('.con1_con_item', {
        y:100,
        opacity:0,
    },'< 30%')
    

    
    
        $('.con1_tab_item').on('click',function(){
        $('.con1_tab_item').removeClass('con1_tab_item_on')
        $(this).addClass('con1_tab_item_on')
        if($(this).data('value')=='all' ){
            $('.con1_con_item').removeClass('hide')
          tlclick3.restart();

            
            return
        }
        $('.con1_con_item').addClass('hide')
        $('.'+$(this).data('value')).removeClass('hide')
        tlclick3.restart();

        
    })
    
    
    

    
    
    $('.con17_mid_map_search_top > div').on('click',function(){
    $('.con17_mid_map_search_top > div').removeClass('on2')
    $('.con17_mid_map_search_top > div').addClass('off2')
    $(this).addClass('on2')
    $(this).removeClass('off2')
    $('.con17_mid_map_search_mid > input').addClass('hide')
    $('.'+$(this).data('map')).removeClass('hide')

})


  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
          };
var infowindow = new kakao.maps.InfoWindow({
    zIndex: 1
});
  // 지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();



  var positions = [];
     var posiObj =    {
              title: '요거트월드 본사',
              address:'인천광역시 미추홀구 학익소로23번길 1, 4층',
    };    

    positions.push(posiObj)

  var positions2 = [];
  // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
  var bounds = new kakao.maps.LatLngBounds(); //추가한 코드

  positions.forEach(function (position,index) {
         var posiObj =    {
                  title: '',
                  y: '',
                  x: '',
                  address:'',
                  marker:null,
        };
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(position.address, function(result, status) {
        posiObj.y = result[0].y;
        posiObj.x = result[0].x;
        posiObj.title = position.title;
        posiObj.address = position.address;
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var imageSrc = '/images/7_con01_10.png', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(85, 65), // 마커이미지의 크기입니다
            imageOption = {
                offset: new kakao.maps.Point(27, 69)
            }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

          
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
            image: markerImage // 마커이미지 설정
        });
        marker.setMap(map); //추가한 코드
        posiObj.marker = marker;
        positions2.push(posiObj)
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(coords); //추가한 코드, 현재 코드에서 좌표정보는 point[i]가 아닌 coords이다.
          

        kakao.maps.event.addListener(marker, "click", function() {
            

            infowindow.close();
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
                '<div class="markerdesc" style="padding:5px;font-size:12px;">' + position.title + "</div>"
            );
            infowindow.open(map, marker);
            $('.markerdesc').parent().parent().css('background','unset')
            $('.markerdesc').parent().parent().css('border','unset')
            $('.markerdesc').parent().parent().css('box-shadow','unset')
            
        });
          
          
          
          
//        // 인포윈도우로 장소에 대한 설명을 표시합니다
//        var infowindow = new kakao.maps.InfoWindow({
//          content:'<div style="padding:5px;font-size:12px;">' + position.title + "</div>"
//        });
//        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        // map.setCenter(coords); //제거한 코드
        setBounds(); //추가한 코드
      }
    });
  });
        const urlParams = new URL(location.href).searchParams;
const name = urlParams.get('searchKeyword');
    if(name != null && name != undefined){
    $('#direct').val(name)
//    markerMove(name)
//    ps.keywordSearch("휴게소 " + $('#direct').val(), placesSearchCB);
    $('.store').hide();
    $('.noshop').hide();
    $('.store').get().forEach(function(a){
        if($(a).attr('class').indexOf(name)>-1)$(a).show()
        else{$(a).hide()}
    })

    if ($('.store:visible').length == 0) {
//        markerMove(name)
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }    
    }

function markerMove(placeName){
    if((positions2.filter(a=>a.title.indexOf(placeName)>-1) != undefined && positions2.filter(a=>a.title.indexOf(placeName)>-1) != null)|| 
      (positions2.filter(a=>a.address.indexOf(placeName)>-1) != undefined && positions2.filter(a=>a.address.indexOf(placeName)>-1) != null)){
        
        
        
    var x = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].x
    var y = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].y
    var title = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].title
    var locPosition = new kakao.maps.LatLng(y, x)
    var marker = positions2.filter(a=>a.title.indexOf(placeName)>-1 || a.address.indexOf(placeName)>-1)[0].marker
    map.setCenter(locPosition);
        infowindow.close();

          
        infowindow.setContent('<div class="markerdesc" style="padding:5px;font-size:12px;">' + title + "</div>");
        infowindow.open(map, marker);
    }
}

function markerMovebyaddress(placeName){
    if(positions2.filter(a=>a.address.indexOf(placeName)>-1) != undefined && positions2.filter(a=>a.address.indexOf(placeName)>-1) != null ){
    var x = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].x
    var y = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].y
    var title = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].title
    var locPosition = new kakao.maps.LatLng(y, x)
    var marker = positions2.filter(a=>a.address.indexOf(placeName)>-1)[0].marker
    map.setCenter(locPosition);
        infowindow.close();

          
        infowindow.setContent('<div class="markerdesc" style="padding:5px;font-size:12px;">' + title + "</div>");
        infowindow.open(map, marker);
    }
}



  function setBounds() { //추가한 함수
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    map.setBounds(bounds);
  }


 
    
        const urlParams2 = new URL(location.href).searchParams;
    const scroll = urlParams2.get('id');
    $( document ).ready(function() {

            if(scroll != undefined &&scroll != '' ){
            document.getElementById(scroll).scrollIntoView();
                
            }

    });

    
    
    
    
    




})