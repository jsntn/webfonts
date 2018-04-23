$(document).ready(function () {
    var steps = 2;

    var content = $('.original').html();
    var top = $('<div/>').insertBefore('.original');
    var bottom = $('<div/>').insertBefore('.original');

    for (var i = 0; i < steps; i++) {
        $('<div/>').addClass('realistic blur blur-top').html(content).appendTo(top);
        $('<div/>').addClass('realistic blur blur-bottom').html(content).appendTo(bottom);
    }
});