$(document).on('click', '.up', function() {
    $(this).siblings('.product__count').val(function(index, value) {
        return Number(value) + 1
    });
});
$(document).on('click', '.down', function() {
    $(this).siblings('.product__count').val(function(index, value) {
        if (Number(value) > 1) {return Number(value) - 1} 
        else {return 1}
    });
});
$(document).on('click', '.unit--select', function() {
    if ($(this).attr('class') ==  'unit--select') {
        $(this).addClass('unit--active')
        $(this).closest('.product').children('.product_price_club_card').children('.goldPrice').toggleClass('none')
        $(this).closest('.product').children('.product_price_default').children('.retailPrice').toggleClass('none')
    }
    $(this).siblings('.unit--select').removeClass('unit--active')
});