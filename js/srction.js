(function (a) {
    var isScrollEnabled = true;

    a(document).ready(function () {
            
                var g = a("#backToTop"),
                 f = a(".drop-down"),
                 e = a(window).width(),
                 k = !1; a("section header, section .content-container").addClass("hidden");
       
                a(window).on("resize load", function () {
                    e = a(window).width();
                    height = a(window).height();
                    if (768 >= e) a("#searchField").on("focus", function (a) { k = !0 });
                    768 < e && (a("body, html").removeClass("showMenu"),
                    a("#main-menu > ul li .drop-down").slideUp(),
                    a("#main-menu > ul li").removeClass("open"),
                    a("nav#main-menu").removeClass("open-ie"));

                    var b, h = 0; 
            
                    var scrollCallback = function () {
                        b && (clearTimeout(b),
                        b = null);
                        b = setTimeout(scrollHandler, 520)
                    };
                    a(window).off('scroll').on('scroll', scrollCallback);
                    var animTime = 500;

                    function closest(num, arr) {
                        var curr = arr[0];
                        var index = 0;
                        var diff = Math.abs(num - curr);
                        for (var val = 0; val < arr.length; val++) {
                            var newdiff = Math.abs(num - arr[val]);
                            if (newdiff < diff) {
                                diff = newdiff;
                                curr = arr[val];
                                index = val;
                            }
                        }
                        return {value: curr, index: index};
                    }

                    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

                    function preventDefault(e) {
                        e = e || window.event;
                        if (e.preventDefault)
                            e.preventDefault();
                        e.returnValue = false;
                    }

                    function preventDefaultForScrollKeys(e) {
                        if (keys[e.keyCode]) {
                            preventDefault(e);
                            return false;
                        }
                    }

                    function userScrollEventForScrollKeys(e) {
                        if (keys[e.keyCode]) {
                            userScrollEvent();
                            return false;
                        }
                    }


                    function userScrollEvent() {
                        a("body, html").stop();
                    }

                    function onUserScrollScroll() {
                        if (window.addEventListener) // older FF
                            window.addEventListener('DOMMouseScroll', userScrollEvent, false);
                        window.onwheel = userScrollEvent; // modern standard
                        window.onmousewheel = document.onmousewheel = userScrollEvent; // older browsers, IE
                        window.ontouchmove = userScrollEvent; // mobile
                        document.onkeydown = userScrollEventForScrollKeys;
                    }
                    onUserScrollScroll();

                    function disableScroll() {
                        if (window.addEventListener) // older FF
                            window.addEventListener('DOMMouseScroll', preventDefault, false);
                        window.onwheel = preventDefault; // modern standard
                        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
                        window.ontouchmove = preventDefault; // mobile
                        document.onkeydown = preventDefaultForScrollKeys;
                    }

                    function enableScroll() {
                        if (window.removeEventListener)
                            window.removeEventListener('DOMMouseScroll', preventDefault, false);
                        window.onmousewheel = document.onmousewheel = null;
                        window.onwheel = null;
                        window.ontouchmove = null;
                        document.onkeydown = null;
                    }

                    scrollHandler = function () {
                        var d = a("body, html"),
                        b = a(window).scrollTop();
                        
                        var arr = [];
                        $('section').each(function () {
                            arr.push($(this).offset().top);
                        });
                        var lastSection = $('section:last-child');
                        arr.push(lastSection.offset().top + lastSection.height());
                        var closestData = closest($(window).scrollTop(), arr);

                        $('.activeAnchor').removeClass('activeAnchor');
                        $('a[href="#' + $('section').eq(closestData.index).attr('id') + '"]').addClass('activeAnchor');
                        var offsetTop = closestData.value;
                        var resultTop = 0;

                        if (window.innerWidth >= 993)
                            resultTop = offsetTop - 86;
                        else if (window.innerWidth >= 768)
                            resultTop = offsetTop - 119;
                        else
                            resultTop = offsetTop - 135;

                        if (closestData.index == 0)
                            resultTop = 0;
                        if (closestData.index >= arr.length - 1)
                            resultTop = $(document).height();
                        
                        if (Math.abs($(window).scrollTop() - resultTop) <= 250)
                            d.animate({
                                scrollTop: resultTop
                            }, animTime);

                        h = b
                    }
                });
            
    });
})(window.jQuery);

//119

/*
 if (window.innerWidth > 769) {
                                d.animate({
                                    scrollTop: closestData.index > 0 ? offsetTop - 86 : 0
                                }, animTime);
                            }
 */


