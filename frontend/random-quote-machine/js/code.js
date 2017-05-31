/**
 * Created by Diemano on 10/04/2017.
 */
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
function openURL(url){
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0, target=_blank');
}

var rand = "Batatinha quando nasce espalha rama pelo chão, internet quando cai, faz parar o coração.";

$(document).ready(function() {
    $('#tweet-quote').on('click', function() {
        if(!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=frasesnerd&related=freecodecamp&text=' + encodeURIComponent('"' + rand + '" '));
        }
    });
    $(".fonth3").animate({
            opacity: 0
        }, 500,
        function() {
            $(this).animate({
                opacity: 1
            }, 500);
            $('.dica').text(rand);
        });

    $("#proxima").on("click", function(){
        $.getJSON("data/package.json", function(json) {
            Object.keys(json).forEach(function(key) {
                var value1 = json[key];
                rand = value1[Math.floor(Math.random() * value1.length)];

                if(inIframe())
                {
                    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=frasesnerds&related=freecodecamp&text=' + encodeURIComponent('"' + rand + '"'));
                }

                $(".fonth3").animate({
                        opacity: 0
                    }, 500,
                    function() {
                        $(this).animate({
                            opacity: 1
                        }, 500);
                        $('.dica').text(rand);
                    });
                });
            });
        });
});



