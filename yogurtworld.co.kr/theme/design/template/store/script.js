$('#header').load("/header.html");
$('#footer').load("/footer.html");


function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




const swiper5 = new Swiper('.con6_mid_swiper_3 ', {
    slidesPerView: 1,
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
    },



});



const swiper6 = new Swiper('.con6_mid_swiper_4 ', {
    slidesPerView: 1,
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
array.forEach(function(a){
     var posiObj =    {
              title: '',
              address:'',
    };    
    posiObj.title = a.wr_subject;
    posiObj.address = a.wr_4;
    positions.push(posiObj)
})

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
            imageSize = new kakao.maps.Size(115, 85), // 마커이미지의 크기입니다
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
        infowindow.open(map, marker); $('.markerdesc').parent().parent().css('background','unset')
            $('.markerdesc').parent().parent().css('border','unset')
            $('.markerdesc').parent().parent().css('box-shadow','unset')
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
        
 $('.markerdesc').parent().parent().css('background','unset')
            $('.markerdesc').parent().parent().css('border','unset')
            $('.markerdesc').parent().parent().css('box-shadow','unset')        
    }
}



  function setBounds() { //추가한 함수
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    map.setBounds(bounds);
  }





//var infowindow = new kakao.maps.InfoWindow({
//    zIndex: 1
//});
//var mapContainer = document.getElementById("map"), // 지도를 표시할 div
//    mapOption = {
//        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
//        level: 3, // 지도의 확대 레벨
//    };
//var map = new kakao.maps.Map(mapContainer, mapOption);
//
//// 장소 검색 객체를 생성합니다
//var ps = new kakao.maps.services.Places();
//
//// 키워드로 장소를 검색합니다
//ps.keywordSearch("휴게소", placesSearchCB);
//
//// 키워드 검색 완료 시 호출되는 콜백함수 입니다
//function placesSearchCB(data, status, pagination) {
//    console.log(data)
//    data=data.filter(a=> a.place_name.indexOf('휴게소')>-1 && a.place_name.indexOf('점')>-1);
//    if (status === kakao.maps.services.Status.OK) {
//        // 검색된 장소 위치를 기준으로 지도 범위궁를 재설정하기위해
//        // LatLngBounds 객체에 좌표를 추가합니다
//        var bounds = new kakao.maps.LatLngBounds();
//
//        for (var i = 0; i < data.length; i++) {
//            displayMarker(data[i]);
//            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
//        }
//
//        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//        map.setBounds(bounds);
//    }
//}
//window.mobileCheck = function() {
//    let check = false;
//    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//    return check;
//};
//if(!mobileCheck()){
//    function displayMarker(place) {
//        // 마커를 생성하고 지도에 표시합니다
//        var imageSrc = '/images/con04_09.png', // 마커이미지의 주소입니다
//            imageSize = new kakao.maps.Size(65, 65), // 마커이미지의 크기입니다
//            imageOption = {
//                offset: new kakao.maps.Point(27, 69)
//            }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
//        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
//        var marker = new kakao.maps.Marker({
//            map: map,
//            position: new kakao.maps.LatLng(place.y, place.x),
//            image: markerImage // 마커이미지 설정
//        });
//
//        // 마커에 클릭이벤트를 등록합니다
//        kakao.maps.event.addListener(marker, "click", function() {
//            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
//            infowindow.setContent(
//                '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
//            );
//            infowindow.open(map, marker);
//        });
//    }
//}
//else{
//    function displayMarker(place) {
//        // 마커를 생성하고 지도에 표시합니다
//        var imageSrc = '/images/con04_09.png', // 마커이미지의 주소입니다
//            imageSize = new kakao.maps.Size(32.5, 32.5), // 마커이미지의 크기입니다
//            imageOption = {
//                offset: new kakao.maps.Point(27, 69)
//            }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
//        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
//        var marker = new kakao.maps.Marker({
//            map: map,
//            position: new kakao.maps.LatLng(place.y, place.x),
//            image: markerImage // 마커이미지 설정
//        });
//
//        // 마커에 클릭이벤트를 등록합니다
//        kakao.maps.event.addListener(marker, "click", function() {
//            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
//            infowindow.setContent(
//                '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
//            );
//            infowindow.open(map, marker);
//        });
//    }
//}
// 지도에 마커를 표시하는 함수입니다
    
