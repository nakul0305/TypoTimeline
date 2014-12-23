// JavaScript Document
var masterIndex=0;

function getStep(){
	return $("#year_scroll").width();
}

function goBack(){
	if(masterIndex==0)
		return 0;
	$("#goBack").unbind("click");
	$("#goFw").unbind("click");
	var child=masterIndex+1;
	$("#content_scroll .image_cont:nth-child("+child+") .desc_text").css({right:-300});
	$("#content_scroll .image_cont:nth-child("+child+")").fadeOut(750,'easeOutCubic',function(){});	
	var step=getStep();
	$("#date_holder").animate({marginLeft:(masterIndex-1)*step*-1},400,'easeOutCubic',function(){
		$("#content_scroll .image_cont:nth-child("+masterIndex+") .desc_text").animate({right:0},500,'easeOutCubic',function(){
			masterIndex--;
			$("#goBack").unbind("click").bind("click",goBack);
			$("#goFw").unbind("click").bind("click",goNext);
		});
	});	
}

function goNext(){
	if(masterIndex==17)
		return 0;
	$("#goBack").unbind("click");
	$("#goFw").unbind("click");
	masterIndex++;
	var step=getStep();
	$("#content_scroll .image_cont:nth-child("+masterIndex+") .desc_text").css({right:-300});
	var child=masterIndex+1;
	$("#content_scroll .image_cont:nth-child("+child+")").fadeIn(750,'easeOutCubic');
	$("#date_holder").animate({marginLeft:masterIndex*step*-1},400,'easeOutCubic',function(){
		$("#content_scroll .image_cont:nth-child("+child+") .desc_text").animate({right:0},500,'easeOutCubic',function(){
			$("#goBack").unbind("click").bind("click",goBack);
			$("#goFw").unbind("click").bind("click",goNext);
		});
	});
}

$(document).ready(function(e) {
	jQuery.easing.def = "jswing";
	$("#goBack").unbind("click").bind("click",goBack);
	$("#goFw").unbind("click").bind("click",goNext);
	$(".image_cont").height($("#content_scroll").height());
	$("#content_scroll .image_cont:nth-child(1)").fadeIn(500,'easeOutCubic',function(){
		$("#content_scroll .image_cont:nth-child(1) .desc_text").animate({right:0},500,'easeOutCubic',function(){});	
	});	
})