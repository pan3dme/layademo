var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var Display3DModelObjParticle = (function (_super) {
        __extends(Display3DModelObjParticle, _super);
        function Display3DModelObjParticle() {
            return _super.call(this) || this;
        }
        Display3DModelObjParticle.prototype.update = function () {
            if (this._depthMode) {
                Pan3d.Scene_data.context3D.setDepthTest(true);
            }
            _super.prototype.update.call(this);
            if (this._depthMode) {
                Pan3d.Scene_data.context3D.setDepthTest(false);
            }
        };
        return Display3DModelObjParticle;
    }(Pan3d.Display3DModelPartilce));
    Pan3d.Display3DModelObjParticle = Display3DModelObjParticle;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=Display3DModelObjParticle.js.map