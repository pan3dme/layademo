var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var UIRectangle = (function (_super) {
        __extends(UIRectangle, _super);
        function UIRectangle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pixelWitdh = 1;
            _this.pixelHeight = 1;
            _this.pixelX = 0;
            _this.pixelY = 0;
            _this.cellX = 0;
            _this.cellY = 0;
            _this.type = 0;
            return _this;
        }
        return UIRectangle;
    }(Pan3d.Rectangle));
    Pan3d.UIRectangle = UIRectangle;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=UIRectangle.js.map