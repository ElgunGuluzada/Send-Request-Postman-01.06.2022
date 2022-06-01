$(document).ready(function () {
    axios.get('https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=london').then(resp => {

        console.log(resp.data);
    });
})