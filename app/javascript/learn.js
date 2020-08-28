const learn = () => {
  
  const charenge = document.getElementById("quiz");
  const learnQuiz = document.getElementById("learns_question");
  
  charenge.addEventListener('click', function(){
    charenge.style.display = "none";
    learnQuiz.style.display = "inline";

    qa = new Array();
    qa[0] = ["今までより早くの意味を持つ音楽用語はどれ？","accel.","rit.","piu mosso","meno mosso","cresc.","a tempo",3];
    qa[1] = ["今までより遅くの意味を持つ音楽用語はどれ？","accel.","rit.","piu mosso","meno mosso","cresc.","a tempo",4];
    qa[2] = ["小さくの意味を持つ音量記号はどれ？","pp","p","mp","mf","f","ff",2];
    qa[3] = ["とても小さくの意味を持つ音量記号はどれ？","pp","p","mp","mf","f","ff",1];
    qa[4] = ["ffの読み方はどれ？","メゾフォルテ","フォルテ","フォルティッシモ","フォルテフォルティッシモ","フォルティッシッシモ","",3];
    qa[5] = ["B♭管の楽器はどれ？","ピアノ","リコーダー","フルート","クラリネット","ホルン","サックス",4];
    qa[6] = ["F管の楽器はどれ？","ピアノ","リコーダー","フルート","クラリネット","ホルン","サックス",5];
    qa[7] = ["♩=60 の意味は？","♩を1拍として1分間に60拍","♩を1拍として60回","1拍が60秒","","","",1];
    qa[8] = ["5/3拍子は存在する？","存在する","存在しない","ときと場合による","","","",1];
    qa[9] = ["4/5拍子は存在する？","存在する","存在しない","ときと場合による","","","",2];
    qa[10] = ["C拍子の意味は？","1/1拍子","4/6拍子","1/4拍子","2/4拍子","3/4拍子","4/4拍子",6];

    //初期設定
    q_sel = 6; //選択肢の数
    q_max = 10; //出題数
    setReady();

    //初期設定
    function setReady() {
      count = 0; //問題番号
      answers = new Array(); //解答記録
      //最初の問題
      quiz();
    }

    //問題表示
    function quiz() {
      var s, n;
      //問題
      rnd = Math.floor(Math.random() * qa.length); //乱数
      document.getElementById("text_q").innerHTML = (count + 1) + "問目：" + qa[rnd][0];
      //選択肢
      s = "";
      for (n=1;n<=q_sel;n++) {
        if (qa[rnd][n] != "") {
          s += "【<a href='javascript:answer(" + n + ")' > " + n + " ： " + qa[rnd][n] + " </a>】";
        }
      }
      document.getElementById("text_s").innerHTML = s;
    }

    //解答表示
    answer = function(num) {
      var s;
      s = (count + 1) + "問目：";
      //答え合わせ
      if (num == qa[rnd][q_sel + 1]) {
        //正解
        answers[count] = "○";
      } else {
        answers[count] = "×";
      }
      s += answers[count] + qa[rnd][num];
      document.getElementById("text_a").innerHTML = s;

      //次の問題を表示
      count++;
      if (count < q_max) {
        quiz();
      } else {
        //終了
        s = "<table border='2'><caption>成績発表</caption>";
        //1行目
        s += "<tr><th>問題</th>";
        for (n=0;n<qa.length;n++) {
          s += "<th>" + (n+1) + "</th>";
        }
        s += "</tr>";
        //2行目
        s += "<tr><th>成績</th>";
        for (n=0;n<qa.length;n++) {
          s += "<td>" + answers[n] + "</td>";
        }
        s += "</tr>";
        s += "</table>";
        document.getElementById("text_q").innerHTML = s;
        //次の選択肢
        s += "【<a href='javascript:setReady()'>同じ問題を最初から</a>】";
        document.getElementById("text_s").innerHTML = s;
      }
    }
  });
}

window.addEventListener("load",learn)