/// <reference types="multer" />
import { PictureListService } from './picture-list.service';
import { CreatePictureListDto } from './dto/create-picture-list.dto';
import { UpdatePictureListDto } from './dto/update-picture-list.dto';
import { ResponsePictureListDto } from "./dto/response-picture-list.dto";
export declare class PictureListController {
    private readonly pictureListService;
    constructor(pictureListService: PictureListService);
    create(createPictureListDto: CreatePictureListDto): Promise<CreatePictureListDto>;
    uploadFiles(pictureListId: string, files: Array<Express.Multer.File>): Promise<{
        message: string;
        filePaths: string[];
    }>;
    findOne(id: string): Promise<ResponsePictureListDto>;
    findAll(): Promise<ResponsePictureListDto[]>;
    update(id: string, updatePictureListDto: UpdatePictureListDto): Promise<ResponsePictureListDto>;
    remove(id: string): Promise<void>;
}
