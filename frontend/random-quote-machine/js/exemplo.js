/**
 * Created by Diemano on 11/04/2017.
 */
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var dicaAtual = '';
function openURL(url){
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}


function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'data/package.json',
        success: function(response) {
            var r = JSON.parse(response);
            dicaAtual = r.quote;
            if(inIframe())
            {
                $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=frasesnerds&related=freecodecamp&text=' + encodeURIComponent('"' + dicaAtual + '" '));
            }
            $(".fonth3").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('.dica').text(r.quote);
                });

            var color = Math.floor(Math.random() * colors.length);
            $("html body").animate({
                backgroundColor: colors[color],
                color: colors[color]
            }, 1000);
            $(".button").animate({
                backgroundColor: colors[color]
            }, 1000);
        }
    });
}
$(document).ready(function() {
    getQuote();
    $('#proxima').on('click', getQuote);
    $('#tweet-quote').on('click', function() {
        if(!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=frasesnerd&related=freecodecamp&text=' + encodeURIComponent('"' + dicaAtual + '" '));
        }
    });
});