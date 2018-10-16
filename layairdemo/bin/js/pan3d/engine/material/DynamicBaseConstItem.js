var Pan3d;
(function (Pan3d) {
    var DynamicBaseConstItem = (function () {
        function DynamicBaseConstItem() {
        }
        DynamicBaseConstItem.prototype.update = function (t) {
            if (t === void 0) { t = 0; }
            if (this.target) {
                this.target.setDynamic(this);
            }
        };
        Object.defineProperty(DynamicBaseConstItem.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        DynamicBaseConstItem.prototype.setTargetInfo = function ($target, $paramName, $type) {
            this.target = $target;
            this.paramName = $paramName;
            this.type = $type;
            if (this.target) {
                this.target.setDynamicOffset(this);
            }
            this.currentValue = new Array($type);
        };
        DynamicBaseConstItem.prototype.setCurrentVal = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            for (var i = 0; i < args.length; i++) {
                this.currentValue[i] = args[i];
            }
        };
        return DynamicBaseConstItem;
    }());
    Pan3d.DynamicBaseConstItem = DynamicBaseConstItem;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=DynamicBaseConstItem.js.map