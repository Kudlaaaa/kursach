$('document').ready(function(){
    loadGoods();
});

function loadGoods(){
    $.getJSON('db.json', function(data){
        var htmlOut = '';
        for(var key in data){
            htmlOut+='<div class="single-doll">';
            htmlOut+='<div class="single-doll-img">';
            htmlOut+='<a href="'+data[key]['link']+'" target="_blank">';
            htmlOut+='<img src="'+data[key]['image']+'" alt="Кукла">';
            htmlOut+='<div class="single-doll-img-layhtmlOut"></div>';
            htmlOut+='<p class="buy-button">Заказать</p></a></div>';
            htmlOut+='<p>'+data[key]['price']+'</p>';
            htmlOut+='</div>';
        }
        $('#dolls').html(htmlOut);
    });
}