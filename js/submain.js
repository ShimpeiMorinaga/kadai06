// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        // 特定の地域(今回は東京)だけ選択して変数に詰め直す
        let area = weather[0].timeSeries[0].areas[0];
        
        // 降水確率
        let pops = area.pops;
        console.log("降水確率:", pops);
        
        // 最低気温と最高気温
        let tempMin = area.tempMin;
        let tempMax = area.tempMax;
        console.log("最低気温:", tempMin);
        console.log("最高気温:", tempMax);
        
        // // 発表者と報告日時の情報を画面に書き出す
        // document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
        // document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;
        
        // // 特定地域の情報を画面に書き出す
        // document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
        // document.getElementById("today").lastElementChild.textContent = area.weathers[0];
        // document.getElementById("tomorrow").lastElementChild.textContent = area.weathers[1];
        // document.getElementById("dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];
        
        // // 降水確率を画面に書き出す
        // document.getElementById("pops").lastElementChild.textContent = pops.join(", ");
        
        // // 最低気温と最高気温を画面に書き出す
        // document.getElementById("tempMin").lastElementChild.textContent = tempMin.join(" - ");
        // document.getElementById("tempMax").lastElementChild.textContent = tempMax.join(" - ");
    });
