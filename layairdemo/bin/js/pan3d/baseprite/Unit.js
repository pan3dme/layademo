var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var Unit = (function (_super) {
        __extends(Unit, _super);
        function Unit() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = new Array;
            _this.isMain = false;
            _this.originalRotation = 0;
            return _this;
        }
        return Unit;
    }(Pan3d.GuidObject));
    Pan3d.Unit = Unit;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=Unit.js.map