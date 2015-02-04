$(document).ready(function($) { 

	$('#mainmenu li ul li')
		.mouseover(function() {
			$(this).parent().parent().addClass('act');
		})
		.mouseout(function() {
			$(this).parent().parent().removeClass('act');
		});

	$('#mainmenu li ul')
		.mouseover(function() {
			$(this).parent().addClass('act');
		})
		.mouseout(function() {
			$(this).parent().removeClass('act');
		});

	function faq() {
		$('.collapse a').hide();
		$('.expand a').click(function(e){
			e.preventDefault();
			$(this).hide();
			$(this).parent().parent().find('.collapse a').show();
			$(this).parent().parent().find('.desc').show(200);
		});
		$('.collapse a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('.desc').hide(200);
			$(this).hide();
			$(this).parent().parent().find('.expand a').show();
		});
	}

	faq();

	function modal() {
		$('.ask_a_question a').click(function(e){
			e.preventDefault();
			$('#ask_form').show();
		});
		$('.wdt_ask a').click(function(e){
			e.preventDefault();
			$('#ask_form').show();
		});
                /*
		$('.partners a').click(function(e){
			e.preventDefault();
			$('#order_form').show();
		});
                */
		$('.blc_gallery .node a, .blc_gallery .image a').click(function(e){
			e.preventDefault();
                        var mg = $('.modal_gallery');
                        var img = $(this).find('img');
                        var i = mg.find('img');
                        i.attr('data-count', img.data('count'));
                        i.attr('src', img.attr('src'));
                        mg.find('div.head span').text(img.attr('alt'));
			mg.show();
		});
                
                $('.big-view a').click(function(e){
			e.preventDefault();
                        var mg = $('.modal_gallery');
                        var img = $(".big-view").find('img');
                        var i = mg.find('img');
                        i.attr('data-count', img.data('count'));
                        i.attr('src', img.attr('src'));
                        mg.find('div.head span').text(img.attr('alt'));
			mg.show();
		});
		$('.splash').click(function(){
			$('.modal').hide();
		});
		$('.modal .close').click(function(){
			$('.modal').hide();
		});

                function setBigImage(offset)
                {
                        var img = $('.blc_gallery ul li img')[offset];
                        $('.blc_gallery .image img')[0].src = img.src;
                }

                $('.navi .next').click(function(e){
                        e.preventDefault();
                        var offset = -168;
                        var ul = $('.blc_gallery ul');
                        
                        var currentOffset = parseInt(ul.css('left').replace('px', ''));
                        if (currentOffset == offset * (sliderPhotoCount - 4) || sliderPhotoCount <= 4)
                                return;

                        setBigImage(currentOffset / offset + 1);

                        ul.css('left', offset + currentOffset + 'px');
                });


                $('.navi .prev').click(function(e){
                        e.preventDefault();
                        var offset = 168;
                        var ul = $('.blc_gallery ul');
                        
                        var currentOffset = parseInt(ul.css('left').replace('px', ''));
                        if (!currentOffset)
                                return;
                        setBigImage(currentOffset / offset + 1);
                        ul.css('left', offset + currentOffset + 'px');
                });
                
                $('.blc_gallery ul li').hover(
                                function(){
                                        var offset = $(this).prevAll().length;
                                        setBigImage(offset);
                                }, function(){

                        var offset = 168;
                        var ul = $('.blc_gallery ul');
                        
                        var currentOffset = parseInt(ul.css('left').replace('px', ''));
                        setBigImage(currentOffset / offset);
                });
	}

	modal();

});
