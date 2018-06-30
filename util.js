/*
*  case: mobile toggle sets overflow: hidden on page container
*  issue: scroll jumps to top of page
*  set scroll manually to solve
*/

var util = {
    mobileToggle: function ($container, $toggle, auto) {
        $container.on("click", $toggle, function () {
            if (auto) {
                var $window = $(window),
                    scroll = $window.scrollTop();
                $(this).toggleClass("js--mobile");
                $window.scrollTop(scroll);
            } else {
                $(this).toggleClass("js--mobile");
            }
        })
    },
    init: function () {
        var _ = this;
        _.mobileToggle($(".page-container"), $(".header__toggle"), auto);
    }
}

util.init();
