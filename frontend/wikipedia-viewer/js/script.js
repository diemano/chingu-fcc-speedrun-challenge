/**
 * Created by Diemano on 31/05/2017.
 */
$(document).ready(function(){
    $('#search').click(function(){
        var searchTerm = $('#searchTerm').val();
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&format=json';

        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function (data) {
                $('#output').html("");
                for(var i = 0;i<data[1].length;i++){
                    $('#output').prepend('<a href="'+data[3][i]+'"><li class="item-topico"><p>'+data[1][i]+'</p><p>'+data[2][i]+'</p></li></a>');
                }

            },
            error: function (errorMessage) {
                alert('error');
            }
        });
    });

});