$.ajax({ url: "products.json"}).done(function(data) {
    var tmpl = $.templates("#myTmpl");
    var myHelpers = {
        zeroDel: function(val) { return val.replace(/^0+/, ''); },
        round: function(val) { return val.toFixed(2) },
        imageSize: function(val) { 
            var extension =  val.replace(/\/\/tdp.ru\/.+\./, '.'); 
            var path = val.replace(/(\.jpg)|(\.png)|(\.tif)|(\.JPG)/, '')
            return path + '_220x220_1' + extension
        },
        packing: function(val) { return val.match(/[0-9](\.|\,)[0-9]+\s(кв\.м|м\.кв|м{1}$)/g, '');
        },
    };
    var html = tmpl.render(data, myHelpers);      
    $(".product__area").html(html);  
}) 