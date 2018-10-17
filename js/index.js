function zhuce() {
	var result = confirm("是否注册？");
	if(result == true) {
		alert("注册成功，请登录");
	} else {
		alert("注册已取消");
	}
}

function upperCase()
{
	var phone = document.getElementById('phone').value;
	if(!(/^1[345789]\d{9}$/.test(phone))) {
		alert("手机号有误，请重填");
		return false;
	}
}