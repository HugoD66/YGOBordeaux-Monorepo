import { PictureList } from "../../picture-list/entities/picture-list.entity";
import { Geo } from "../../geo/entities/geo.entity";
import { User } from "../../users/entities/user.entity";
export declare class Bar {
    id: string;
    name: string;
    adresse: string;
    description?: string;
    telephone: string;
    note?: number;
    createdAt: Date;
    updatedAt?: Date | null;
    pictureList: PictureList | null;
    geo: Geo | null;
    createdBy: User;
}
