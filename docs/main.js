$('#go').on('click', function () {
    var stuff = $('#stuff').position().top;
    $('html, body').animate({
        scrollTop: stuff
    }, 900);
});