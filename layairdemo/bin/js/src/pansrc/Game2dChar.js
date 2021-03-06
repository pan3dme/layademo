var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game2dChar = (function (_super) {
    __extends(Game2dChar, _super);
    function Game2dChar() {
        return _super.call(this) || this;
    }
    Game2dChar.prototype.moveTopos = function (v) {
        this.moveToPosV2d = v;
        var $nmr = this.pixelPos.sub(this.moveToPosV2d);
        this.pRotationY = 180 - Math.atan2($nmr.x, $nmr.y) * 180 / Math.PI;
    };
    Game2dChar.prototype.set2dPos = function ($x, $y) {
        _super.prototype.set2dPos.call(this, $x, $y);
        this.pixelPos = new Pan3d.Vector2D($x, $y);
    };
    Game2dChar.prototype.updateFrame = function (t) {
        if (this.moveToPosV2d) {
            var $dis = Pan3d.Vector2D.distance(this.pixelPos, this.moveToPosV2d);
            if ($dis > 10) {
                var $nmr = this.pixelPos.sub(this.moveToPosV2d);
                $nmr.normalize();
                $nmr.scaleBy(3);
                this.pixelPos.x += $nmr.x;
                this.pixelPos.y += $nmr.y;
                _super.prototype.set2dPos.call(this, this.pixelPos.x, this.pixelPos.y);
                this.play(Pan3d.CharAction.WALK);
            }
            else {
                this.play(Pan3d.CharAction.STANAD);
            }
        }
        _super.prototype.updateFrame.call(this, t);
        var dicAry = this._partDic["mesh"];
        for (var i = 0; dicAry && i < dicAry.length; i++) {
            if (dicAry[i].scaleX != this.scale) {
                dicAry[i].scaleX = this.scale;
                dicAry[i].scaleY = this.scale;
                dicAry[i].scaleZ = this.scale;
            }
        }
    };
    return Game2dChar;
}(layapan.LayaSceneChar));
//# sourceMappingURL=Game2dChar.js.map