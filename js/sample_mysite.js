function omOver(num){
    //console.log(num);

    const img = document.getElementById("ig_photo");
    const defText = document.getElementById("ig_letter_def");
    const resultText = document.getElementById("ig_letter");
    
    img_0 = "img/like/like0.png";
    img_1 = "img/like/like1.jpg";
    img_2 = "img/like/like2.jpg";
    img_3 = "img/like/like3.jpg";
    img_4 = "img/like/like4.jpg";
    img_5 = "img/like/like5.jpg";
    img_6 = "img/like/like6.jpg";
    img_7 = "img/like/like7.jpg";
    img_8 = "img/like/like8.jpg";

    switch(num){
        case 1:
            img.src = img_1;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>ぼーと出来る空間①<br>TDSのフォートレスエクスプロレーション。<br><br>TDR内で一番好きな空間。どの時間帯に行っても癒される景色が広がっています。大砲が打てたり、船の中に入れたりもします。冒険心がくすぐられ、ずっといられちゃう空間です。</p>";
            resultText.style.display = "block";
            break;
        case 2:
            img.src = img_2;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>ぼーと出来る空間②<br>純喫茶<br><br>最近の趣味です。私は食べることが目的というわけではなく、空間に浸りたくてお店に足を運ぶことが多いです。西武新宿というお店がおすすめです。1Fも2Fもとても素敵な空間です。</p>";
            resultText.style.display = "block";
            break;
        case 3:
            img.src = img_3;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>ぼーと出来る空間③<br>TeamLab<br><br>プロジェクションマッピング好きにはたまらない空間です。チームラボは視覚だけでなく、触覚や聴覚も刺激してくれます。またその空間に存在している人が映像に影響を与えます。その時にしか見られない唯一の空間なのも魅力的です。</p>";
            resultText.style.display = "block";
            break;
        case 4:
            img.src = img_4;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>My stock<br><br>種類やメーカーに拘りはありませんが、自宅にはとんでもない量のインスタントが常に綺麗にストックされています。このストックが少なくなると、とっても不安になるくらい好きです。ミッキーのタンブラーで毎日飲んでいます。</p>";
            resultText.style.display = "block";
            break;
        case 5:
            img.src = img_5;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>きらきら光るもの<br><br>イルミネーションなども含まれます。部屋にも、自分の好きな空間を創りたくて、LEDライトやLEDろうそくを飾っちゃっています。そういうタイプです。写真は、家庭用プラネタリウムを使っています。この空間で好きな音楽をかけると疲れが吹っ飛びます。</p>";
            resultText.style.display = "block";
            break;
        case 6:
            img.src = img_6;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>ごりごりカラーのアイシャドウ<br><br>ジャケ写に合わせた色でライブ行きたい、という想いがきっかけでした。写真は、安いけど優秀なアイシャドウパレットです。</p>";
            resultText.style.display = "block";
            break;
        case 7:
            img.src = img_7;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>ごりごりカラーのアイシャドウ<br><br>ライブに行った日のメイクです。このメイクをした日は、いつもの自分とは違う自分になれた気がして、るんるんで会場に向かいます。ファン友達にジャケ写イメージだと気づいて貰えると、とっても嬉しいです。</p>";
            resultText.style.display = "block";
            break;
        case 8:
            img.src = img_8;
            img.style.display = "block";
            defText.innerHTML = "<p></p>";
            resultText.innerHTML = 
            "<p>ルービックキューブ<br><br>面白い形のいっぱい持ってます。3×3は余裕です。タイムアタックや目隠しをして行う競技には、足を踏み入れていないのですが、色が揃う感覚が楽しくてずっとやっています。クリエイティブをしていると答えがあるものをしたくなるのです。</p>";
            resultText.style.display = "block";
            break;
    }
}


function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
  
    for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

function show_window(num){
    obj_1=document.getElementById('menu1').style;
    obj_2=document.getElementById('menu2').style;
    if(num==1){
        obj_1.display=(obj_1.display=='none')?'block':'none';
        obj_2.display=(obj_2.display=='none')?'none':'none';
    } else if(num==2){
        obj_1.display=(obj_1.display=='none')?'none':'none';
        obj_2.display=(obj_2.display=='none')?'block':'none';
    } else {

    }
}

window.onload = function(){
    /** jQueryの処理 */
    console.log($.fn.jquery);
    $.fn.jquery;
    $("#stop1").on("click", function(){
        videoControl("stopVideo");
    });

    $("#stop2").on("click", function(){
        videoControl2("stopVideo");
    });

    $("#stop3").on("click", function(){
        videoControl3("stopVideo");
    });
    $("#stop4").on("click", function(){
        videoControl4("stopVideo");
    });
    $("#stop5").on("click", function(){
        videoControl5("stopVideo");
    });
    $("#stop6").on("click", function(){
        videoControl6("stopVideo");
    });
    $("#stop7").on("click", function(){
        videoControl7("stopVideo");
    });
    $("#stop8").on("click", function(){
        videoControl8("stopVideo");
    });
    $("#stop9").on("click", function(){
        videoControl9("stopVideo");
    });
    $("#stop10").on("click", function(){
        videoControl10("stopVideo");
    });
    $("#stop11").on("click", function(){
        videoControl11("stopVideo");
    });

    function videoControl(action){ 
        var $playerWindow = $('#popup-YouTube-player')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }

    function videoControl2(action){ 
        var $playerWindow = $('#popup-YouTube-player2')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }

    function videoControl3(action){ 
        var $playerWindow = $('#popup-YouTube-player3')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl4(action){ 
        var $playerWindow = $('#popup-YouTube-player4')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl5(action){ 
        var $playerWindow = $('#popup-YouTube-player5')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl6(action){ 
        var $playerWindow = $('#popup-YouTube-player6')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl7(action){ 
        var $playerWindow = $('#popup-YouTube-player7')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl8(action){ 
        var $playerWindow = $('#popup-YouTube-player8')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl9(action){ 
        var $playerWindow = $('#popup-YouTube-player9')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl10(action){ 
        var $playerWindow = $('#popup-YouTube-player10')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    function videoControl11(action){ 
        var $playerWindow = $('#popup-YouTube-player11')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
};
