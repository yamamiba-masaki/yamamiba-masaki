"use strict"


{
  const btn = document.getElementById("btn");
  const monday = document.getElementById("monday");
  
  // const result1 = document.getElementById("result1");
  
  
  
  
  
  
  
  btn.addEventListener("click", () => {
    document.getElementById("button").addEventListener('click',
  function(){
    //対象の配列
    const subjectArray = [
      "山手線","中央線","京浜東北線","丸いもの","〇色のもの（色シリーズ）","冷たいもの","楽器の名前","漫画タイトル","俳優の名前","AKBメンバー",
      "ハロプロメンバー","仮面ライダーの名前","ジブリ映画タイトル","ディズニーアトラクション","ユニバアトラクション","お寿司のネタ","スタバメニュー",
      "国民の祝日","四字熟語","オリンポス12神","Youtuberの名前","世界遺産","ジャニーズの曲名","動物の名前","動物の鳴き声","花の名前",
      "セーラー戦士の名前","小説のタイトル","サッカー選手の名前"
    ];
    //ランダムに1つ取得
    const subject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
    //取得したお題を書き出す
    document.getElementById("subject").innerText = subject;
  }
);/** 重複チェック用配列 */
    const randoms = [];
    /** 最小値と最大値 */
    const min = 1, max = 8;
    /** 重複チェックしながら乱数作成 */
    for(let i = min; i <= max; i++){
        while(true){
          const tmp = intRandom(min, max);
          if(!randoms.includes(tmp)){
            randoms.push(tmp);
            console.log(randoms);
            break;
          }
        }
      }
      
      /** min以上max以下の整数値の乱数を返す */
      function intRandom(min, max) {
        return Math.floor( Math.random() * (max - min + 1)) + min;
      }      
    
    
        
  });     

}




      
