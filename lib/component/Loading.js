"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const lottie_web_1 = __importDefault(require("lottie-web"));
class Loading extends skynode_1.DomNode {
    constructor() {
        super(".loading");
        lottie_web_1.default.loadAnimation({
            container: this.domElement,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "data.json"
        });
    }
}
exports.default = Loading;
//# sourceMappingURL=Loading.js.map