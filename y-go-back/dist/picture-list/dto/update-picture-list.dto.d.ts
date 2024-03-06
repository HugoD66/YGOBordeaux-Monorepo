import { CreatePictureListDto } from './create-picture-list.dto';
declare const UpdatePictureListDto_base: import("@nestjs/common").Type<Partial<CreatePictureListDto>>;
export declare class UpdatePictureListDto extends UpdatePictureListDto_base {
    pictures: string[];
}
export {};
