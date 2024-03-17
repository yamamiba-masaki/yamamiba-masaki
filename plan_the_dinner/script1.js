"use strict"


{
  const btn = document.getElementById("btn");
  const monday = document.getElementById("monday");
  
  // const result1 = document.getElementById("result1");
  
  
  
  
  
  
  
  btn.addEventListener("click", () => {
    /** 重複チェック用配列 */
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
        // // const resultRandoms = randoms
        // for (let i = 0; i < randoms.length; i++) {
        // console.log(randoms[i]);    
           
      function numberOfArray(number) {} 
      
      randoms[i]
      numberOfArray();
        
      
      // switch (randoms[i]) {
        //       case 1:
        //         monday.textContent = カレー;
        //         console.log(monday);
        //         break;
        //     }     
        
        //   case 2:
        // result.textContent = "カレー";
        //   break;
      // case 3:
      // result.textContent = "カレー";
      //   break;
      // case 4:
      // result.textContent = "カレー";
      //   break;
      // case 5:
      // result.textContent = "カレー";
      //   break;
      // case 6:
      // result.textContent = "カレー";
      //   break;
      // case 7:
      // result.textContent = "カレー";
      //   break;
      // case 8:
      // result.textContent = "カレー";
      //   break;
      }      
    
    
        
  });     

}




      
