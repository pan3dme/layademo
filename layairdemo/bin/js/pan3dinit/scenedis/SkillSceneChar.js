var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenedis;
(function (scenedis) {
    var SkillSceneChar = (function (_super) {
        __extends(SkillSceneChar, _super);
        function SkillSceneChar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkillSceneChar.prototype.onMeshLoaded = function () {
            _super.prototype.onMeshLoaded.call(this);
            if (this.loadFinishFun) {
                this.loadFinishFun();
            }
        };
        SkillSceneChar.prototype.changeAction = function ($action) {
            this.curentAction = this._defaultAction;
            if (this.changeActionFun) {
                this.changeActionFun($action);
            }
        };
        SkillSceneChar.prototype.setWeaponByAvatar = function (avatar, $suffix) {
            if ($suffix === void 0) { $suffix = ""; }
        };
        return SkillSceneChar;
    }(Pan3d.SceneChar));
    scenedis.SkillSceneChar = SkillSceneChar;
})(scenedis || (scenedis = {}));
//# sourceMappingURL=SkillSceneChar.js.map