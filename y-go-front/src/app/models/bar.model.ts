import { PictureListModel } from './picture-list.model';
import { GeoModel } from './geo.model';
import { UserModel } from './user.model';

export class BarModel {
  id: string | undefined;
  name: string | undefined;
  adresse: string | undefined;
  description: string | undefined;
  telephone: string | undefined;
  note: number | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  pictureList:
    | PictureListModel
    | undefined
    | {
        pictureOne: string | undefined;
        pictureTwo: string | undefined;
        pictureThree: string | undefined;
        pictureFour: string | undefined;
      };
  geo:
    | GeoModel
    | undefined
    | {
        id: string | undefined;
        x: string | undefined;
        y: string | undefined;
      };
  createdBy: UserModel | undefined;
  particularities: ParticularityEnum[] | undefined;
}

export enum ParticularityEnum {
  AFTERWORK = `After Work`,
  HAPPYHOUR = `Happy Hour`,
  THEMEPARTY = `Theme Party`,
  COCKTAILBAR = `Cocktail Bar`,
  WINEBAR = `Bar à vin`,
  BEERBAR = `Bar à bière`,
  CONCERT = `Concert`,
  KARAOKE = `Karaoké`,
  PETFRIENDLY = `Bar à animaux`,
  TERRACE = `Terrasse`,
}
