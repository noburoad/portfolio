

$(function(){
    //ヘッダー透過イベントのための高さ取得
    var targetHeight = $('.js-float-menu-target').height();

    $(window).on('scroll', function(){
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    //spメニュー
    $('.js-toggle-sp-menu').on('click', function() {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    })
    $(window).trigger('scroll');



    //テキストのフェードイン
    $(window).scroll(function (){
        var fadeTrigger = $('.js-text-trigger');
        $(fadeTrigger).each(function(){
          var scroll = $(window).scrollTop(),
              elemTop = $(this).offset().top,
              windowHeight = $(window).height();
    
          if (scroll > elemTop - windowHeight + 200){
            $(this).find('.js-fade-text').addClass('fade-text');
          }
        });
      });
      $(window).trigger('scroll');

    //タイトルのフェードイン
      $(window).scroll(function (){
        var fadeTrigger = $('.js-title-trigger');
        $(fadeTrigger).each(function(){
          var scroll = $(window).scrollTop(),
              elemTop = $(this).offset().top,
              windowHeight = $(window).height();
    
          if (scroll > elemTop - windowHeight + 200){
            $(this).find('.js-fade-text').addClass('fade-text');
          }
        });
      });
      $(window).trigger('scroll');

      

      //スライドのフェードアウト
      $(window).scroll(function (){
        var fadeTrigger = $('.js-slide-trigger');
        $(fadeTrigger).each(function(){
          var scroll = $(window).scrollTop(),
              elemTop = $(this).offset().top,
              windowHeight = $(window).height();
    
          if (scroll > elemTop - windowHeight + 200){
            $(this).find('.js-cover-slide').animate({left: -700},1500,"swing");
            $(this).find('.js-cover-slide-reverse').animate({left: 700},1500,"swing");
          }
        });
      });
      $(window).trigger('scroll');



})

