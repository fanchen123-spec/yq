// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("给点零花钱吧");
	   }else if(Dianji==2){
		   		alert("我是真的太穷了");
		   		
	   }else if(Dianji==3){
		   		alert("只有有零花钱，我就是一个没有感情的洗碗机器");
		   		
	   }else if(Dianji==4){
		   		alert("只有有零花钱，我就是一个没有感情的拖地机器");
		   		
	  }else if(Dianji==5){
		   		alert("只有有零花钱，我就是一个没有感情的做饭机器");
	  }else if(Dianji==6){
		   		alert("只有有零花钱，我就是一个没有感情的洗衣机");
	  }else if(Dianji==7){
		   		alert("就给点吧");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("感激感激");
	}
	

}