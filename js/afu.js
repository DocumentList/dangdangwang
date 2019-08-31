$(function(){
	/*var b
	function abb(a){
		b = 'check'+a;
	}
	
	console.log(abb(1))
	var z=0;
	$('.proConLetf-there>div').hover(function(){
		z = $(this).index()-1;
		console.log(z)
		abb(z);
		
	})
	console.log(abb(z))
	console.log(b)*/
	$('.check0 .click').click(function(){
		$('.check0>span').toggle()
		if($(this).hasClass('accontion')==false){
			$(this).addClass('accontion').siblings().removeClass('accontion')
		}
	})
	
	$('.check1 .click').click(function(){
		$('.check1 .check-ul').toggle(10)
		if($(this).hasClass('accontion')==false){
			$(this).addClass('accontion').siblings().removeClass('accontion')
		}
		
	})
	$('.check2 .click').click(function(){
		$('.check2 .check-ul').toggle(10)
		if($(this).hasClass('accontion')==false){
			$(this).addClass('accontion').siblings().removeClass('accontion')
		}
	})
	
	$('.check3 .click').click(function(){
		$('.check3 .check-ul').toggle(10)
		if($(this).hasClass('accontion')==false){
			$(this).addClass('accontion').siblings().removeClass('accontion')
		}
	})
	
	$('.check4 .click').click(function(){
		$('.check4 .check-ul').toggle(10)
		if($(this).hasClass('accontion')==false){
			$(this).addClass('accontion').siblings().removeClass('accontion')
		}
	})
	
	$('.check5 .click').click(function(){
		$('.check5 .check-ul').toggle(10)
		if($(this).hasClass('accontion')==false){
			$(this).addClass('accontion').siblings().removeClass('accontion')
		}
	})
	
	$('.conCul-li').click(function(event) {
		$('html,body').animate({'scrollTop':0}, 500)
	});	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
