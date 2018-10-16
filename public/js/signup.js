/*
    문현비 작성
*/
function joinchk() {
var login_id = document.getElementById("id");
var login_pw = document.getElementById("password");
var login_pwc = document.getElementById("password_chk");
var login_tel = document.getElementById("tel");
var error =0;
//아이디 입력 확인
    if(login_id.value == ""){    
        alert('아이디를 입력하세요');
        login_id.focus();
        error++;
        return
    }

//비밀번호 입력확인
    if(login_pw.value == ""){
            alert('비밀번호를 입력하세요');
            login_pw.focus();
            error++;
            return
        };

//비밀번호 일치여부 확인
    if (login_pw.value != login_pwc.value) {
            alert('비밀번호가 일치하지않습니다');
            login_pw.value ="";
            login_pwc.value ="";
            error++;
            return
        };
//비밀번호 글자 수 확인
    if (login_pw.value.length<8) {
            alert('비밀번호를 8글자 이상 입력하세요');
            login_pw.focus();
            login_pw.select();
            error++;
            return
        };

//전화번호 입력 여부 확인
    if(login_tel.value == ""){ 
            alert('전화번호를 입력하세요');
            login_tel.focus();
            return
        };
    
    var identity = login_id.value;
    
    if(error==0) confirm(identity+ '님 회원가입이 완료되었습니다.');
}


//아이디 중복확인 
function idchk(){
    var ch;
    var ch2;
    var login_id = document.getElementById("id");
    
//아이디 조건 확인
        for (var i = 0; i < login_id.value.length; i++) {
            ch = login_id.value.charAt(i)
                if (!(ch>='0' && ch<='9')&&!(ch>='a' && ch<='z')) {
                    alert('대문자, 특수문자는 사용이 불가능합니다.');
                    login_id.focus();
                    login_id.select();
                     return
        }
        }
//아이디 글자 수 확인                                                                
                if (login_id.value.length<8) {
            alert('아이디를 8글자 이상 입력해주세요.');
            login_id.focus();
            login_id.select();
            return
        }

    
    for (var i = 0; i < login_id.value.length; i++) {
            ch2 = login_id.value.charAt(i)
              if ((login_id.value.length>=8)&&(ch2>='0' && ch2<='9')&&(ch2>='a' && ch2<='z')) {
                 alert('사용가능한 아이디입니다.');
                }
        }
    
}

function namechk(){
     alert('사용가능한 닉네임 입니다.');
}

function allcheck(){
    var checkbox = document.getElementByClass('checkbox');
    var allcheck = document.getElementById('allcheck');
    if(allcheck.checked==true) {
        checkbox.checked==true; 
    }
    
    else checkbox.checked==false; 
}