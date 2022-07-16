console.log("Version Release 1.2\nPower by Gen")

/*
* 程序名称 MiniTag 版本:Release 1.2 作者:Gen
* Email=admin@almondnet.cn
* 您可以,使用,转载,二次修改此代码(程序),但不可以删除版权声明,侵权必究,严禁商用!
*/

//配置 Config Start

//插件 Plugin

//插件配置结束 Plugin End

//标题 Title
var title = "欢迎使用MiniTag!"; 

//信息页内容 Infopage
var info="MiniTag是一个由JavaScript开发的轻量级标签程序";

//大分类标题 bigPage title
var bigPage1 = "大分类1";
var bigPage2 = "大分类2";
var bigPage3 = "大分类3";

//小分类标题和内容 smallPage title and content
//小分类内容 smallPage1
var smallPage11 = "小标题11";
var smallPage11Text = "11";

var smallPage12 = "小标题12";
var smallPage12Text = "12";

var smallPage13 = "小标题13";
var smallPage13Text = "13";

var smallPage14 = "小标题14";
var smallPage14Text = "14";

var smallPage15 = "小标题15";
var smallPage15Text = "15";

//小分类内容 smallPage2
var smallPage21 = "小标题21";
var smallPage21Text = "21";

var smallPage22 = "小标题22";
var smallPage22Text = "22";

var smallPage23 = "小标题23";
var smallPage13Text = "23";

var smallPage24 = "小标题24";
var smallPage24Text = "24";

var smallPage25 = "小标题25";
var smallPage25Text = "25";

//小分类内容 smallPage3
var smallPage31 = "小标题31";
var smallPage31Text = "31";

var smallPage32 = "小标题32";
var smallPage32Text= "32";

var smallPage33 = "小标题33";
var smallPage33Text = "33";

var smallPage34 = "小标题34";
var smallPage34Text= "34";

var smallPage35 = "小标题35";
var smallPage35Text = "35"

//配置结束,程序开始 config End Program Start

alert(title);
alert("首页导航:\n"+"1."+bigPage1+"\n 2."+bigPage2+"\n 3."+bigPage3+"\n 4.信息&退出");  //mainPage

let page=prompt("请输入导航分类数字")  //input Page Number

if (page==1)  //if page = 1
	{
		alert(bigPage1+"导航:\n"+"11."+smallPage11+"\n 12."+smallPage12+"\n 13."+smallPage13+"\n 14."+smallPage14+"\n 15."+smallPage15);  //bigPage
	}
else
if (page==2)
	{
		alert(bigPage2+"导航:\n"+"21."+smallPage21+"\n 22."+smallPage22+"\n 23."+smallPage23+"\n 24."+smallPage24+"\n 25."+smallPage25);
	}
else
if (page==3)
	{
		alert(bigPage3+"导航:\n"+"31."+smallPage31+"\n 32."+smallPage32+"\n 33."+smallPage33+"\n 34."+smallPage34+"\n 35."+smallPage35);
	}
else
if (page==4)
	{
		alert(info+"\n作者:Gen\n项目地址:https://github.com/AlmondNetwork/MiniTag\n国内镜像地址:https://almondcloud.cn/s/4Y9FK");  //info
		throw new Error('退出程序');
	}
else
	{
		alert("您的输入有误");
	}
let smallPage=prompt("请输入小分类分类数字")  //input smallPage Number

//smallPage1
if (smallPage==11)//if page = 11
	{
		alert(smallPage11Text);// output smallPage11Text
	}
else
	if (smallPage==12)
	{
		alert(smallPage12Text);
	}
else
	if (smallPage==13)
	{
		alert(smallPage13Text);
	}
else
	if (smallPage==14)
	{
		alert(smallPage14Text);
	}
else
	if (smallPage==15)
	{
		alert(smallPage15Text);
	}
else
//smallPage2
if (smallPage==21)
	{
		alert(smallPage21Text);
	}
else
	if (smallPage==22)
	{
		alert(smallPage22Text);
	}
else
	if (smallPage==23)
	{
		alert(smallPage23Text);
	}
else
	if (smallPage==24)
	{
		alert(smallPage24Text);
	}
else
	if (smallPage==25)
	{
		alert(smallPage25Text);
	}
else
//smallPage3
if (smallPage==31)
	{
		alert(smallPage31Text);
	}
else
	if (smallPage==32)
	{
		alert(smallPage32Text);
	}
else
	if (smallPage==33)
	{
		alert(smallPage33Text);
	}
else
	if (smallPage==34)
	{
		alert(smallPage34Text);
	}
else
	if (smallPage==35)
	{
		alert(smallPage35Text);
	}
else
	{
		alert("您的输入有误");
	}
alert("感谢您使用MiniTag"); //Thank you for using MiniTag

//程序结束 program End