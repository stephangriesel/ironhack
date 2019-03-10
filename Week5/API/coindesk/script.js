const coinInfo = axios.create({
    baseURL: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
});

coinInfo.get()
    .then(response => {
        console.log(response);
        var key = '';
        var value = '';
        for ([key, value] of Object.entries(response.data.bpi)) {
            $('#coinResult').append(`<br>Date: ${key} <br> Price: ${value} <br>`);
        }

    })
    .catch(error => {
        console.log(error);
    });

// $("#submit").click(function () {
//     var start = 
// //     var end = 
// });


