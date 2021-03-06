var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var MountChar = (function (_super) {
        __extends(MountChar, _super);
        function MountChar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MountChar.prototype.setData = function ($rank, $iid) {
            if ($iid > 0) {
                var obj = {};
                var avatar = obj.mountID;
                this.setAvatar(avatar);
                return;
            }
            if ($rank > 0) {
                var obj = {};
                var avatar = obj.mountID;
                this.setAvatar(avatar);
            }
        };
        return MountChar;
    }(Pan3d.SceneBaseChar));
    Pan3d.MountChar = MountChar;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=MountChar.js.map