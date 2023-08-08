// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);
        // 特定の地域(今回は東京)だけ選択して変数に詰め直す
        // console.log(weather)
        console.log(weather[0].publishingOffice)
        console.log(weather[1].tempAverage)
        const tokyoMinTemp = weather[1].tempAverage.areas.find(area => area.area.name === "東京").min;
        const tokyoMaxTemp = weather[1].tempAverage.areas.find(area => area.area.name === "東京").max;

        console.log("東京の最低気温:", tokyoMinTemp);
        console.log("東京の最高気温:", tokyoMaxTemp);

        let area = weather[0].timeSeries[0].areas[0];
        // console.log(area); 
        // 発表者と報告日時の情報を画面に書き出す
        document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
        document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;
        // 特定地域の情報を画面に書き出す
        document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
        document.getElementById("today").lastElementChild.textContent = area.weathers[0];
        document.getElementById("tomorrow").lastElementChild.textContent = area.weathers[1];
        document.getElementById("dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];
    });

