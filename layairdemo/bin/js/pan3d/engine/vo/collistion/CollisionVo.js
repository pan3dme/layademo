var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var CollisionVo = (function (_super) {
        __extends(CollisionVo, _super);
        function CollisionVo($x, $y, $z) {
            if ($x === void 0) { $x = 0; }
            if ($y === void 0) { $y = 0; }
            if ($z === void 0) { $z = 0; }
            return _super.call(this) || this;
        }
        return CollisionVo;
    }(Pan3d.Object3D));
    Pan3d.CollisionVo = CollisionVo;
    var CollisionItemVo = (function () {
        function CollisionItemVo() {
        }
        return CollisionItemVo;
    }());
    Pan3d.CollisionItemVo = CollisionItemVo;
    var CollisionType = (function () {
        function CollisionType() {
        }
        return CollisionType;
    }());
    CollisionType.Polygon = 0;
    CollisionType.BOX = 1;
    CollisionType.BALL = 2; //球体
    CollisionType.Cylinder = 3; //圆柱
    CollisionType.Cone = 4; //圆锥
    Pan3d.CollisionType = CollisionType;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=CollisionVo.js.map