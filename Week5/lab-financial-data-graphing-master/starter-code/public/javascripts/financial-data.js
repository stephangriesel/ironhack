$("#get-data").click(() => {
    start = $("#start").val();
    end = $("#end").val();
    currency = $("#currency").val()

    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${start}&end=${end}`)
    .then(result => {
        // console.log(result.data.bpi)
        allData = result.data.bpi
        dates = Object.keys(allData)
        value = Object.values(allData)

        $("#min").html(`Min value ${currency}` + Math.max.apply(Math, value));
        $("#max").html(`Min value ${currency}` + Math.max.apply(Math, value))

        updateChart(dates, value)
    })
})

function updateChart (dates, value) {
    var ctx = $("#myChart");

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: "label",
                data: value,
                backgroundColor: 'rgb(144,144,201)',
                borderColor: 'rgb(0,0,255)',
                borderWidth: 1
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            responsive: true,
            scales: [{
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }]

        }
    });
}

// Old approach

// const coinInfo = axios.create({
//     baseURL: `https://api.coindesk.com/v1/bpi/historical/close.json?`
// });

// // var stockLabels = [];
// // var stockPrice = [];

// // coinInfo.get()
// //     .then(dataKey => {
// //         console.log(dataKey);
// //         printTheChart(dataKey.data)
// //         var key = '';
// //         var value = '';
// //         for ([key, value] of Object.entries(dataKey.data.bpi)) {
// //             stockLabels.push(key);
// //             stockPrice.push(value);
// //         }

// //     })
// //     .catch(error => {
// //         console.log(error);
// //     });

// // ;


// // // My chart

// // const printTheChart = (stockData => {
// //     const ctx = document.getElementById("myChart").getContext('2d');

// //     const chart = new Chart(ctx, {
// //         type: 'line',
// //         data: {
// //             labels: stockLabels,
// //             datasets: [{
// //                 label: "Stock Chart",
// //                 backgroundColor: 'rgb(255, 99, 132)',
// //                 borderColor: 'rgb(255, 99, 132)',
// //                 data: stockPrice,
// //             }]
// //         }
// //     });
// // });