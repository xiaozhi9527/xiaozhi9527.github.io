function zhuce() {
	var result = confirm("注册成功");
	if(result == true) {
		alert("确定进入下一页");
	} else {
		alert("取消返回上一页");
	}
}

function upperCase()
{
	var phone = document.getElementById('phone').value;
	if(!(/^1[34578]\d{9}$/.test(phone))) {
		alert("手机号码有误，请重填");
		return false;
	}
}