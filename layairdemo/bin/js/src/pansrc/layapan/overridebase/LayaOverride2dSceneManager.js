var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layapan;
(function (layapan) {
    var LayaOverride2dSceneManager = (function (_super) {
        __extends(LayaOverride2dSceneManager, _super);
        function LayaOverride2dSceneManager() {
            var _this = _super.call(this) || this;
            _this.particleManager = new layapan.LayaOverride2dParticleManager();
            _this.shadowManager = new layapan.LayaOverrideShadowManager();
            _this.skillManager = new layapan.LayaOverride2dSkillManager(_this);
            _this.bloodManager = new Pan3d.BloodManager();
            _this.groupDataManager = new layapan.LayaOverrideGroupDataManager();
            console.log("创建场景=>", LayaOverride2dSceneManager.sceneNum++);
            return _this;
        }
        LayaOverride2dSceneManager.initConfig = function () {
            Pan3d.SceneManager._instance = new LayaOverride2dSceneManager;
        };
        LayaOverride2dSceneManager.prototype.update = function () {
            Pan3d.MathClass.getCamView(Pan3d.Scene_data.cam3D, Pan3d.Scene_data.focus3D); //一定要角色帧渲染后再重置镜头矩阵
            scene2d.GroundModel.getInstance().update();
            this.upFrame();
        };
        LayaOverride2dSceneManager.prototype.changeBloodManager = function ($bloodManager) {
            this.bloodManager = $bloodManager;
        };
        LayaOverride2dSceneManager.prototype.addMovieDisplay = function ($display) {
            $display._scene = this;
            this._displayRoleList.push($display);
            $display.addStage();
        };
        LayaOverride2dSceneManager.prototype.loadSceneConfigCom = function (obj) {
            //保持原来的角度
            var $rotationY = Pan3d.Scene_data.focus3D.rotationY;
            _super.prototype.loadSceneConfigCom.call(this, obj);
            Pan3d.Scene_data.focus3D.rotationY = $rotationY;
        };
        LayaOverride2dSceneManager.prototype.playLyf = function ($url, $pos, $r) {
            var _this = this;
            if ($r === void 0) { $r = 0; }
            this.groupDataManager.scene = this;
            this.groupDataManager.getGroupData(Pan3d.Scene_data.fileRoot + $url, function (groupRes) {
                for (var i = 0; i < groupRes.dataAry.length; i++) {
                    var item = groupRes.dataAry[i];
                    if (item.types == Pan3d.BaseRes.SCENE_PARTICLE_TYPE) {
                        var $particle = _this.particleManager.getParticleByte(Pan3d.Scene_data.fileRoot + item.particleUrl);
                        $particle.x = $pos.x;
                        $particle.y = $pos.y;
                        $particle.z = $pos.z;
                        $particle.rotationY = $r;
                        _this.particleManager.addParticle($particle);
                        $particle.addEventListener(Pan3d.BaseEvent.COMPLETE, _this.onPlayCom, _this);
                    }
                    else {
                        console.log("播放的不是单纯特效");
                    }
                }
            });
        };
        LayaOverride2dSceneManager.prototype.charPlaySkill = function ($char, $skillfile) {
            if (!$char._scene.ready) {
                return;
            }
            var $skill = this.skillManager.getSkill(getSkillUrl($skillfile), "skill_01");
            if (!$skill.keyAry) {
                return;
            }
            if ($skill) {
                $skill.reset();
                $skill.isDeath = false;
            }
            $skill.configFixEffect($char);
            this.skillManager.playSkill($skill);
        };
        LayaOverride2dSceneManager.prototype.onPlayCom = function (value) {
            this.particleManager.removeParticle((value.target));
        };
        LayaOverride2dSceneManager.prototype.upFrame = function () {
            Pan3d.Scene_data.context3D._contextSetTest.clear();
            if (isNaN(this._time)) {
                this._time = Pan3d.TimeUtil.getTimer();
            }
            this.updateMovieFrame();
            if (this._ready) {
                this.particleManager.updateTime();
                this.skillManager.update();
                if (this.render) {
                    Pan3d.Scene_data.context3D.setWriteDepth(true);
                    Pan3d.Scene_data.context3D.setDepthTest(true);
                    this.updateStaticDiplay();
                    this.updateSpriteDisplay();
                    this.updateMovieDisplay();
                    this.shadowManager.update();
                    Pan3d.Scene_data.context3D.setWriteDepth(false);
                    this.particleManager.update();
                    this.bloodManager.update();
                    Pan3d.Scene_data.context3D.setBlendParticleFactors(0);
                    Pan3d.Scene_data.context3D.setWriteDepth(true);
                    Pan3d.Scene_data.context3D.setWriteDepth(false);
                }
                Pan3d.Scene_data.context3D.setDepthTest(false);
                Pan3d.UIManager.getInstance().update();
                this.cameraMatrix = Pan3d.Scene_data.cam3D.cameraMatrix.clone();
                this.viewMatrx3D = Pan3d.Scene_data.viewMatrx3D.clone();
            }
        };
        return LayaOverride2dSceneManager;
    }(scene3d.OverrideSceneManager));
    LayaOverride2dSceneManager.sceneNum = 0;
    layapan.LayaOverride2dSceneManager = LayaOverride2dSceneManager;
})(layapan || (layapan = {}));
//# sourceMappingURL=LayaOverride2dSceneManager.js.map