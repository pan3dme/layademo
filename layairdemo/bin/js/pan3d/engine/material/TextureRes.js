var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var TextureRes = (function (_super) {
        __extends(TextureRes, _super);
        function TextureRes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextureRes.prototype.destory = function () {
            Pan3d.Scene_data.context3D.deleteTexture(this.texture);
        };
        return TextureRes;
    }(Pan3d.ResCount));
    Pan3d.TextureRes = TextureRes;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=TextureRes.js.map