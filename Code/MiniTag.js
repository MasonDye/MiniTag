/* -*-*-*-*-*-*-*
程序名称=MiniTag 版本:Release 1.1 作者:Gen
Email=admin@almondnet.cn
您可以,使用,转载,二次修改此代码(程序),但不可以删除版权声明,侵权必究,严禁商用!
-*-*-*-*-*-*-* */

//配置 Config Start

//插件 Plugin

//插件配置结束 Plugin End

//标题 Title
var title = "欢迎使用MiniTag!"; 

//信息页内容 Infopage
var info="MiniTag是一个由JavaScript开发的轻量级标签程序";

//大分类标题 Bigpage title
var bigpage1 = "大分类1";
var bigpage2 = "大分类2";
var bigpage3 = "大分类3";

//小分类标题和内容 Smallpage title and content
//小分类内容 Smallpage1
var smallpage11 = "小标题11";
var smallpage11text = "11";

var smallpage12 = "小标题12";
var smallpage12text = "12";

var smallpage13 = "小标题13";
var smallpage13text = "13";

var smallpage14 = "小标题14";
var smallpage14text = "14";

var smallpage15 = "小标题15";
var smallpage15text = "15";

//小分类内容 Smallpage2
var smallpage21 = "小标题21";
var smallpage21text = "21";

var smallpage22 = "小标题22";
var smallpage22text = "22";

var smallpage23 = "小标题23";
var smallpage13text = "23";

var smallpage24 = "小标题24";
var smallpage24text = "24";

var smallpage25 = "小标题25";
var smallpage25text = "25";

//小分类内容 Smallpage3
var smallpage31 = "小标题31";
var smallpage31text = "31";

var smallpage32 = "小标题32";
var smallpage32text= "32";

var smallpage33 = "小标题33";
var smallpage33text = "33";

var smallpage34 = "小标题34";
var smallpage34text= "34";

var smallpage35 = "小标题35";
var smallpage35text = "35"

//配置结束,程序开始 Config end program start

alert(title);
alert("首页导航:\n"+"1."+bigpage1+"\n 2."+bigpage2+"\n 3."+bigpage3+"\n 4.信息&退出");

page=prompt("请输入导航分类数字")

if (page==1)
	{
		alert(bigpage1+"导航:\n"+"11."+smallpage11+"\n 12."+smallpage12+"\n 13."+smallpage13+"\n 14."+smallpage14+"\n 15."+smallpage15);
	}
else
if (page==2)
	{
		alert(bigpage2+"导航:\n"+"21."+smallpage21+"\n 22."+smallpage22+"\n 23."+smallpage23+"\n 24."+smallpage24+"\n 25."+smallpage25);
	}
else
if (page==3)
	{
		alert(bigpage3+"导航:\n"+"31."+smallpage31+"\n 32."+smallpage32+"\n 33."+smallpage33+"\n 34."+smallpage34+"\n 35."+smallpage35);
	}
else
if (page==4)
	{
		alert(info+"\n作者:Gen\n项目地址:https://almondcloud.cn/s/4Y9FK");
		throw new Error('退出程序');
	}
else
	{
		alert("您的输入有误");
	}
smallpage=prompt("请输入小分类分类数字")

//Smallpage1
if (smallpage==11)
	{
		alert(smallpage11text);
	}
else
	if (smallpage==12)
	{
		alert(smallpage12text);
	}
else
	if (smallpage==13)
	{
		alert(smallpage13text);
	}
else
	if (smallpage==14)
	{
		alert(smallpage14text);
	}
else
	if (smallpage==15)
	{
		alert(smallpage15text);
	}
else
//Smallpage2
if (smallpage==21)
	{
		alert(smallpage21text);
	}
else
	if (smallpage==22)
	{
		alert(smallpage22text);
	}
else
	if (smallpage==23)
	{
		alert(smallpage23text);
	}
else
	if (smallpage==24)
	{
		alert(smallpage24text);
	}
else
	if (smallpage==25)
	{
		alert(smallpage25text);
	}
else
//Smallpage3
if (smallpage==31)
	{
		alert(smallpage31text);
	}
else
	if (smallpage==32)
	{
		alert(smallpage32text);
	}
else
	if (smallpage==33)
	{
		alert(smallpage33text);
	}
else
	if (smallpage==34)
	{
		alert(smallpage34text);
	}
else
	if (smallpage==35)
	{
		alert(smallpage35text);
	}
else
	{
		alert("您的输入有误");
	}
alert("感谢您使用MiniTag");

//程序结束 Program end