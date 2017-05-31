$(document).ready(function () {

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var now = new Date();
            var h = now.getHours();
            var lati = position.coords.latitude;
            var longi = position.coords.longitude;
            var api = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+longi+"&appid=1039cb33d63eb371e635c7cd8c14cf9f";
            $.getJSON(api, function(data){
                var ktemp = data.main.temp;
                var ctemp = parseFloat(Math.round((ktemp-273) * 100) / 100).toFixed(2);
                var ftemp = ctemp*(9/5)+32;
                var changeValue = false;
                function changeTempo() {
                    if(changeValue){
                        $('.tempChange').html("<i class='wi wi-celsius'></i>");
                        $('.temper').html(ctemp);
                        changeValue = false;
                    }else{
                        $('.tempChange').html("<i class='wi wi-fahrenheit'></i>");
                        $('.temper').html(ftemp);
                        changeValue = true;
                    }
                }
                $('.tempChange').html("<i class='wi wi-celsius'></i>");
                $('.temper').html(ctemp);
                $('.tempChange').click(changeTempo);

                var myVar = setInterval(function(){ myTimer() }, 1000);
                function myTimer() {
                    var now = new Date();
                    var h = now.getHours();
                    var m = now.getMinutes();
                    $('.horario').html(("0"+h).slice(-2)+":"+("0"+m).slice(-2));
                }
            switch (data.weather[0].description){
                case "clear sky":
                    if(h>4&&h<18){
                    $('body').css({"background-image":"url('assets/clear-sky-day.jpg')"});
                    $('.tempo').html("<i class='wi wi-day-sunny'></i>");
                    }else{
                    $('body').css({"background-image":"url('assets/clear-sky-night.jpg')"});
                    $('.tempo').html("<i class='wi wi-night-clear'></i>");
                    }
                    break;
                case "few clouds":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/few-clouds-day.jpg')"});
                        $('.tempo').html("<i class='wi wi-day-cloudy'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/few-clouds-night.jpg')"});
                        $('.tempo').html("<i class='wi wi-night-alt-cloudy'></i>");
                    }
                    break;
                case "scattered clouds":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/scattered-clouds-day.jpg')"});
                        $('.tempo').html("<i class='wi wi-cloud'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/scattered-clouds-night.jpg')"});
                        $('.tempo').html("<i class='wi wi-cloud'></i>");
                    }
                    break;
                case "broken clouds":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/broken-clouds-day.jpg')"});
                        $('.tempo').html("<i class='wi wi-cloudy'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/broken-clouds-night.jpg')"});
                        $('.tempo').html("<i class='wi wi-cloudy'></i>");
                    }
                    break;
                case "shower rain":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/shower-rain.jpg')"});
                        $('.tempo').html("<i class='wi wi-rain'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/shower-rain.jpg')"});
                        $('.tempo').html("<i class='wi wi-rain'></i>");
                    }
                    break;
                case "rain":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/rain.jpg')"});
                        $('.tempo').html("<i class='wi wi-day-hail'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/rain.jpg')"});
                        $('.tempo').html("<i class='wi wi-night-alt-rain'></i>");
                    }
                    break;
                case "thunderstorm":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/thunderstorm-day.jpg')"});
                        $('.tempo').html("<i class='wi wi-day-snow-thunderstorm'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/thunderstorm-night.jpg')"});
                        $('.tempo').html("<i class='wi wi-night-alt-snow-thunderstorm'></i>");
                    }
                    break;
                case "snow":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/snow.jpg')"});
                        $('.tempo').html("<i class='wi wi-day-snow'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/snow-night.jpg')"});
                        $('.tempo').html("<i class='wi wi-night-alt-snow'></i>");
                    }
                    break;
                case "mist":
                    if(h>4&&h<18){
                        $('body').css({"background-image":"url('assets/mist.jpg')"});
                        $('.tempo').html("<i class='wi wi-day-fog'></i>");
                    }else{
                        $('body').css({"background-image":"url('assets/mist.jpg')"});
                        $('.tempo').html("<i class='wi wi-night-fog'></i>");
                    }
                    break;

            }
            $('title').text('Weather in '+ data.name);
            $('.textCity').html(data.name);




        })



    })
    }
})