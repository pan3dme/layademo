var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layapan;
(function (layapan) {
    var ShadowManager = Pan3d.ShadowManager;
    var LayaOverrideShadowManager = (function (_super) {
        __extends(LayaOverrideShadowManager, _super);
        function LayaOverrideShadowManager() {
            return _super.call(this) || this;
        }
        return LayaOverrideShadowManager;
    }(ShadowManager));
    layapan.LayaOverrideShadowManager = LayaOverrideShadowManager;
})(layapan || (layapan = {}));
//# sourceMappingURL=LayaOverrideShadowManager.js.map