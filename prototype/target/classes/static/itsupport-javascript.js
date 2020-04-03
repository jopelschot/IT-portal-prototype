$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });

    $(".modal-body").scrollTop($(".modal-body").height());
});


