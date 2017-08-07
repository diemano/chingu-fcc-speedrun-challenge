/**
 * Created by Diemano on 31/05/2017.
 */
$(document).ready(function(){
    $('#search').click(function(){
        var searchTerm = $('#searchTerm').val();
        var url = 'https://pt.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&format=json';

        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function (data) {
                $('#output').html("");
                $('.result').html('Your search for "'+searchTerm+'" generated '+data[1].length+' results.');
                $('body').css({"padding-top":"10px"});
                for(var i = 0;i<data[1].length;i++){
                    $('#output').prepend('<li class="item-topico rounded animated slideInUp"><p><a class="itens" href="'+data[3][i]+'">'+data[1][i]+'</a></p><p>'+data[2][i]+'</p></li>');
                }

            },
            error: function (err) {
                alert(err);
            }
        });
    });
    $('#searchTerm').keypress(function(e){
        if(e.which == 13){
            $('#search').click();
        }
    });
});