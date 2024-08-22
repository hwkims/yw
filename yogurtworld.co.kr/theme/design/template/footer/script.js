//개인정보처리 방침//
var elements = document.getElementsByClassName("per_Infor_policy");
var modal = document.getElementById("modal");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
        event.preventDefault();
        modal.style.display = "block";
    });
}

var closeButton = document.getElementsByClassName("close")[0];

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
//개인정보처리 방침//
$('#header').load("/header.html");
$('#footer').load("/footer.html");

$('.quick_2').on('click', function() {
    if ($('#tel1_quick').val().trim() == '') {
        alert('정보를 입력 해주세요.')
        return
    }
//        if ($('.form_agree01').is(':checked')) {
    $.ajax({
        url: "/bbs/mail.php",
        type: "post",
        data: {
            name: $('#name_quick').val(),
            tel1: $('#tel1_quick').val(),
            duration: $('#area_quick').val(),
        }
    }).done(function(data) {
        alert("문의양식이 전송 되었습니다.")
        $('#name_quick').val('')
        $('#tel1_quick').val('')
        $('#area_quick').val('')
    });
})