var Pan3d;
(function (Pan3d) {
    var PathManager = (function () {
        function PathManager() {
        }
        PathManager.reg = function (types, cls) {
            this.dic[types] = cls;
        };
        PathManager.getNewPath = function (types) {
            var cls = this.dic[types];
            return new cls();
        };
        PathManager.init = function () {
            this.dic[0] = Pan3d.SkillPath;
            this.dic[1] = Pan3d.SkillSinPath;
            this.dic[2] = Pan3d.SkillCosPath;
        };
        return PathManager;
    }());
    PathManager.dic = new Object;
    Pan3d.PathManager = PathManager;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=PathManager.js.map