var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var UIListRenderComponent = (function (_super) {
        __extends(UIListRenderComponent, _super);
        function UIListRenderComponent() {
            return _super.call(this) || this;
        }
        UIListRenderComponent.prototype.createList = function () {
            var list = new Pan3d.List;
            list.uiRender = this;
            return list;
        };
        UIListRenderComponent.prototype.createGridList = function () {
            var list = new Pan3d.GridList;
            list.uiRender = this;
            return list;
        };
        return UIListRenderComponent;
    }(Pan3d.UIRenderComponent));
    Pan3d.UIListRenderComponent = UIListRenderComponent;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=UIListRenderComponent.js.map