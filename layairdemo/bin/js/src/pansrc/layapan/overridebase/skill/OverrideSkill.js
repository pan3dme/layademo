var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layapan;
(function (layapan) {
    var SkillType = Pan3d.SkillType;
    var SkillVo = Pan3d.SkillVo;
    var OverrideSkill = (function (_super) {
        __extends(OverrideSkill, _super);
        function OverrideSkill($skillManager) {
            if ($skillManager === void 0) { $skillManager = null; }
            var _this = _super.call(this) || this;
            _this.baseName = "OverrideSkill";
            _this.skillManager = $skillManager;
            return _this;
        }
        OverrideSkill.prototype.skillComplete = function () {
            this.skillManager.removeSkill(this);
            this.isDeath = true;
            if (this.completeFun) {
                this.completeFun();
            }
            this.idleTime = 0;
        };
        OverrideSkill.prototype.setData = function ($data, $skillData) {
            if (this.hasDestory) {
                return;
            }
            this.skillVo = new SkillVo();
            this.skillVo.setData($data);
            this.setKeyAry();
            this.trajectoryAry = new Array;
            this._skillData = $skillData;
        };
        OverrideSkill.prototype.setKeyAry = function () {
            var _this = this;
            this.keyAry = new Array;
            if (this.skillVo.types == SkillType.FixEffect) {
                for (var i = 0; i < this.skillVo.keyAry.length; i++) {
                    var keySkill = new layapan.OverrideSkillFixEffect(this);
                    keySkill.setInfo(this.skillVo.keyAry[i]);
                    keySkill.removeCallFun = function ($key) { _this.removeKey($key); };
                    keySkill.active = this.active;
                    this.keyAry.push(keySkill);
                }
            }
            else if (this.skillVo.types == SkillType.TrajectoryDynamicTarget || this.skillVo.types == SkillType.TrajectoryDynamicPoint) {
                for (var i = 0; i < this.skillVo.keyAry.length; i++) {
                    var trajectory;
                    var tkv = (this.skillVo.keyAry[i]);
                    if (tkv.multype == 1) {
                    }
                    else {
                        trajectory = new layapan.OverrideSkillTrajectory();
                        trajectory.skill = this;
                    }
                    trajectory.setInfo(this.skillVo.keyAry[i]);
                    this.keyAry.push(trajectory);
                }
            }
        };
        return OverrideSkill;
    }(Pan3d.Skill));
    layapan.OverrideSkill = OverrideSkill;
})(layapan || (layapan = {}));
//# sourceMappingURL=OverrideSkill.js.map