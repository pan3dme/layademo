var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var SkillEffect = (function (_super) {
        __extends(SkillEffect, _super);
        function SkillEffect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkillEffect.prototype.addToRender = function () {
            _super.prototype.addToRender.call(this);
            this.particle.addEventListener(Pan3d.BaseEvent.COMPLETE, this.onPlayCom, this);
        };
        SkillEffect.prototype.onPlayCom = function (event) {
            if (event === void 0) { event = null; }
            this.particle.removeEventListener(Pan3d.BaseEvent.COMPLETE, this.onPlayCom, this);
            Pan3d.ParticleManager.getInstance().removeParticle(this.particle);
            this.removeCallFun(this);
        };
        return SkillEffect;
    }(Pan3d.SkillKey));
    Pan3d.SkillEffect = SkillEffect;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=SkillEffect.js.map