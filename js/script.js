/*Slider*/
function change1() {
    document.querySelector(".item1").classList.remove("active");
    document.querySelector(".item3").classList.remove("active");
    document.querySelector(".item2").classList.add("active");
    document.querySelector(".btn3").classList.remove("active");
    document.querySelector(".btn2").classList.remove("active");
    document.querySelector(".btn1").classList.add("active");
}
function change2() {
    document.querySelector(".item1").classList.remove("active");
    document.querySelector(".item2").classList.remove("active");
    document.querySelector(".item3").classList.add("active");
    document.querySelector(".btn1").classList.remove("active");
    document.querySelector(".btn3").classList.remove("active");
    document.querySelector(".btn2").classList.add("active");

}
function change3() {
    document.querySelector(".item3").classList.remove("active");
    document.querySelector(".item2").classList.remove("active");
    document.querySelector(".item1").classList.add("active");

    document.querySelector(".btn1").classList.remove("active");
    document.querySelector(".btn2").classList.remove("active");
    document.querySelector(".btn3").classList.add("active");
}
/*Email*/
function email() {
    var email = document.getElementById("input1");
    var msg1 = document.getElementById("msg1");
    if (email.value.length == 0) {
        msg1.innerHTML = "هذا الحقل اجباري!";
    } else {
        alert("تم اشتراكك بالخدمة بالبريد التالي\n" + email.value);
        email.value = "";
    }
}
var input = document.getElementById("input1");
var msg1 = document.getElementById("msg1");
input.onkeydown = function () {
    msg1.innerHTML = " ";
}
/*Massege*/
var send = document.getElementById("send");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3");
var msg4 = document.getElementById("msg4");
send.onclick = function () {
    if (input2.value.length == 0) {
        msg2.innerHTML = "هذا الحقل اجباري!";
    } if (input3.value.length == 0) {
        msg3.innerHTML = "هذا الحقل اجباري!";
    } if (input4.value.length == 0) {
        msg4.innerHTML = "هذا الحقل اجباري!";
    }
    else {
        if (confirm("هل تريد ارسال هذه الرسالة ؟\n" + input2.value + "\n" + input3.value + "\n" + input4.value)) {
            alert("تم ارسال الرسالة..")
        } else {
            alert("لم يتم ارسال الرسالة");
        }
    }

}
input2.onkeydown = function () {
    msg2.innerHTML = " ";
}
input3.onkeydown = function () {
    msg3.innerHTML = " ";
}
input4.onkeydown = function () {
    msg4.innerHTML = " ";
}
