"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanitizeGuard = void 0;
const common_1 = require("@nestjs/common");
const sanitizeHtml = require("sanitize-html");
let SanitizeGuard = exports.SanitizeGuard = class SanitizeGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const body = request.body;
        console.log(`Original message: ${body.message}`);
        if (body.message) {
            request.body.message = sanitizeHtml(body.message, {
                allowedTags: [],
                allowedAttributes: {},
            });
            console.log(`Sanitized message: ${request.body.message}`);
        }
        else {
            console.log(`No message to sanitize`);
        }
        return true;
    }
};
exports.SanitizeGuard = SanitizeGuard = __decorate([
    (0, common_1.Injectable)()
], SanitizeGuard);
//# sourceMappingURL=sanitize.guard.js.map