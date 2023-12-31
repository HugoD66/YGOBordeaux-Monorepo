import {PictureListModel} from "./picture-list.model";
import {GeoModel} from "./geo.model";

export class BarModel {
  id: string | undefined;
  name: string | undefined;
  adresse: string | undefined;
  description: string | undefined;
  telephone: string | undefined;
  note: number | undefined;
  //picture: string | undefined;
  pictureList: PictureListModel | undefined |
    {
      pictureOne: string | undefined;
      pictureTwo: string | undefined;
      pictureThree: string | undefined;
      pictureFour: string | undefined;
    };
  geo: GeoModel | undefined |
    {
      id: string | undefined;
      x: string | undefined;
      y: string | undefined;
    };
}
