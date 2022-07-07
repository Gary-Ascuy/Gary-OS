"use strict";
exports.__esModule = true;
exports.getDefafaultBox = void 0;
var react_1 = require("react");
var react_draggable_1 = require("react-draggable");
var WindowHeader_1 = require("./WindowHeader");
var Window_module_css_1 = require("./Window.module.css");
var re_resizable_1 = require("re-resizable");
function getDefafaultBox() {
    var random = Math.ceil(Math.random() * 100);
    return { x: 100 + random, y: 100 + random, width: 750, height: 400 };
}
exports.getDefafaultBox = getDefafaultBox;
function WindowProps(_a) {
    var title = _a.title, box = _a.box, children = _a.children;
    var _b = react_1.useMemo(function () { return box || getDefafaultBox(); }, [box]), x = _b.x, y = _b.y, width = _b.width, height = _b.height;
    return (React.createElement(react_draggable_1["default"], { handle: "section.title-dragable" },
        React.createElement(re_resizable_1.Resizable, { style: { border: '10px solid red' }, defaultSize: { x: 10, y: y } },
            React.createElement("section", { style: { left: 0, top: 0, width: '100%', height: '100%' }, className: Window_module_css_1["default"].window },
                React.createElement(WindowHeader_1["default"], { title: title }),
                React.createElement("section", { className: Window_module_css_1["default"].body }, children)))));
}
exports["default"] = WindowProps;
