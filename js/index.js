$(function(){
	
	$('.top-left').hover(
		function(){$('.top-left-hide').css('display','block');$(this).css({'background':'#fff','color':'red'})},
		function(){$('.top-left-hide').css('display','none');$(this).css({'background':'#f7f7f7','color':'#666'})}
	);
	
	$('.top-left-hide span').hover(
		function(){$(this).css('background','#e2e2e2')},
		function(){$(this).css('background','#fff')}
	);
	
	$('.top-right-show').hover(
		function(){$(this).children().css({'display':'inline-block'});$(this).css({'background':'#fff','color':'red'})},
		function(){$('.top-right-show div').css('display','none');$(this).css({'background':'#f7f7f7','color':'#666'})}
	);
	$('.top-right-show div span').hover(
		function(){$(this).css('background','#e2e2e2')},
		function(){$(this).css('background','#fff')}
	);
	$('.top-right-show div dd').hover(
		function(){$(this).css('background','#e2e2e2')},
		function(){$(this).css('background','#fff')}
	);
	//nav 下的li划过的效果
	$('.nav-right li').hover(
		function(){$(this).children('a').css({'color':'red'});$(this).children('span').css({'bottom':'-3','display':'inline-block'}).animate({top:32})},
		function(){$(this).children('a').css('color','#000');$(this).children('span').css({'display':'none'})}
	);
	//banner
	$(function(){
		var Index=0;
		var oTimer=null;
		Is=true;
		function move(){
			Index++;
			if(Index>=6){Index=0}
			Is=false;
			var $Lis=$('.btn-lists li')
			$Lis.eq(Index).addClass('active').siblings().removeClass('active');
			$('.banner-cont img').attr({src:'img/banner'+(Index+1)+'.jpg'}).stop(true,false).fadeOut(10).fadeIn();
			
		};
		function auto(){
			oTimer=setInterval(function(){move()},2000)
		};
		auto();
		$('.banner-cont').hover(
			function(){clearInterval(oTimer);$('.p-btn').css({'display':'block'})},
			function(){auto();$('.p-btn').css({'display':'none'})}
		);
		$('.btn-right').click(function(){if(Is){move()};Is=true;});
		$('.btn-left').click(function(){
			if(Is){
				Is=false;
				Index--;
				if(Index<=-1){Index=5}
				var $Lis=$('.btn-lists li')
				$Lis.eq(Index).addClass('active').siblings().removeClass('active');
				$('.banner-cont img').attr({src:'img/banner'+(Index+1)+'.jpg'}).stop(true,false).fadeOut(100).fadeIn();
			}
			Is=true;
		});
	});
	//------------还有谁啊
	$('.banner-right-bottom ul li').hover(
		function(){$(this).children('img').css({'top':'50.5px'}).animate({top:'0'},100);$(this).children('span').css({'color':'red'})
			
		},
		function(){$(this).children('span').css({'color':'#666'})}
	)
	//--------------------------floor1
	$floorIndex=-1;
	$floorBtnIndex=-1;
	$floorTimer=null;
	console.log($('.floor-btn-lists li'));
	function floormove(){
		$floorIndex++;
		$floorBtnIndex++;
		$('.floor-pic-lists').animate({'left':-$floorIndex*306},500,function(){
			if($floorIndex===3){$floorIndex=0;$('.floor-pic-lists').css({'left':0});}
		});
		
		$('.floor-btn-lists li').eq($floorBtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floorBtnIndex>=2){$floorBtnIndex=-1;}
		});
		
		
	};
	
	function floorauto(){
		setInterval(function(){
			floormove();
		
		},1000);
	};
	floorauto();
	//----------------------floor1-img
	$('.floor-right a').hover(
		function(){$(this).children('img').stop(true,false).animate({'left':-10})},
		function(){$(this).children('img').stop(true,false).animate({'left':0},100)}
	);
	$('.floor-right span').hover(
		function(){$(this).stop(true,false).fadeTo(500,0.5)},
		function(){$(this).stop(true,false).fadeTo(500,1)}
	);
	//---------------------------------------floor2
	$floor2Index=-1;
	$floor2BtnIndex=-1;
	$floor2Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor2move(){
		$floor2Index++;
		$floor2BtnIndex++;
		$('.floor2-pic-lists').animate({'left':-$floor2Index*306},500,function(){
			if($floor2Index===3){$floor2Index=0;$('.floor2-pic-lists').css({'left':0});}
		});
		
		$('.floor2-btn-lists li').eq($floor2BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor2BtnIndex>=2){$floor2BtnIndex=-1;}
		});
		
		
	};
	
	function floor2auto(){
		setInterval(function(){
			floor2move();
		
		},1000);
	};
	floor2auto();
	//---------------------------------------floor3
	$floor3Index=-1;
	$floor3BtnIndex=-1;
	$floor3Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor3move(){
		$floor3Index++;
		$floor3BtnIndex++;
		$('.floor3-pic-lists').animate({'left':-$floor3Index*306},500,function(){
			if($floor3Index===3){$floor3Index=0;$('.floor3-pic-lists').css({'left':0});}
		});
		
		$('.floor3-btn-lists li').eq($floor3BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor3BtnIndex>=2){$floor3BtnIndex=-1;}
		});
		
		
	};
	
	function floor3auto(){
		setInterval(function(){
			floor3move();
		
		},2000);
	};
	floor3auto();
	//---------------------------------------floor4
	$floor4Index=-1;
	$floor4BtnIndex=-1;
	$floor4Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor4move(){
		$floor4Index++;
		$floor4BtnIndex++;
		$('.floor4-pic-lists').animate({'left':-$floor4Index*306},500,function(){
			if($floor4Index===3){$floor4Index=0;$('.floor4-pic-lists').css({'left':0});}
		});
		
		$('.floor4-btn-lists li').eq($floor4BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor4BtnIndex>=2){$floor4BtnIndex=-1;}
		});
		
		
	};
	
	function floor4auto(){
		setInterval(function(){
			floor4move();
		
		},1000);
	};
	floor4auto();
