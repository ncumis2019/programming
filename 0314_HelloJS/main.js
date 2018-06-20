//程式邏輯，主要程式運作
window.onload = function()
{
    //document.write("hello js!");
}

$(document).ready(function(){
    $("input").click(function()//以下為按下按鈕的反應
    {
        var numberOfListItem=$("#choices li").length;//計算li元件有幾個
        var randomnumber=Math.floor(Math.random()*numberOfListItem);//產生對應的亂數(math.random產生0~1之間的小數亂數，math.floor去掉尾數)
        
        alert("按了!!");//按下按鈕後跳出的通知文字
        
        $("h1").text($("#choices li").eq(randomnumber).text());//改變h1標籤裡的文字，使用亂數隨機取list中的文字
    });
});