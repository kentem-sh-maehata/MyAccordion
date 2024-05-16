{
    var dts_1 = document.querySelectorAll('dt');
    dts_1.forEach(function (dt) {
        dt.addEventListener('click', function () {
            var parent = dt.parentNode;
            if (parent instanceof HTMLElement)
                parent.classList.toggle('appear');
            dts_1.forEach(function (el) {
                var _a;
                var elParent = dt.parentNode;
                if (dt !== el)
                    (_a = el === null || el === void 0 ? void 0 : el.parentNode) === null || _a === void 0 ? void 0 : _a.classList.remove('appear');
            });
        });
    });
}
