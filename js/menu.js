!function (a) {
    a(document).ready(function () {
        var b = a("#sanmenu"), c = b.find("ul:first"), d = b.find("li").not("#responsive-tab");
        c.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>'), b.on("click", "#responsive-tab", function () {
            d.slideToggle("fast"), d.addClass("collapsed")
        })
    })
}(jQuery);