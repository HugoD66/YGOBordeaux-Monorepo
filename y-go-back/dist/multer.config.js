"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
exports.multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: `./uploads`,
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + `-` + Math.round(Math.random() * 1e9);
            callback(null, uniqueSuffix + `-` + file.originalname);
        },
    }),
};
//# sourceMappingURL=multer.config.js.map