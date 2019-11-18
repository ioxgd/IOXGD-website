$(function() {
    $("#hardware .box-hardware .point").click(function() {
        $("#hardware .box-hardware .point").removeClass("active");
        $(this).addClass("active");

        $("#hardware .box-hardware .description").hide();
        $("#hardware-description" + $(this).attr("data-point")).show();
    });

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > 140){
            $("header").height(60);
        } else {
            $("header").height(100);
        }
    });
})();
