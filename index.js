var btn = document.getElementById("login");
var reg = document.getElementById("regist");

btn.addEventListener("click", function(){   
   var userId = document.getElementById("userId").value;
   var userPw = document.getElementById("userPw").value;
    if(userId !=null && userPw !=null){
        alert("로그인에 성공하였습니다.");
    }else{
        alert("빈 값을  채워 주세요.");
    }
});

reg.addEventListener("click", function(){
   alert("회원가입 버튼을 클릭하였습니다."); 
});