//---------------------------------------floor5
	$floor5Index=-1;
	$floor5BtnIndex=-1;
	$floor5Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor5move(){
		$floor5Index++;
		$floor5BtnIndex++;
		$('.floor5-pic-lists').animate({'left':-$floor5Index*306},500,function(){
			if($floor5Index===3){$floor5Index=0;$('.floor5-pic-lists').css({'left':0});}
		});
		
		$('.floor5-btn-lists li').eq($floor5BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor5BtnIndex>=2){$floor5BtnIndex=-1;}
		});
		
		
	};
	
	function floor5auto(){
		setInterval(function(){
			floor5move();
		
		},1200);
	};
	floor5auto();
//---------------------------------------floor6
	$floor6Index=-1;
	$floor6BtnIndex=-1;
	$floor6Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor6move(){
		$floor6Index++;
		$floor6BtnIndex++;
		$('.floor6-pic-lists').animate({'left':-$floor6Index*306},500,function(){
			if($floor6Index===3){$floor6Index=0;$('.floor6-pic-lists').css({'left':0});}
		});
		
		$('.floor6-btn-lists li').eq($floor6BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor6BtnIndex>=2){$floor6BtnIndex=-1;}
		});
		
		
	};
	
	function floor6auto(){
		setInterval(function(){
			floor6move();
		
		},1000);
	};
	floor6auto();	
//---------------------------------------floor7
	$floor7Index=-1;
	$floor7BtnIndex=-1;
	$floor7Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor7move(){
		$floor7Index++;
		$floor7BtnIndex++;
		$('.floor7-pic-lists').animate({'left':-$floor7Index*306},500,function(){
			if($floor7Index===3){$floor7Index=0;$('.floor7-pic-lists').css({'left':0});}
		});
		
		$('.floor7-btn-lists li').eq($floor7BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor7BtnIndex>=2){$floor7BtnIndex=-1;}
		});
		
		
	};
	
	function floor7auto(){
		setInterval(function(){
			floor7move();
		
		},1600);
	};
	floor7auto();
//---------------------------------------floor8
	$floor8Index=-1;
	$floor8BtnIndex=-1;
	$floor8Timer=null;
	//console.log($('.floor-btn-lists li'));
	function floor8move(){
		$floor8Index++;
		$floor8BtnIndex++;
		$('.floor8-pic-lists').animate({'left':-$floor8Index*306},500,function(){
			if($floor8Index===3){$floor8Index=0;$('.floor8-pic-lists').css({'left':0});}
		});
		
		$('.floor8-btn-lists li').eq($floor8BtnIndex).children('span').animate({width:30},1000,function(){
			$(this).width('0');
			if($floor8BtnIndex>=2){$floor8BtnIndex=-1;}
		});
		
		
	};
	
	function floor8auto(){
		setInterval(function(){
			floor8move();
		
		},1000);
	};
	floor8auto();
	
	//-------------------------navigation
	$(window).on("scroll",function() {
		var $clientH=$(window).scrollTop();
		if($clientH>200){$('#navigation').css({display:'block'})}
		else if($clientH<200){$('#navigation').css({display:'none'})}
	});
	$('#navigation a').click(function(){
		var $navIndex=$(this).index()+1;
		var pTop=-$(this).index()*41
		console.log(pTop);
		$(this).css({backgroundPositionX:'-45px'}).siblings().css({backgroundPositionX:'0px'});
		var id='#floor'+$navIndex;
		if($navIndex===9){id='#top'}
		 $("html,body").stop(true,false).animate({scrollTop: $(id).offset().top}, 1000);
	});
});
