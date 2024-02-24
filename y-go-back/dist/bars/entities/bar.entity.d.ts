import { PictureList } from "../../picture-list/entities/picture-list.entity";
import { Geo } from "../../geo/entities/geo.entity";
import { User } from "../../users/entities/user.entity";
import { UserBarRating } from "../../user-bar-rating/entities/user-bar-rating.entity";
import { ParticularityEnum } from "./types/particularity.enum";
import { Post } from "../../post/entities/post.entity";
export declare class Bar {
    id: string;
    name: string;
    adresse: string;
    description?: string;
    telephone: string;
    note?: number;
    createdAt: Date;
    updatedAt?: Date | null;
    particularities: ParticularityEnum[];
    pictureList: PictureList | null;
    geo: Geo | null;
    createdBy: User;
    userBarRatings?: UserBarRating[] | null;
    posts?: Post[] | null;
}
