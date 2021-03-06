var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Button.prototype.interactiveEvent = function (e) {
            //if (e.type == InteractiveEvent.Down) {
            //    if (this.testPoint(e.x, e.y)) {
            //        this._state = 1;
            //    }
            //} else if (e.type == InteractiveEvent.Up){
            //    if (this.testPoint(e.x, e.y)) {
            //        this._state = 0;
            //    }
            //}
            return _super.prototype.interactiveEvent.call(this, e);
        };
        return Button;
    }(Pan3d.BaseButton));
    Pan3d.Button = Button;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=Button.js.map