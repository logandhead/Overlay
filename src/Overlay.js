(function () {
    var overlay = function (opts) {
        var options = $.extend({
            element: null,
            zIndex: 100,
            cssClass: "",
            placement: 'body',
            opened: false,
            openAnimation: 'fadeIn', //show, fadeIn, slideIn,
            closeAnimation: 'fadeOut',
            toggleAnimation: 'fadeToggle',
            duration: 500,
            opacity: .90

        }, opts);
        var modalElement;
        var createModal = function () {
            modalElement = $("<div>")
                .addClass(options.cssClass)
                .css({
                    "z-index": options.zIndex,
                    "position": "absolute",
                    height: '100%',
                    width: $(document).width(),
                    opacity: options.opacity,
                    display: options.opened ? 'block' : 'none',

                });
            $(options.placement).prepend(modalElement);
        }
        var modalShow = function (display) {
            reLayout();
            switch (display) {
                case "show":
                    $(modalElement)[options.openAnimation](options.duration);
                    break;
                case "hide":
                    $(modalElement)[options.closeAnimation](options.duration);
                    break;
                case "toggle":
                    $(modalElement)[options.toggleAnimation](options.duration);
                    break;
            };
        }
        var reLayout = function () {
            $(modalElement).css({
                height: '100%',
                width: $(document).width(),
            });

        }
        return {
            start: function () {
                createModal();
            },
            modal: function (disp) {
                modalShow(disp);
            },
            relayout: reLayout
        };
    };
})();