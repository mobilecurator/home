$(document).ready(function () {

  /**---------------------------------------------------------- 
  * 모바일 기기 전용 
 ---------------------------------------------------------- */
  function isMobile() {
    var UserAgent = navigator.userAgent;
    if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
      return true;
    } else {
      return false;
    }
  }

  /**---------------------------------------------------------- 
  * dropdown
 ---------------------------------------------------------- */


  $(".snb-btn").click(function () {
    if (isMobile()) {
      $(".snb-box").slideToggle(150);
      var target = $(".snb-group i")
      if (target.hasClass('active')) {
        target.removeClass("active");
        $('body').removeClass('not-scroll');
      } else {
        target.addClass("active");
        $('body').addClass('not-scroll');
      }
    } else {
      $(".snb-box").addClass('active');
    }
  });




  /*기존 dropdown 삭제예정*/
  // $(".dropdown-group").click(function () {
  //   if (isMobile()) {
  //     $(".dropdown-box").slideToggle(150);
  //     var target = $(".dropdown-group i")
  //     if (target.hasClass('active')) {
  //       target.removeClass("active");
  //       $('body').removeClass('not-scroll');
  //     } else {
  //       target.addClass("active");
  //       $('body').addClass('not-scroll');
  //     }
  //   } else {
  //     $(".snb-box").addClass('active');
  //   }
  // });

  /**---------------------------------------------------------- 
  * 더보기 버튼
 ---------------------------------------------------------- */

  $('.card-more-link').on('click', function () {
    var moreBlock = $(this).parent().next('.more-text-block');
    if (moreBlock.css('display') === 'block') {
      moreBlock.slideUp(200);
      $(this).removeClass('up').addClass('down');
      swiper.autoplay.start();

    } else {
      $(this).parent().next('.more-text-block').slideDown(200);
      $(this).removeClass('down').addClass('up');
      swiper.autoplay.stop();
    }
  });

  /**---------------------------------------------------------- 
  * 카드 자세히보기 버튼
 ---------------------------------------------------------- */
  if (!(isMobile())) {
    $('.acc-panel').slideDown(200);
    $('.acc-link').hide();
    var swiperContent2 = new Swiper('.swiper-type2-2', swiperParam1);
    var swiperContent3 = new Swiper('.swiper-type3-2', swiperParam2);
  }
  $('.acc-link button').on('click', function () {
    var $moreBlock = $(this).parent().siblings('.acc-panel');
    var $accBox = $('.local >.acc-group > .card-bg');
    var accS = $accBox.offset().top;
    var accH = $accBox.height();
    var gnbH = $('.main-gnb').height();
    var snbH = $('.snb-group').height();
    if ($moreBlock.css('display') === 'block') {
      $moreBlock.slideUp(200);
      $(this).html("자세히보기" + "<i></i>");
      $(this).removeClass('up').addClass('down');
    } else {
      $moreBlock.slideDown(200);
      $(this).html("닫기" + "<i></i>");
      $(this).removeClass('down').addClass('up');
      $('html, body').animate({ scrollTop: accS + accH - (gnbH + snbH) }, 400);

    }
  });

  /**---------------------------------------------------------- 
  * 슬라이드
 ---------------------------------------------------------- */
  /* swiper 함수 */
  var swiperParam1 = {
    centeredSlides: true,
    autoHeight: false,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
  var swiperParam2 = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  //타이틀 타입 (모바일경우 흰색 버튼 생성)
  var swiperContent1 = new Swiper('.swiper-type1', swiperParam1);
  // var swiperContent1 = new Swiper('.swiper-container1', swiperParam1);

  // 이벤트 타입 - (모바일경우 흰색 버튼 생성)
  var swiperContent2 = new Swiper('.swiper-type2', swiperParam1);
  // var swiperContent2 = new Swiper('.swiper-container2', swiperParam2);

  // 제휴 타입 - (모바일경우 overflow: visible; 슬라이드)
  var swiperContent3 = new Swiper('.swiper-type3', swiperParam2);


  //더보기 안에 슬라이드
  $('.acc-link button').on('click', function () {
    var swiperContent2 = new Swiper('.swiper-type2-2', swiperParam1);
    var swiperContent3 = new Swiper('.swiper-type3-2', swiperParam2);
  });
  if (!(isMobile())) {
    $('.acc-panel').slideDown(200);
    $('.acc-link').hide();
    var swiperContent2 = new Swiper('.swiper-type2-2', swiperParam1);
    var swiperContent3 = new Swiper('.swiper-type3-2', swiperParam2);
  }

  // 부스트파크 제휴처 슬라이드
  var swiperBoostparkPartner = new Swiper('.swiper-boostpark-partner', {
    centeredSlides: false,
    slidesPerView: 'auto',
  });


  /**---------------------------------------------------------- 
  * 복사기능
  ---------------------------------------------------------- */

  // // 복사기능
  var clipboard = new ClipboardJS('.more-text-block .copy');
  clipboard.on('success', function (e) {
    $('.copy-block').fadeIn(400).delay(1000).fadeOut(400);
    // $('.copy-block').html(e.text);
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    e.clearSelection();
  });

  // sns 복사기능
  var clipboard2 = new ClipboardJS('#sns-copy');
  clipboard2.on('success', function (e) {
    $('.copy-block').stop(true, true).fadeIn(400).delay(1000).fadeOut(400);
    // alert('주소가 복사되었습니다.');
    // $('.copy-block').show();
    // $('.copy-block').html(e.text);
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    e.clearSelection();
  });

});


/**---------------------------------------------------------- 
* SNS 공유용 주소 연결 용
---------------------------------------------------------- */

var url_default_ks = "https://story.kakao.com/share?url=";
var url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=";
var url_default_tw_txt = "https://twitter.com/intent/tweet?text=";
var url_default_tw_url = "&url=";
var url_default_band = "http://band.us/plugin/share?body=";
var url_route_band = "&route=";
var url_default_naver = "http://share.naver.com/web/shareView.nhn?url=";
var title_default_naver = "&title=";
var url_this_page = location.href;
var title_this_page = document.title;
var url_combine_ks = url_default_ks + url_this_page;
var url_combine_fb = url_default_fb + url_this_page;
var url_combine_tw = url_default_tw_txt + document.title + url_default_tw_url + url_this_page;
var url_combine_band = url_default_band + encodeURI(url_this_page) + '%0A' + encodeURI(title_this_page) +
  '%0A' +
  '&route=tistory.com';
var url_combine_naver = url_default_naver + encodeURI(url_this_page) + title_default_naver + encodeURI(
  title_this_page);



// //<![CDATA[
// // 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('d89de6506b1f3745ed7cbf4da16c639b');
// // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
function sendLink() {
  // alert(url_this_page);
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '5GX 부스트파크',
      description: '#5GX 부스트파크',
      imageUrl: 'https://m.sktelecom5gx.com/img/corearea/bg_header.png',
      link: {
        mobileWebUrl: url_this_page,
        webUrl: url_this_page
      }
    }
  });
}
//]]>



