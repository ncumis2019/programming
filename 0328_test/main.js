//程式邏輯，主要程式運作 // $()表用到jQuery
$(document).ready(function(){
    var currentQuiz=null;//儲存做到第幾題
    
    $("#startButton").click(function(){//按下按鈕後
        if(currentQuiz==null)//如果還沒開始作答
        {
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0 ; x<questions[0].answers.length ; x++)//迴圈會跑3次(答案的長度)
            {
                $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");//單選(同一組選項的name必須一樣)
            }
            $("#startButton").attr("value","Next");//改變按鈕文字為Next
        }
        else//已經開始作答
        {
            $.each($(":radio"),function(i,val)//":radio"選取所有的radio,宣告function(i可能為0,1,2)
            {
                if(val.checked)//如果val為真
                {
                     if(isNaN(questions[currentQuiz].answers[i][1]))//如果是最終結果(用isNaN(isNotaNumber)判斷是否為數字)
                    {
                        var finalResult=questions[currentQuiz].answers[i][1];            $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty(); $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始")
                    }
                    else//還沒得到最終結果
                    {
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0 ; x<questions[currentQuiz].answers.length ; x++)//迴圈會跑3次(答案的長度)
                        {
                            $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");//單選(同一組選項的name必須一樣)
                        }
                    }
                    return false;//強制離開.each
                }
            });
        }
    });
});