$(document).ready(function() {
    $('#mycarousel').carousel({
        interval: 2000
    });

    /* $('#carousel-pause').click(function() {
        $('#mycarousel').carousel('pause');
    });

    $('#carousel-play').click(function() {
        $('#mycarousel').carousel('cycle');
    }); */

    $('#carousel-button').click(function() {
        if ($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });

    $('#login').click(function() {
        $('#loginModal').modal('show');
    });

    $('#crossBtn').click(function() {
        $('#loginModal').modal('hide');
    });

    $('#cancelLogin').click(function() {
        $('#loginModal').modal('hide');
    });

    $('#reserveModal').click(function() {
        $('#reserveTable').modal('show');
    });

    $('#reserveCancelBtn').click(function() {
        $('#reserveTable').modal('hide');
    });

    $('#cancelReserve').click(function() {
        $('#reserveTable').modal('hide');
    });
});