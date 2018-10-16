/*
  문현비 작성
*/

function login_check(url){
	var id = document.getElementById('id_input');
	var pw = document.getElementById('password_input');
	var error = 0;
									
	if(id.value == ""){    
		alert('아이디를 입력하세요');
		id.focus();
		error++;
		return;
	}//공백일 경우 에러

	if(pw.value == ""){
		alert('비밀번호를 입력하세요');
		pw.focus();
		error++;
		return;
	}//공백일 경우 에러

	if(error == 0){
		location = url;
	} //에러가 없으면 로그인 
}