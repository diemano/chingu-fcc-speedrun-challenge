/**
 * Created by Diemano on 02/06/2017.
 */
$(document).ready(function(){

    var channelsT = ["ESL_SC2", "OgamingSC2", "cretetion", "TioDante", "habathcx", "RobotCaleb", "noobs2ninjas"];

    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=93ru2ssu1li1ks9k2atx8ex1v0u2xh', function (dataIni) {
        $.getJSON('https://api.twitch.tv/kraken/channels/freecodecamp?client_id=93ru2ssu1li1ks9k2atx8ex1v0u2xh', function (dataDuo) {
            var stream = dataIni.stream === null ?
                '<div class="online col"> <a href="'+
                dataDuo.url +'" class="offlineIcon">off</a> </div>' :
                '<div class="online col"> <a href="'+
                dataDuo.url +'" class="onlineIcon">on</a> </div>';

            $('.output').append(
                '<li class="canal row animated fadeIn"><div class="col"><img style="width: 80px; height: 80px;" class="rounded-circle" src="' +
                dataDuo.logo + '"></div> <div class="col-6"><p class="tituloCanal"><a href="' +
                dataDuo.url + '" class="linkTitulo">' +
                dataDuo.display_name + '</a> </p><p class="desc">' +
                dataDuo.status + '</p> </div>' +
                stream +
                '</li>'
            );
        });
        })

    for(var i = 0; i<channelsT.length; i++){
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/'+channelsT[i]+'?client_id=93ru2ssu1li1ks9k2atx8ex1v0u2xh',
            dataType: 'jsonp',
            hearder:{
                'Client-ID':'93ru2ssu1li1ks9k2atx8ex1v0u2xh'
            },
            success: function (data2) {

                var urlF = 'https://api.twitch.tv/kraken/streams/'+data2.url.slice(22)+'?client_id=93ru2ssu1li1ks9k2atx8ex1v0u2xh';
                $.getJSON(urlF,function (data) {

                    var stream = data.stream === null ?
                        '<div class="online col"> <a href="'+
                        data2.url +'" class="offlineIcon">off</a> </div>' :
                        '<div class="online col"> <a href="'+
                        data2.url +'" class="onlineIcon">on</a> </div>';

                    $('.output').append(
                        '<li class="canal row animated fadeIn"><div class="col"><img style="width: 80px; height: 80px;" class="rounded-circle" src="' +
                        data2.logo + '"></div> <div class="col-6"><p class="tituloCanal"><a href="' +
                        data2.url + '" class="linkTitulo">' +
                        data2.display_name + '</a> </p><p class="desc">' +
                        data2.status + '</p> </div>' +
                        stream +
                        '</li>'
                    );
                });
            }
        });
    }
});