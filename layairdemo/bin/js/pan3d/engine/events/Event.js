var Pan3d;
(function (Pan3d) {
    var BaseEvent = (function () {
        function BaseEvent($type) {
            this.type = $type;
        }
        return BaseEvent;
    }());
    BaseEvent.COMPLETE = "complete";
    Pan3d.BaseEvent = BaseEvent;
})(Pan3d || (Pan3d = {}));
//# sourceMappingURL=Event.js.map