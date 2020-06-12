var regexEnum = 
{
	intege:"^-?[1-9]\\d*$",					//整数
	intege1:"^[1-9]\\d*$",					//正整数
	intege2:"^-[1-9]\\d*$",					//负整数
	num:"^([+-]?)\\d*\\.?\\d+$",			//数字
	num1:"^([1-9]\\d*|0)$",					//正数（正整数 + 0）
	num2:"^-([1-9]\\d*|0)$",				//负数（负整数 + 0）
	decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
	decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$", 	//正浮点数
	decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //负浮点数
	decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", //浮点数
	decmal4:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",  //非负浮点数（正浮点数 + 0）
	decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$", //非正浮点数（负浮点数 + 0） 
	
	decmal6:"^(([1-9][0-9]*)|0)(\\.[0-9]{1,2})?$",		//0+正整数 | 一位或两位的正浮点数
	decmal7:"^0(\\.[0-9]{1,2})?$",						//0+小于1的一位或两位的正浮点数
	decmal8:"^0(\\.[0-9]{1,2})+$",						//小于1的一位或两位的正浮点数

	email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
	color:"^[a-fA-F0-9]{6}$",				//颜色
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",				//url
	url1:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+((:\\d+)?)+([\\w-./?%&=]*)?$",	//url 支持端口号 
	
	ascii:"^[\\x00-\\xFF]+$",										//仅ACSII字符
	zipcode:"^\\d{6}$",												//邮编
	mobile:"^1[3|4|5|7|8][0-9]{9}$",								//手机
	ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
	notempty:"^\\S+$",						//非空
	picture:"(.*)\\.(jpg|jpeg|gif|bmp|png)$",	//图片
	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
	tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
	letter:"^[A-Za-z]+$",					//字母
	letter_u:"^[A-Z]+$",					//大写字母
	letter_l:"^[a-z]+$",					//小写字母
	idcard:"^(\\d{18,18}|\\d{15,15}|\\d{17,17}x)$",	//身份证
	
	number:"^[0-9]*$",									//数字字符串
	string1:"^\\w*$",									//数字、26个英文字母或者下划线组成的字符串
	string2:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]*$",		//仅中文
	string3:"^[\\w\\u2E80-\\uFE4F]*$",	//汉字 或 数字、字母、下划线组成的字符串
	string31:"^[\\u002E\\w\\u4E00-\\u9FA5\\uF900-\\uFA2D]*$",	//英文点，汉字 或 数字、字母、下划线组成的字符串
	string32:"^[\\-\\w\\u4E00-\\u9FA5\\uF900-\\uFA2D]*$",	//汉字 或 数字、字母、下划线、横划线组成的字符串
	string4:"^[(\\u0020-\\u007E)|\\t]*$",				//除汉字外的所有字符(半角键盘输入)
	string41:"^[\\u002E\\w\\u4E00-\\u9FA5\\uF900-\\uFA2D(\\u0020-\\u007E)|\\t]*$",				//汉字和所有字符(半角键盘输入)
	string5:"^[0-9a-zA-Z]*$"							//字母和数字组成的字符串
}

var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 

function isCardID(sId){
	//以下判断15位的身份证号，并转换成18位
	var len, re;
	len = sId.length;
	if (len == 15)
	{
		re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
		var arrSplit = sId.match(re);
		//检查生日日期是否正确
		var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay)
		{
			return "输入的身份证号里出生日期不对";
		}
		else
		{
			//将15位身份证转成18位
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0, i;
			sId = sId.substr(0, 6) + '19' + sId.substr(6, sId.length - 6);
			for(i = 0; i < 17; i ++)
			{
			nTemp += sId.substr(i, 1) * arrInt[i];
			}
			sId += arrCh[nTemp % 11];
		}
	}
	
	var iSum=0 ;
	var info="" ;
	if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误"; 
	sId=sId.replace(/x$/i,"a"); 
	if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法"; 
	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2)); 
	var d=new Date(sBirthday.replace(/-/g,"/")) ;
	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法"; 
	for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
	if(iSum%11!=1) return "你输入的身份证号非法"; 
	return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女") 
}

//短时间，形如 (13:04:06)
function isTime(str)
{
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) {return false}
	if (a[1]>24 || a[3]>60 || a[4]>60)
	{
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str)
{
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
	if(r==null)return false; 
	var d= new Date(r[1], r[3]-1, r[4]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
	var r = str.match(reg); 
	if(r==null) return false; 
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}

//验证文件上传目录
function isFilePath(str)
{
	var reg = /^[a-zA-Z]\:(\\[^\\\/\:\*\?\"<>\|]+)+$/;
	var r = str.match(reg);
	if(r==null) return false;
	return true;
}