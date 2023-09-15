//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('#header').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('#header').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-bottom');
    var scrollY = window.scrollY;

    if (scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

   //＝＝＝並び替えボタン設定
   $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
    $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
    var className = $(this).attr("class");			//クラス名を取得
    className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
    $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
    if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
         grid.show('');								//全ての要素を出す
    }else{											//それ以外の場合は
        grid.filter("."+className[0]); 				//フィルターを実行
    }
});

//＝＝＝ Fancyboxの設定
$('[data-fancybox]').fancybox({
 thumbs: {
    autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
  },	
});

//topリンク
    //スクロールした際の動きを関数でまとめる
    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200){//上から200pxスクロールしたら
          $('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
          $('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
        }else{
          if(
            $('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
            $('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
            $('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
          }
        }
      }
      
      // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function () {
      PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      // ページが読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function () {
      PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
      });
      
      
      // #page-topをクリックした際の設定
      $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
      });


//ハンバーガーメニュー
$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});