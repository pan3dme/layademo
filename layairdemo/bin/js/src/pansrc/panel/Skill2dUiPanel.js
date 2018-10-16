var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Skill2dUiPanel = (function (_super) {
    __extends(Skill2dUiPanel, _super);
    function Skill2dUiPanel() {
        var _this = _super.call(this) || this;
        _this.ape = new BaseWinPanel();
        _this.addChild(_this.ape);
        var $imag = new Laya.Image(Pan3d.Scene_data.fileRoot + "2dbg.jpg");
        $imag.x = 20;
        $imag.y = 30;
        _this.ape.addChild($imag);
        _this.ape.pos(150, 150);
        _this.layaSceneLevel = new BaseLaya3dSprite();
        _this.addChild(_this.layaSceneLevel);
        _this.uiLayaSceneChar = _this.addModelChar();
        _this.uiLayaSceneChar.nameEnable = true;
        _this.uiLayaSceneChar.bloodEnable = true;
        _this.uiLayaSceneChar.set2dPos(200, 200);
        _this.ape.on(Pan3d.MouseType.MouseDown, _this, _this.onStartDrag);
        _this.loadSkill();
        return _this;
    }
    Skill2dUiPanel.prototype.loadSkill = function () {
        this.layaSceneLevel.scene.skillManager.preLoadSkill(getSkillUrl("erchijinen004"));
    };
    Skill2dUiPanel.prototype.render = function (context, x, y) {
        _super.prototype.render.call(this, context, x, y);
        this.layaSceneLevel.x = this.ape.x;
        this.layaSceneLevel.y = this.ape.y;
        //  this.uiLayaSceneChar.set2dPos(this.ape.x + 200, this.ape.y + 200)
    };
    Skill2dUiPanel.prototype.onStartDrag = function (e) {
        //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
        this.uiLayaSceneChar.rotationY = random(360);
        this.layaSceneLevel.scene.charPlaySkill(this.uiLayaSceneChar, "erchijinen004");
        //  this.ape.showJumpText(this.layaSceneLevel.scene, new Pan3d.Vector3D(this.uiLayaSceneChar.px, this.uiLayaSceneChar.py, this.uiLayaSceneChar.pz))
    };
    Skill2dUiPanel.prototype.addModelChar = function () {
        var $baseChar = new layapan.LayaSceneChar();
        this.layaSceneLevel.scene.addMovieDisplay($baseChar);
        $baseChar.setRoleUrl(getRoleUrl("erchiyuan004"));
        return $baseChar;
    };
    return Skill2dUiPanel;
}(Laya.Sprite));
//# sourceMappingURL=Skill2dUiPanel.js.map