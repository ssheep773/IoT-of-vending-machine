var KHH = document.getElementById("KHH-citylist")
var TPE = document.getElementById("TPE-citylist")
var TXG = document.getElementById("TXG-citylist")
// var choice_city = ''
// var choice_location = ''
var test = {}
var myBarChart = null
var cityChinese = {
    "Kaohsiung" : '高雄市',
    "Taipei" : '台北市',
    "Taichung" :'台中市'
}

function show_statistics() {
    document.querySelector('.chart-title').innerHTML = '統計資料';
    document.querySelector(".temperature").style.display="none";
    getData('overall', 'none', 'none')
}
function show_district() {    
    if (document.querySelector(".citybar").style.display == 'block') {
        document.querySelector(".citybar").style.display="none";
    }
    else{
        document.querySelector(".citybar").style.display="block";
        KHH.style.display="none";
        TPE.style.display="none";
        TXG.style.display="none";
    }
}
// 左邊選單的顯示相關操作
function click_KHH() {
    if (KHH.style.display == 'block') {
        KHH.style.display="none";
    }
    else{
        KHH.style.display="block";
        TPE.style.display="none";
        TXG.style.display="none";
    }
    getData('city', 'Kaohsiung', 'none')
}
function click_TPE() {
    if (TPE.style.display == 'block') {
        TPE.style.display="none";
    }
    else{
        KHH.style.display="none";
        TPE.style.display="block";
        TXG.style.display="none";
    }
    getData('city', 'Taipei', 'none')
}
function click_TXG() {
    if (TXG.style.display == 'block') {
        TXG.style.display="none";
    }
    else{
        KHH.style.display="none";
        TPE.style.display="none";
        TXG.style.display="block";
    }
    getData('city', 'Taichung', 'none')
}
// 選擇到最細的地點 ，更改各區狀況的地點名稱
function click_location(){ 
    show_place = cityChinese[this.dataset.item] + " - " + this.textContent
    document.querySelector('.chart-title').innerHTML = show_place;
    document.querySelector(".temperature").style.display="block";
    getData('location', this.dataset.item, this.textContent)
    
}

function getData(operation, choice_city, choice_location){
    $.ajax({
        url: "./",
        async: true, //設為同步
        data: {
            // overall, city, location
            "operation" : operation,
            "city":choice_city,
            "location": choice_location,
        },
        success: function(data) {
            //返回值 data 在這裡是一個列表
            // console.log(data)
            show_chart(data)
        },
        // 錯誤時執行的函式
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        //請求完成時執行的函式(不論結果是success或error)。
        complete: function(XMLHttpRequest, textStatus) {
            // the options for this ajax request
            console.log("complete : " + textStatus);
        },
        //發送請求之前可在此修改XMLHttpRequest物件，如添加header等，你可以在此函式中return flase取消Ajax request。
        beforeSend: function(XMLHttpRequest) {
            // the options for this ajax request
            // alert("beforeSend");
        },
        type: "POST", //預設為 GET
        dataType: "json" //無指定自動選擇
    });
    
}

// 根據點選的地點顯示收到的數據
function show_chart(data){
    if (data['operation'] == "overall"){
        show_overall_statistical_chart(data)
    }
    if (data['operation'] == "city" ){
        show_city_statistical_chart(data)
    }
        
    if (data['operation'] == "location" ){
        show_location_statistical_chart(data)
    }
        


}
function show_overall_statistical_chart(data){
    console.log(data)
}
function show_city_statistical_chart(data){
    console.log(data)
}
function show_location_statistical_chart(data){
    console.log(data)
    document.querySelector(".temperature").innerHTML= '溫度 : ' + data['temperature'] + " °C"
    drink_name = data['drink_name']
    drink_actual = data['drink_actual']
    drink_total = data['drink_total']
    var data = {
        labels: drink_name,
        datasets: [{
                    label: "Actual",
                    backgroundColor: 'rgba(0, 0, 255, 0.5)',
                    borderWidth: 1,
                    data: drink_actual,
                    // xAxisID: "bar-x-axis2",
                    stack: "background",
                    stack:true,                    
                    barPercentage: 0.8,
                },{
                    label: "Total",
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderWidth: 1,
                    data: drink_total,
                    xAxisID: "bar-x-axis1",
                    stack:true,
                    barPercentage: 1,
                }]
        };
    var options = {
            scales: {
                yAxes: [{
                    id: "bar-y-axis2",
                    stacked: false,
                    ticks: {
                      beginAtZero: true
                    } 
                }]
            }, // end scales
            title: { //標題
                display: true,
                text: '訪問統計',
                fontColor: "#f00",
            },
        };

    
    if(myBarChart!=null){
        myBarChart.destroy();
        console.log('clean chart')
    }
    var ctx = document.getElementById("myChart");
    myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}



// 選擇統計或是區域
document.getElementById("statistics").addEventListener("click", show_statistics);
document.getElementById("district").addEventListener("click", show_district);
// 選擇城市
document.getElementById("Kaohsiung").addEventListener("click", click_KHH);
document.getElementById("Taipei").addEventListener("click", click_TPE);
document.getElementById("Taichung").addEventListener("click", click_TXG);
// 選擇地點
const pbox = document.querySelectorAll(".location");
for (let i = 0; i < pbox.length; i++) {
     pbox[i].addEventListener("click", click_location);
}





