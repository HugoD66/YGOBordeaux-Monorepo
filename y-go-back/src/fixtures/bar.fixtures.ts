import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bar } from '../bars/entities/bar.entity';
import { BarsService } from '../bars/bars.service';
import { PictureListService } from '../picture-list/picture-list.service';
import { GeoService } from '../geo/geo.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class BarFixtures {
  constructor(
    @InjectRepository(Bar)
    private barRepository: Repository<Bar>,

    private barsService: BarsService,

    private readonly pictureListService: PictureListService,
    private readonly geoService: GeoService,

    private readonly usersService: UsersService,
  ) {}

  async seedBars(): Promise<void> {
    const bars = [
      {
        name: `Bar Mystique`,
        adresse: `123 Rue Imaginaire`,
        description: `Un bar mystérieux avec une ambiance unique, parfaite pour les soirées mystérieuses et des rencontres inoubliables. Lieu idéal pour les amateurs d'énigmes et de cocktails étonnants.`,
        telephone: `0123456789`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar10.png`,
          pictureTwo: `./uploads/bar/bar11.png`,
          pictureThree: `./uploads/bar/bar12.png`,
          pictureFour: `./uploads/bar/bar13.png`,
        },
        geo: {
          x: `-0.5882056333352637`,
          y: `44.83419896863501`,
        },
      },
      {
        name: `Bar Lumineux`,
        adresse: `456 Avenue Lumière`,
        description: `Bar lumineux et animé, idéal pour les soirées animées et vibrantes. Avec son ambiance chaleureuse et accueillante, c'est le lieu parfait pour se détendre après une longue journée.`,
        telephone: `0123456790`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar20.png`,
          pictureTwo: `./uploads/bar/bar21.png`,
          pictureThree: `./uploads/bar/bar22.png`,
          pictureFour: `./uploads/bar/bar23.png`,
        },
        geo: {
          x: `-0.5516417600443617`,
          y: `44.841867679515104`,
        },
      },
      {
        name: `Bar de la Plage`,
        adresse: `789 Boulevard Océan`,
        description: `Bar en bord de mer avec une vue magnifique sur l'océan, offrant une expérience inégalée. Savourez des cocktails rafraîchissants au son des vagues et admirez le coucher de soleil.`,
        telephone: `0123456791`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar30.png`,
          pictureTwo: `./uploads/bar/bar31.png`,
          pictureThree: `./uploads/bar/bar32.png`,
          pictureFour: `./uploads/bar/bar33.png`,
        },
        geo: {
          x: `-0.5554183103363926`,
          y: `44.847709821806035`,
        },
      },
      {
        name: `Bar Historique`,
        adresse: `101 Rue du Passé`,
        description: `Bar avec une décoration historique et élégante, transportant les visiteurs dans une autre époque. Parfait pour ceux qui apprécient l'histoire et une atmosphère classique, avec une sélection de boissons vintage.`,
        telephone: `0123456792`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar40.png`,
          pictureTwo: `./uploads/bar/bar41.png`,
          pictureThree: `./uploads/bar/bar42.png`,
          pictureFour: `./uploads/bar/bar43.png`,
        },
        geo: {
          x: `-0.5770476438337653`,
          y: `44.84138080758058`,
        },
      },
      {
        name: `Bar Élégant`,
        adresse: `202 Avenue Chic`,
        description: `Un bar élégant pour des soirées sophistiquées, où le luxe et le raffinement se rencontrent. Idéal pour les occasions spéciales, avec un service exceptionnel et une liste de vins et de champagnes impressionnante.`,
        telephone: `0123456793`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar50.png`,
          pictureTwo: `./uploads/bar/bar51.png`,
          pictureThree: `./uploads/bar/bar52.png`,
          pictureFour: `./uploads/bar/bar53.png`,
        },
        geo: {
          x: `-0.5597098447609596`,
          y: `44.82044142218743`,
        },
      },
      {
        name: `Bar du Centre`,
        adresse: `303 Rue Centrale`,
        description: `Bar convivial au cœur de la ville, où vous pouvez rencontrer des gens de tous horizons. Avec son ambiance décontractée et sa grande variété de boissons, c'est l'endroit idéal pour se relaxer en bonne compagnie.`,
        telephone: `0123456794`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar60.png`,
          pictureTwo: `./uploads/bar/bar61.png`,
          pictureThree: `./uploads/bar/bar62.png`,
          pictureFour: `./uploads/bar/bar63.png`,
        },
        geo: {
          x: `-0.5761893369476638`,
          y: `44.82884243824668`,
        },
      },
      {
        name: `Bar Artistique`,
        adresse: `404 Rue Créative`,
        description: `Bar décoré par des artistes locaux, très inspirant pour ceux qui cherchent la créativité. Chaque coin du bar est une œuvre d'art, offrant une expérience unique aux amateurs d'art et de culture.`,
        telephone: `0123456795`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar70.png`,
          pictureTwo: `./uploads/bar/bar71.png`,
          pictureThree: `./uploads/bar/bar72.png`,
          pictureFour: `./uploads/bar/bar73.png`,
        },
        geo: {
          x: `-0.5873473264506401`,
          y: `44.841867679515104`,
        },
      },
      {
        name: `Bar du Parc`,
        adresse: `505 Allée Verte`,
        description: `Bar paisible à côté d'un parc, parfait pour se détendre dans un cadre naturel. Profitez d'un moment de tranquillité loin de l'agitation de la ville, avec des boissons fraîches et des snacks sains.`,
        telephone: `0123456796`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar80.png`,
          pictureTwo: `./uploads/bar/bar81.png`,
          pictureThree: `./uploads/bar/bar82.png`,
          pictureFour: `./uploads/bar/bar83.png`,
        },
        geo: {
          x: `-0.5820258237654343`,
          y: `44.8537947566748`,
        },
      },
      {
        name: `Bar Sportif`,
        adresse: `606 Rue du Match`,
        description: `Bar idéal pour regarder les événements sportifs dans une ambiance électrique. Équipé de grands écrans et d'un système sonore de qualité, c'est le lieu de rendez-vous des fans de sport pour partager leur passion.`,
        telephone: `0123456797`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar90.png`,
          pictureTwo: `./uploads/bar/bar91.png`,
          pictureThree: `./uploads/bar/bar92.png`,
          pictureFour: `./uploads/bar/bar93.png`,
        },
        geo: {
          x: `-0.5713828183935163`,
          y: `44.86304262643972`,
        },
      },
      {
        name: `Bar Gourmand`,
        adresse: `707 Rue Gourmet`,
        description: `Bar avec une excellente sélection de plats et boissons, idéal pour les gourmets. Découvrez des saveurs uniques et des associations audacieuses dans un cadre élégant et confortable.`,
        telephone: `0123456798`,
        createdAt: new Date(),
        updateAt: null,
        pictureList: {
          pictureOne: `./uploads/bar/bar100.png`,
          pictureTwo: `./uploads/bar/bar101.png`,
          pictureThree: `./uploads/bar/bar102.png`,
          pictureFour: `./uploads/bar/bar103.png`,
        },
        geo: {
          x: `-0.5689795591157178`,
          y: `44.855741800057615`,
        },
      },
    ];
    const users: User[] = await this.usersService.findAll();
    for (const bar of bars) {
      try {
        const existingBar: Bar = await this.barRepository.findOne({
          where: { name: bar.name },
        });
        if (!existingBar) {
          const randomUser = users[Math.floor(Math.random() * users.length)];
          const { pictureList, geo, ...barInfo } = bar;
          const barData = { ...barInfo, createdBy: randomUser };
          const createdBar = await this.barsService.create(
            barData,
            randomUser.id,
          );

          console.log('createdBar');
          console.log(createdBar);
          if (pictureList) {
            const pictureListData = { ...pictureList, bar: createdBar };
            await this.pictureListService.create(pictureListData);
          }
          if (geo) {
            const geoData = { ...geo, bar: createdBar };
            await this.geoService.create(geoData);
            console.log('geoData');
            console.log(geoData);
          }
          //if (geo) {
          //  const geoData = { ...geo, bar: createdBar };
          //  const newGeo = await this.geoService.create(geoData);
          //  createdBar.geo = newGeo;
          //  await this.barRepository.save(createdBar);
          //  console.log('geoData', geoData)
          //}
          console.log(`${createdBar.name} created.`);
        }
      } catch (error) {
        console.error(`Error creating bar ${bar.name}:`, error);
      }
    }

    console.log(`Seeding bars complete!`);
  }
}
