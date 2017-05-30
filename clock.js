//時計のメインとなる関数

function clock() {
    //曜日を表す各文字の配列
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    //現在日時を表すインスタンスを取得
    var now = new Data();
    //年
    var y = now.getFullYear();
    //月　0～11 で取得されるので実際の月は +1 したものとなる
    var mo = now.getMonth() + 1;
    //日
    var d = now.getDate();
    //曜日 0～6 で日曜始まりで取得されるので weeks 配列のインデックスとして指定する
    //この [] は配列？　あとで確認
    var w = weeks[now.getDay()];
    //時
    var h = now.getHours();
    //分
    var mi = now.getMinutes();
    //秒
    var s = now.getSeconds();

    //日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
    if (mo < 10 ) mo = "0" + mo;
    if (d < 10 ) d = "0" + d;
    if( mi < 10 ) mi = "0" + mi;
    if( s < 10 ) s = "0" + s;

    // HTML: <span id = "clock_data"> (ここの日付文字列を書き換え) </span>
    document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + "/" + "(" + w + ")";

    // HTML: <span id = "clock_time"> (ここの日付文字列を書き換え) </span>
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;

    // HTML: <div id = "clock_flame"> の内部要素のフォントサイズをウインドウサイズの10分の1ピクセルに設定
    document.getElementById("clock_flame").style.fontSize = window.innerWidth / 10 + "px";

}

//上記のclock関数を1000ミリ秒ごと（毎秒）実行する
setInterval(clock, 1000);