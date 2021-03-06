var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scene2d;
(function (scene2d) {
    var Override2dSceneManager = (function (_super) {
        __extends(Override2dSceneManager, _super);
        function Override2dSceneManager() {
            return _super.call(this) || this;
        }
        Override2dSceneManager.initConfig = function () {
            Pan3d.SceneManager._instance = new Override2dSceneManager;
        };
        Override2dSceneManager.prototype.update = function () {
            Pan3d.MathClass.getCamView(Pan3d.Scene_data.cam3D, Pan3d.Scene_data.focus3D); //一定要角色帧渲染后再重置镜头矩阵
            Pan3d.Scene_data.context3D._contextSetTest.clear();
            if (isNaN(this._time)) {
                this._time = Pan3d.TimeUtil.getTimer();
            }
            scene2d.GroundModel.getInstance().update();
            this.updateMovieFrame();
            if (this._ready) {
                Pan3d.ParticleManager.getInstance().updateTime();
                Pan3d.SkillManager.getInstance().update();
                if (this.render) {
                    Pan3d.Scene_data.context3D.setWriteDepth(true);
                    Pan3d.Scene_data.context3D.setDepthTest(true);
                    this.updateStaticDiplay();
                    this.updateSpriteDisplay();
                    this.updateMovieDisplay();
                    Pan3d.Scene_data.context3D.setWriteDepth(false);
                    Pan3d.ParticleManager.getInstance().update();
                    Pan3d.BloodManager.getInstance().update();
                    Pan3d.Scene_data.context3D.setBlendParticleFactors(0);
                    Pan3d.Scene_data.context3D.setWriteDepth(true);
                    Pan3d.Scene_data.context3D.setWriteDepth(false);
                }
                Pan3d.Scene_data.context3D.setDepthTest(false);
                Pan3d.UIManager.getInstance().update();
            }
        };
        return Override2dSceneManager;
    }(scene3d.OverrideSceneManager));
    scene2d.Override2dSceneManager = Override2dSceneManager;
})(scene2d || (scene2d = {}));
//# sourceMappingURL=Override2dSceneManager.js.map