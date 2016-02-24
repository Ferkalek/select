/**
 * Created by Admin on 13.02.2016.
 */
$(function(){
    //$("select#my_select").val();
    var uselect = $('.uselect'),
        //uselSelectedVal = $(".uselect :selected").val(),
        uselSelectedText = $(".uselect :selected").html(),
        newList = '<ul class="list">',
        content = '<div class="select-main"></div><div class="select-content"></div>';

    uselect.hide();
    uselect.wrap('<diw class="select-wrapper"></diw>');
    $('.select-wrapper').append(content);
    uselect.find('sele')
    uselect.find('option').each(function(){
        newList += '<li>' + this.text + '</li>';
    });
    newList = newList + '</ul>'
    $('.select-main').append(uselSelectedText);
    $('.select-content').append(newList);

    $('.select-content').hide();

    $('.select-main').on('click', function(){
        $(this).toggleClass('opened').parent().find('.select-content').slideToggle()
    });

    $('.select-content li').on('click', function(e){
        var newOption = $(this).text();
        $(this).closest('.select-wrapper').find('.select-main').text(newOption);
        $(this).closest('.select-wrapper').find('.select-content').slideUp('slowly');
    });

});