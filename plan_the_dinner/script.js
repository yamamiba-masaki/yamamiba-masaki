"use strict"

{  //各要素の宣言
  const btn = document.getElementById("btn");
  const monday = document.getElementById("monday");
  const thesday = document.getElementById("thesday");
  const wednesday = document.getElementById("wednesday");
  const thursday = document.getElementById("thursday");
  const friday = document.getElementById("friday");
  const saturday = document.getElementById("saturday");
  const sunday = document.getElementById("sunday");    

  

  // ボタンのクリックイベント
  // btn.addEventListener("click", () => {
  btn.addEventListener("click", function() {//クリックしたらintRandom関数が実行される
  //重複チェック用配列 //
  const randoms = [];
  // 最小値, 最大値を決める　（１週間であれば１から７の数字）
  const min = 1, max = 7;
  //重複チェックしながら乱数作成 //
    for (let i = min; i <= max; i++) {
        while (true) {
          const tmp = intRandom(min, max);
          if (!randoms.includes(tmp)) {
            randoms.push(tmp);
            // console.log(randoms);
            break;
          }
        }
      }
      //min以上max以下の整数値の乱数を返す
      function intRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }  //Math.random() 0~0.999の範囲で値をランダムに返す　*(max-min　+1)+min 
        
    // //randams配列の中からindex0から順番にswitch文へ
    // 値を渡しcase毎に文字列を返す
    let number = randoms;
    console.log(number);
        
    switch (number[0]) {
      case 1:
          monday.innerText = "カレー";
          break;
            
      case 2:
          monday.textContent = "唐揚げ";
          break;
      case 3:
          monday.textContent = "豚カツ";
          break;
      case 4:
          monday.textContent = "マーボー豆腐";
          break;
      case 5:
          monday.textContent = "焼きそば";
          break;
      case 6:
          monday.textContent = "野菜の天ぷら";
          break;
      case 7:
          monday.textContent = "パスタ";
          break;
    }     
    switch (number[1]) {
      case 1:
        thesday.textContent = "カレー";
          break;
            
      case 2:
        thesday.textContent = "唐揚げ";
          break;
      case 3:
        thesday.textContent = "豚カツ";
          break;
      case 4:
        thesday.textContent = "マーボー豆腐";
          break;
      case 5:
        thesday.textContent = "焼きそば";
          break;
      case 6:
        thesday.textContent = "野菜の天ぷら";
          break;
      case 7:
        thesday.textContent = "パスタ";
          break;
    }      
    switch (number[2]) {
      case 1:
        wednesday.textContent = "カレー";
          break;
            
      case 2:
        wednesday.textContent = "唐揚げ";
          break;
      case 3:
        wednesday.textContent = "豚カツ";
          break;
      case 4:
        wednesday.textContent = "マーボー豆腐";
          break;
      case 5:
        wednesday.textContent = "焼きそば";
          break;
      case 6:
        wednesday.textContent = "野菜の天ぷら";
          break;
      case 7:
        wednesday.textContent = "パスタ";
          break;
    }      
    switch (number[3]) {
      case 1:
        thursday.textContent = "カレー";
          break;
            
      case 2:
        thursday.textContent = "唐揚げ";
          break;
      case 3:
        thursday.textContent = "豚カツ";
          break;
      case 4:
        thursday.textContent = "マーボー豆腐";
          break;
      case 5:
        thursday.textContent = "焼きそば";
          break;
      case 6:
        thursday.textContent = "野菜の天ぷら";
          break;
      case 7:
        thursday.textContent = "パスタ";
          break;
    }      
    switch (number[4]) {
      case 1:
        friday.textContent = "カレー";
          break;
            
      case 2:
        friday.textContent = "唐揚げ";
          break;
      case 3:
        friday.textContent = "豚カツ";
          break;
      case 4:
        friday.textContent = "マーボー豆腐";
          break;
      case 5:
        friday.textContent = "焼きそば";
          break;
      case 6:
        friday.textContent = "野菜の天ぷら";
          break;
      case 7:
        friday.textContent = "パスタ";
          break;
    }      
    switch (number[5]) {
      case 1:
        saturday.textContent = "カレー";
          break;
      case 2:
        saturday.textContent = "唐揚げ";
          break;
      case 3:
        saturday.textContent = "豚カツ";
          break;
      case 4:
        saturday.textContent = "マーボー豆腐";
          break;
      case 5:
        saturday.textContent = "外食（焼き肉）";
          break;
      case 6:
        saturday.textContent = "外食（お寿司）";
          break;
      case 7:
        saturday.textContent = "外食（定食）";
          break;
    }      
    switch (number[6]) {
      case 1:
        sunday.textContent = "カレー";
          break;
      case 2:
        sunday.textContent = "唐揚げ";
          break;
      case 3:
        sunday.textContent = "お好み焼き";
          break;
      case 4:
        sunday.textContent = "マーボー豆腐";
          break;
      case 5:
        sunday.textContent = "外食（ラーメン）";
          break;
      case 6:
        sunday.textContent = "外食（うな重）";
          break;
      case 7:
        sunday.textContent = "外食（刺身定食）";
          break;
    }      
  });     
}



      
