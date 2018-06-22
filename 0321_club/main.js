//程式邏輯，主要程式運作
$(document).ready(function(){
    $("#courseTable").append("<tr> <th>場次</th> <th>出發日期</th> <th>國家/城市</th> </tr>");

    var secondUnit=1000;
    var minuteUnit=secondUnit*60;
    var hourUnit=minuteUnit*60;
    var dayUnit=hourUnit*24;
    
    for(var i = 0; i < topic.length; i++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(i+1)+"</td>");
        $("#courseTable").append("<td>"+(new Date((start.getTime()+i*7*dayUnit))).toLocaleDateString()+"</td>");
        $("#courseTable").append("<td>"+topic[i]+"</td>");
        $("#courseTable").append("</tr>");
    }
});