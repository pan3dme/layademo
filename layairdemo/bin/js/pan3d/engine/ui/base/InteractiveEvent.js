var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pan3d;
(function (Pan3d) {
    var InteractiveEvent = (function (_super) {
        __extends(InteractiveEvent, _super);
        function InteractiveEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return InteractiveEvent;
    }(Pan3d.BaseEvent));
    InteractiveEvent.Down = "down";
    InteractiveEvent.Up = "Up";
    InteractiveEvent.Move = "Move";
    InteractiveEvent.PinchStart = "PinchStart";
    InteractiveEvent.Pinch = "Pinch";
    Pan3d.InteractiveEvent = InteractiveEvent;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=InteractiveEvent.js.map