$('.sido1').on('change',function(){
    if ($('.sido1').val() == '' || $('.sido1').val() == null || $('.sido1').val() == '시/도') {
        $('.con11_mid_right_bottom_item').show();
//        ps.keywordSearch("휴게소", placesSearchCB);
        return;
    }
//    ps.keywordSearch("휴게소 " + $('#location').val(), placesSearchCB);
    $('.con11_mid_right_bottom_item').hide();
    $('.noshop').hide();
    $('.con11_mid_right_bottom_item').get().forEach(function(a){
        if($(a).attr('class').indexOf($('.sido1').val())>-1)$(a).show()
        else{$(a).hide()}
    })

    if ($('.store:visible').length == 0) {
        markerMovebyaddress($('#location').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }
    
})
    

$('#direct').on('change', function() {
    if ($('#direct').val() == '' || $('#direct').val() == null) {
        $('.store').show();
        $('.noshop').hide();
        markerMove($('#direct').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        return;
    }
    markerMove($('#direct').val())
//    ps.keywordSearch("휴게소 " + $('#direct').val(), placesSearchCB);
    $('.store').hide();
    $('.noshop').hide();
    $('.store').get().forEach(function(a){
        if($(a).attr('class').indexOf($('#direct').val())>-1)$(a).show()
        else{$(a).hide()}
    })

    if ($('.store:visible').length == 0) {
        markerMove($('#direct').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }
})

$('#location').on('change', function() {
    if ($('#location').val() == '' || $('#location').val() == null) {
        $('.store').show();
        $('.noshop').hide();
        markerMovebyaddress($('#location').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        return;
    }
    markerMovebyaddress($('#location').val())
//    ps.keywordSearch("휴게소 " + $('#location').val(), placesSearchCB);
    $('.store').hide();
    $('.noshop').hide();
    $('.store').get().forEach(function(a){
        if($(a).attr('class').indexOf($('#location').val())>-1)$(a).show()
        else{$(a).hide()}
    })

    if ($('.store:visible').length == 0) {
        markerMovebyaddress($('#location').val())
//        ps.keywordSearch("휴게소", placesSearchCB);
        $('.noshop').show();
    }
})    
    
    
    
    
    
    
    let tlclick = gsap.timeline();
    tlclick.from(".popup", {
        yPercent: 20,
        opacity:0,
    })
    
    $('.con17_mid_map_search_item').on('click',function(){
        
        $(this).data('name')
        $('.fixed_popup').removeClass('hide')
        tlclick.restart();
        
        $('.popup_right_2nd').text($(this).data('name'))
        $('.popup_right_3rd_right').text($(this).data('address'))
        $('.popup_right_4th .popup_right_4th_right').text($(this).data('tel'))
        if($(this).data('date') !=''){
        $('.popup_right_5th .popup_right_4th_right_1').text('평일  ' + $(this).data('date'))
            
        }
        if($(this).data('date2') !=''){
                $('.popup_right_5th .popup_right_4th_right_2').text('주말  ' + $(this).data('date2'))
        }
        $('.popup_right_6th .popup_right_4th_right').text($(this).data('conv'))
        $('.con01_09_02').attr('src',$(this).data('photo'))
        
        if($(this).data('naver') !=''){
                     $('.popup_right_6th_left').attr('href',$(this).data('naver'))
                     $('.popup_right_6th_left').css('pointer-events','unset')
            
        
        }else{
                     $('.popup_right_6th_left').css('pointer-events','none')
            
        }
        
   
        
        
        
        
    })
    $('.popup_close').on('click',function(){
        $('.fixed_popup').addClass('hide')
        
    })
    $('.fixed_popup_con').on('click',function(){
        $('.fixed_popup').addClass('hide')
        
    })
    
    
    
    const urlParams2 = new URL(location.href).searchParams;
    const scroll = urlParams2.get('id');
    $( document ).ready(function() {

            if(scroll != undefined &&scroll != '' ){
            document.getElementById(scroll).scrollIntoView();
                
            }

    });

    
    
    
    
    
    
})