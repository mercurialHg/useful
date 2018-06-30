/*
*  case: mobile toggle sets overflow: hidden on page container
*  issue: scroll jumps to top of page
*  set scroll manually to solve
*/

var util = {
    options: {},
    mobileToggle: function ($container, $toggle, auto) {
        //auto [boolean] see if auto scroll is needed
        $container.on("click", $toggle, function () {
            if (auto) {
                var $window = $(window),
                    scroll = $window.scrollTop();
                $container.toggleClass("js--mobile");
                $window.scrollTop(scroll);
            } else {
                $container.toggleClass("js--mobile");
            }
        })
    },
    init: function () {
        var _ = this;
        _.mobileToggle($("body"), ".header__toggle", true);
    }
}

util.init();
