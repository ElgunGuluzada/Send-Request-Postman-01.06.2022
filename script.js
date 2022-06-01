let content = document.getElementById("content")
let city = document.getElementById("city")
let country = document.getElementById("country")
let weather = document.getElementById("weather")
let condition = document.getElementById("condition")
let cBtn = document.getElementById("cBtn")
let fBtn = document.getElementById("fBtn")
let input = document.getElementById("input")


$(document).ready(function () {
    $("#searchBtn").click(function () {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`).then(element => {
            city.innerText = element.data.location.name
            country.innerText = element.data.location.country
            weather.innerText = element.data.current.temp_c

            $("#cBtn").click(function () {
                weather.innerText = element.data.current.temp_c
            })
            $("#fBtn").click(function () {
                weather.innerText = element.data.current.temp_f
            })
        });
    })

})

