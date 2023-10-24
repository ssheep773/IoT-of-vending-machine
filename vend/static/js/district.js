// $.ajaxSetup({
//     data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
// });

// function getData(){
//     $.ajax({
//         url: "/ajax_jquery_POST/",
//         data: {
//             "city":choice_city,
//             "location ": choice_location ,
//         },
//         success: function(data) {
//             //返回值 data 在這裡是一個列表
//             console.log(data)
//         },
//         // 錯誤時執行的函式
//         error: function(xhr, ajaxOptions, thrownError) {
//             console.log(xhr.status);
//             console.log(thrownError);
//         },
//         //請求完成時執行的函式(不論結果是success或error)。
//         complete: function(XMLHttpRequest, textStatus) {
//             // the options for this ajax request
//             console.log("complete : " + textStatus);
//         },
//         //發送請求之前可在此修改XMLHttpRequest物件，如添加header等，你可以在此函式中return flase取消Ajax request。
//         beforeSend: function(XMLHttpRequest) {
//             // the options for this ajax request
//             // alert("beforeSend");
//         },
//         type: "POST", //預設為 GET
//         dataType: "json" //無指定自動選擇
//     });
// }

// console.log("here is 各區資料 js")

// var data = {
//     labels: ["x1", "x2", "x3", "x4", "x5"],
//     datasets: [
//         {
//             label: "Actual",
//             backgroundColor: 'rgba(0, 0, 255, 0.5)',
//             borderWidth: 1,
//             data: [40, 150, 50, 60, 70],
//             xAxisID: "bar-x-axis1",
//             stack: "background"
//         },
//         {
//             label: "Target",
//             backgroundColor: 'rgba(0, 0, 0, 0.2)',
//             borderWidth: 1,
//             data: [100, 100, 100, 100, 100],
//             xAxisID: "bar-x-axis2"
//         }
//     ]
// };

// var options = {
//     scales: {
//         xAxes: [
//             {
//                 id: "bar-x-axis2",
//                 stacked: true,
//                 categoryPercentage: 0.5,
//                 barPercentage: 0.5
//             },
//             {
//                 display: true,
//                 stacked: true,
//                 id: "bar-x-axis1",
//                 type: 'category',
//                 categoryPercentage: 0.4,
//                 barPercentage: 1,
//                 gridLines: {
//                     offsetGridLines: true
//                 }
//             }
//         ],

//         yAxes: [{
//             id: "bar-y-axis1",
//             stacked: false,
//             ticks: {
//                 beginAtZero: true
//             }
//         }]

//     }
// };

// var ctx = document.getElementById("myChart").getContext("2d");
// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: options
// });