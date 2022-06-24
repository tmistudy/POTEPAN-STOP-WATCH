/*global $*/
$(document).ready(function () {
  var time = 0;  //時間
  var min = 0;  //分
  var sec = 0;  //秒
  var msec = 0; //ミリ秒
  var interval;
  
  // タイマー表示
  $(".time").html(time +": "+ min + ": " + sec +": "+ msec);
  
  // ストップボタン非活性化
  $("#stop").prop("disabled",true);
  // リセットボタン非活性化
  $("#riset").prop("disabled",true);
  
  $("#start").mousedown(function(){
    // スタートボタン非活性化
    $(this).prop("disabled",true);
    // ストップボタン活性化
  　$("#stop").prop("disabled",false);
    // リセットボタン活性化
  　$("#riset").prop("disabled",false);
  　
    // 0.1秒ごとに処理実行
    interval= setInterval(function(){
      startTimer();
    },100);
  });
  
  // ストップボタン押下
  $("#stop").mousedown(function() {
    // ストップボタン非活性化
  　$(this).prop("disabled",true);
    // スタートボタン活性化
  　$("#start").prop("disabled",false);
  　
    // 処理停止
    clearInterval(interval);
    
    // 止めた時間を表示
    var stoptime = $(".time").html();
    $(".time").html(stoptime);
  });
  
  // リセットボタン押下
  $("#riset").mousedown(function () {
    risetTimer();
  });
  
  // スタートボタン押下後の処理
  function startTimer(){
    msec++;
    // ミリ秒が10になった時、秒に1追加
    if(msec == 10){
      msec = 0;
      sec++;
      // 秒が60になった時、分に1追加
      if(sec == 60){
        sec = 0;
        min++;
        
        // 分が60になった時、時間に1追加
        if(min== 60){
          min = 0;
          time++;
        }
      }
    }
    // タイマー表示
    $(".time").html(time +": "+ min + ": " + sec +": "+ msec);
  }
  
  // リセットボタン押下後の処理
  function risetTimer() {
    // 処理停止
    clearInterval(interval);
    
    time = 0;
    min = 0;
    sec = 0;
    msec = 0;
    
    // タイマー表示
    $(".time").html(time +": "+ min + ": " + sec +": "+ msec);
    
    // スタートボタン活性化
    $("#start").prop("disabled",false);
    // ストップボタン非活性化
    $("#stop").prop("disabled",true);
    // リセットボタン非活性化
  　$("#riset").prop("disabled",true);
  }
});