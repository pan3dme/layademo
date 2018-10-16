var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var UIVirtualContainer = (function (_super) {
        __extends(UIVirtualContainer, _super);
        function UIVirtualContainer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.visible = true;
            return _this;
        }
        return UIVirtualContainer;
    }(Pan3d.UIConatiner));
    Pan3d.UIVirtualContainer = UIVirtualContainer;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=UIVirtualContainer.js.map