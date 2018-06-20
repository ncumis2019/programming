//存放資料
var topic=[//建立陣列
    "一",
    "二",
    "a",
    "b",
    "c"
];

var start = new Date();
function setMonthAndDay(startM,startD)
{
    start.setMonth(startM-1);
    start.setDate(startD);
    srart.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
}

setMonthAndDay(2,8);