var Pan3d;
(function (Pan3d) {
    var ModuleEventManager = (function () {
        function ModuleEventManager() {
        }
        ModuleEventManager.addEvents = function (ary, $fun, $thisObj) {
            for (var i = 0; i < ary.length; i++) {
                ModuleEventManager._instance.addEventListener(ary[i].type, $fun, $thisObj);
            }
        };
        ModuleEventManager.dispatchEvent = function ($event) {
            ModuleEventManager._instance.dispatchEvent($event);
        };
        return ModuleEventManager;
    }());
    ModuleEventManager._instance = new Pan3d.EventDispatcher();
    Pan3d.ModuleEventManager = ModuleEventManager;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=ModuleEventManager.js.map