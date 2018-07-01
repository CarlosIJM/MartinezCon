$(function() {
    $(".slides").slidesjs({
        width: 940,
        height: 290,

        play: {
            active: false,
            effect: "slide",
            interval: 3000,
            auto: true,
            swap: true,
            pauseOnHover: false,
            restartDelay: 2500
        }
    });
});