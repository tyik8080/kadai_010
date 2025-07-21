$(function(){
    $('#change-color').on('click',function(){
        $('#target').css('color','red');
    });
$('#change-text').on('click',function(e){
    // クリックされた場合
    if(e.type === 'click'){
        $('#target').text('HELLO!');
    }
    });
     $('#fade-out').on('click',function(){
// 不透明度0にする（フェードアウトする）
        $('#target').css('opacity',0);
    });
      $('#fade-in').on('click',function(){
// 不透明度1にする（フェードインする）
        $('#target').css('opacity',1);
    });
});