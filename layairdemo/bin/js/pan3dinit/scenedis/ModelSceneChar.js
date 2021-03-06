var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenedis;
(function (scenedis) {
    var ModelSceneChar = (function (_super) {
        __extends(ModelSceneChar, _super);
        function ModelSceneChar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ModelSceneChar.prototype.setWeaponByAvatar = function (avatar, $suffix) {
            if ($suffix === void 0) { $suffix = ""; }
            this.addPart(Pan3d.SceneChar.WEAPON_PART, Pan3d.SceneChar.WEAPON_DEFAULT_SLOT, this.getSceneCharWeaponUrl(avatar, $suffix));
        };
        ModelSceneChar.prototype.setWingByID = function ($wingId) {
            if (!this._wingDisplay) {
                this._wingDisplay = new Pan3d.SceneBaseChar();
            }
            this._wingDisplay.setRoleUrl(getRoleUrl($wingId));
            this._wingDisplay.setBind(this, Pan3d.SceneChar.WING_SLOT);
            Pan3d.SceneManager.getInstance().addMovieDisplay(this._wingDisplay);
        };
        ModelSceneChar.prototype.setMountById = function ($mountId) {
            if (!this.mountChar) {
                this.mountChar = new Pan3d.MountChar();
            }
            this.mountChar.setRoleUrl(getRoleUrl($mountId));
            this.setBind(this.mountChar, Pan3d.SceneChar.MOUNT_SLOT);
            Pan3d.SceneManager.getInstance().addMovieDisplay(this.mountChar);
            this.isMount = true;
        };
        return ModelSceneChar;
    }(Pan3d.SceneChar));
    scenedis.ModelSceneChar = ModelSceneChar;
})(scenedis || (scenedis = {}));
//# sourceMappingURL=ModelSceneChar.js.map