var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var GroupDataManager = (function (_super) {
        __extends(GroupDataManager, _super);
        function GroupDataManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._loadDic = new Object;
            return _this;
        }
        GroupDataManager.getInstance = function () {
            if (!this._instance) {
                this._instance = new GroupDataManager();
            }
            return this._instance;
        };
        GroupDataManager.prototype.getGroupData = function ($url, $fun) {
            var _this = this;
            if (this._dic[$url]) {
                var gr = this._dic[$url];
                gr.useNum++;
                $fun(gr);
                return;
            }
            if (this._loadDic[$url]) {
                this._loadDic[$url].push($fun);
                return;
            }
            this._loadDic[$url] = new Array;
            this._loadDic[$url].push($fun);
            var group = new Pan3d.GroupRes();
            group.load($url, function () {
                var ary = _this._loadDic[$url];
                for (var i = 0; i < ary.length; i++) {
                    var fun = ary[i];
                    fun(group);
                }
                _this._dic[$url] = group;
                delete _this._loadDic[$url];
                group.initReg();
            });
        };
        return GroupDataManager;
    }(Pan3d.ResGC));
    Pan3d.GroupDataManager = GroupDataManager;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=GroupDataManager.js.map