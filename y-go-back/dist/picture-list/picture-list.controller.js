"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureListController = void 0;
const common_1 = require("@nestjs/common");
const picture_list_service_1 = require("./picture-list.service");
const create_picture_list_dto_1 = require("./dto/create-picture-list.dto");
const update_picture_list_dto_1 = require("./dto/update-picture-list.dto");
const public_decorator_1 = require("../users/auth/public.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const multer_config_1 = require("../multer.config");
const FileSizeValidationPipe_1 = require("../pipe/FileSizeValidationPipe");
let PictureListController = exports.PictureListController = class PictureListController {
    constructor(pictureListService) {
        this.pictureListService = pictureListService;
    }
    async create(createPictureListDto) {
        const barList = await this.pictureListService.create(createPictureListDto);
        return barList;
    }
    async uploadFiles(pictureListId, files) {
        const filePaths = files.map(file => file.path);
        await this.pictureListService.update(pictureListId, { pictures: filePaths });
        return {
            message: 'Pictures uploaded successfully',
            filePaths
        };
    }
    async findOne(id) {
        const pictureListSelected = await this.pictureListService.findOne(id);
        if (!pictureListSelected) {
            throw new common_1.NotFoundException(`PictureList with id ${id} not found`);
        }
        return pictureListSelected;
    }
    async findAll() {
        const pictureList = await this.pictureListService.findAll();
        if (!pictureList) {
            throw new common_1.NotFoundException(`PictureList not found`);
        }
        return pictureList;
    }
    async update(id, updatePictureListDto) {
        const pictureListUpdated = await this.pictureListService.update(id, updatePictureListDto);
        return pictureListUpdated;
    }
    async remove(id) {
        const pictureList = await this.pictureListService.findOne(id);
        if (!pictureList) {
            throw new common_1.NotFoundException(`PictureList with id ${id} not found`);
        }
        await this.pictureListService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_picture_list_dto_1.CreatePictureListDto]),
    __metadata("design:returntype", Promise)
], PictureListController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('upload-files/:pictureListId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 4, multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('pictureListId')),
    __param(1, (0, common_1.UploadedFiles)(new FileSizeValidationPipe_1.FileSizeValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], PictureListController.prototype, "uploadFiles", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PictureListController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PictureListController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_picture_list_dto_1.UpdatePictureListDto]),
    __metadata("design:returntype", Promise)
], PictureListController.prototype, "update", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PictureListController.prototype, "remove", null);
exports.PictureListController = PictureListController = __decorate([
    (0, common_1.Controller)('picture-list'),
    __metadata("design:paramtypes", [picture_list_service_1.PictureListService])
], PictureListController);
//# sourceMappingURL=picture-list.controller.js.map