const learn = () => {
  
  const charenge = document.getElementById("quiz");
  const learnQuiz = document.getElementById("learns_question");
  
  charenge.addEventListener('click', function(){
    charenge.style.display = "none";
    learnQuiz.style.display = "inline";

    question_answer = new Array();
    question_answer[0] = ["今までより速くの意味を持つ音楽用語はどれ？","accel.","rit.","piu mosso","meno mosso","cresc.","a tempo",3];
    question_answer[1] = ["今までより遅くの意味を持つ音楽用語はどれ？","accel.","rit.","piu mosso","meno mosso","cresc.","a tempo",4];
    question_answer[2] = ["小さくの意味を持つ音量記号はどれ？","pp","p","mp","mf","f","ff",2];
    question_answer[3] = ["とても小さくの意味を持つ音量記号はどれ？","pp","p","mp","mf","f","ff",1];
    question_answer[4] = ["ffの読み方はどれ？","メゾフォルテ","フォルテ","フォルティッシモ","フォルテフォルティッシモ","フォルティッシッシモ","",3];
    question_answer[5] = ["B♭管の楽器はどれ？","ピアノ","リコーダー","フルート","クラリネット","ホルン","サックス",4];
    question_answer[6] = ["F管の楽器はどれ？","ピアノ","リコーダー","フルート","クラリネット","ホルン","サックス",5];
    question_answer[7] = ["♩=60 の意味は？","♩を1拍として1分間に60拍","♩を1拍として60回","1拍が60秒","♩を60回","","",1];
    question_answer[8] = ["5/4拍子は存在する？","存在する","存在しない","","","","",1];
    question_answer[9] = ["4/5拍子は存在する？","存在する","存在しない","","","","",2];
    question_answer[10] = ["C拍子と同じ拍子は？","1/1拍子","4/6拍子","1/4拍子","2/4拍子","3/4拍子","4/4拍子",6];
    question_answer[11] = ["4/4拍子とは？","1拍を4分音符として1小節に4拍","4拍を4回","","","","",1];
    question_answer[12] = ["6/8拍子とは？","1拍を8分音符として1小節に6拍","8拍を6回","1拍を6分音符として1小節に8拍","6拍を8回","","",1];
    question_answer[13] = ["仲間外れはどれ？","ドレミファソラシド","CDEFGAHC","イロハニホヘトイ","","","",3];
    question_answer[14] = ["一般的にドイツ語表記でCの音と同じ音は？","ソ","ミ","ド","ファ","シ","レ",3];
    question_answer[15] = ["一般的にドイツ語表記でGの音と同じ音は？","ソ","ミ","ド","ファ","シ","レ",1];
    question_answer[16] = ["一般的に日本語表記でトの音と同じ音は？","ソ","ミ","ド","ファ","シ","レ",1];
    question_answer[17] = ["一般的に日本語表記でハの音と同じ音は？","ソ","ミ","ド","ファ","シ","レ",3];
    question_answer[18] = ["一般的に日本語表記で変ホの音と同じ音は？","ソ♯","ミ♭","ド♯","ファ♯","シ♭","レ♭",2];
    question_answer[19] = ["一般的に日本語表記で嬰ヘの音と同じ音は？","ソ♯","ミ♭","ド♯","ファ♯","シ♭","レ♭",4];
    question_answer[20] = ["一般的にドイツ語表記でBの音と同じ音は？","ソ♯","ミ♭","ド♯","ファ♯","シ♭","レ♭",5];
    question_answer[21] = ["一般的にドイツ語表記でGisの音と同じ音は？","ソ♯","ソ♭","ド♯","レ♯","シ♭","レ♭",1];
    question_answer[22] = ["一般的にドイツ語表記でGesの音と同じ音は？","ソ♯","ソ♭","ド♯","レ♯","シ♭","レ♭",2];
    question_answer[23] = ["大きくの意味を持つ音量記号はどれ？","pp","p","mp","mf","f","ff",5];
    question_answer[24] = ["poco a pocoの意味は？","だんだん遅く","遅く","少しずつ","少しずつ遅く","今すぐ遅く","",1];
    question_answer[25] = ["少し大きくの意味を持つ音量記号はどれ？","pp","p","mp","mf","f","ff",4];
    question_answer[26] = ["6/8拍子は存在する？","存在する","存在しない","","","","",1];
    question_answer[27] = ["クレシェンドの意味は？","だんだん強く","だんだん速く","だんだん遅く","だんだん弱く","","",1];
    question_answer[28] = ["ディミヌエンドの意味は？","だんだん強く","だんだん速く","だんだん遅く","だんだん弱く","","",4];
    question_answer[29] = ["D.C.の意味は？","はじめに戻る","ダルセーニョに戻る","終わり","","","",1];
    question_answer[30] = ["D S.の意味は？","はじめに戻る","ダルセーニョに戻る","終わり","","","",2];
    question_answer[31] = ["4/4拍子の時、4分音符の長さは？","0.5拍","1拍","1.5拍","2拍","3拍","4拍",2];
    question_answer[32] = ["4/4拍子の時、8分音符の長さは？","0.5拍","1拍","1.5拍","2拍","3拍","4拍",1];
    question_answer[33] = ["4/4拍子の時、2分音符の長さは？","0.5拍","1拍","1.5拍","2拍","3拍","4拍",4];
    question_answer[34] = ["4/4拍子の時、全音符の長さは？","0.5拍","1拍","1.5拍","2拍","3拍","4拍",6];
    question_answer[35] = ["4/4拍子の時、付点4分音符の長さは？","0.5拍","1拍","1.5拍","2拍","3拍","4拍",3];
    question_answer[36] = ["4/4拍子の時、付点2分音符の長さは？","0.5拍","1拍","1.5拍","2拍","3拍","4拍",5];

    //初期設定
    const select_number = 6; //選択肢の数
    const max_select = 10; //出題数
    setReady();

    function setReady() {
      count = 0; //問題番号
      answers = new Array(); //解答記録
      quiz();
    }

    //問題表示
    function quiz() {
      var select, num;
      //問題
      random = Math.floor(Math.random() * question_answer.length); //乱数
      document.getElementById("quiz_title").innerHTML = (count + 1) + "問目：" + question_answer[random][0];
      //選択肢
      select = "";
      for (num=1;num<=select_number;num++) {
        if (question_answer[random][num] != "") {
          select += "【<a href='javascript:answer(" + num + ")' > " + num + ":" + question_answer[random][num] + " </a>】";
        }
      }
      document.getElementById("quiz_select").innerHTML = select;
    }

    //解答表示
    answer = function(number) {
      var select;
      select = (count + 1) + "問目：";
      //答え合わせ
      if (number == question_answer[random][select_number + 1]) {
        //正解
        answers[count] = "○";
      } else {
        answers[count] = "×";
      }
      select += answers[count] + question_answer[random][number];
      document.getElementById("quiz_answer").innerHTML = select;

      //次の問題を表示
      count++;
      if (count < max_select) {
        quiz();
      } else {
        //終了
        select = "<table border='2'><caption>成績発表</caption>";
        //1行目
        select += "<tr><th>問題</th>";
        for (num=0;num<10;num++) {
          select += "<th>" + (num+1) + "</th>";
        }
        select += "</tr>";
        //2行目
        select += "<tr><th>成績</th>";
        for (num=0;num<10;num++) {
          select += "<td>" + answers[num] + "</td>";
        }
        select += "</tr>";
        select += "</table>";
        document.getElementById("quiz_title").innerHTML = select;
        //次の選択肢
        select = "【<a href='/'>トップページに戻る</a>】";
        select += "【<a href='/learns'>もう一度</a>】";
        document.getElementById("quiz_select").innerHTML = select;
      }
    }
  });
}

window.addEventListener("load",learn)