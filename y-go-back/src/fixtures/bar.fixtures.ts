import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bar } from '../bars/entities/bar.entity';
import {User} from "../users/entities/user.entity";
import {UserResponseDto} from "../users/dto/user-response.dto";
import {BarsService} from "../bars/bars.service";

@Injectable()
export class BarFixtures {
  constructor(
    @InjectRepository(Bar)
    private barRepository: Repository<Bar>,

    private barsService: BarsService,
  ) {}

  async seedBars(): Promise<void> {
    const bars = [
      { name: 'Bar Mystique', adresse: '123 Rue Imaginaire', description: 'Un bar mystérieux avec une ambiance unique, parfaite pour les soirées mystérieuses et des rencontres inoubliables. Lieu idéal pour les amateurs d\'énigmes et de cocktails étonnants.', telephone: '0123456789', note: 4, picture: "./uploads/bar/bar1.png" },
      { name: 'Bar Lumineux', adresse: '456 Avenue Lumière', description: 'Bar lumineux et animé, idéal pour les soirées animées et vibrantes. Avec son ambiance chaleureuse et accueillante, c\'est le lieu parfait pour se détendre après une longue journée.', telephone: '0123456790', note: 2, picture: "./uploads/bar/bar2.png" },
      { name: 'Bar de la Plage', adresse: '789 Boulevard Océan', description: 'Bar en bord de mer avec une vue magnifique sur l\'océan, offrant une expérience inégalée. Savourez des cocktails rafraîchissants au son des vagues et admirez le coucher de soleil.', telephone: '0123456791', note: 4, picture: "./uploads/bar/bar3.png" },
      { name: 'Bar Historique', adresse: '101 Rue du Passé', description: 'Bar avec une décoration historique et élégante, transportant les visiteurs dans une autre époque. Parfait pour ceux qui apprécient l\'histoire et une atmosphère classique, avec une sélection de boissons vintage.', telephone: '0123456792', note: 1, picture: "./uploads/bar/bar4.png" },
      { name: 'Bar Élégant', adresse: '202 Avenue Chic', description: 'Un bar élégant pour des soirées sophistiquées, où le luxe et le raffinement se rencontrent. Idéal pour les occasions spéciales, avec un service exceptionnel et une liste de vins et de champagnes impressionnante.', telephone: '0123456793', note: 3, picture: "./uploads/bar/bar5.png" },
      { name: 'Bar du Centre', adresse: '303 Rue Centrale', description: 'Bar convivial au cœur de la ville, où vous pouvez rencontrer des gens de tous horizons. Avec son ambiance décontractée et sa grande variété de boissons, c\'est l\'endroit idéal pour se relaxer en bonne compagnie.', telephone: '0123456794', note: 2, picture: "./uploads/bar/bar6.png" },
      { name: 'Bar Artistique', adresse: '404 Rue Créative', description: 'Bar décoré par des artistes locaux, très inspirant pour ceux qui cherchent la créativité. Chaque coin du bar est une œuvre d\'art, offrant une expérience unique aux amateurs d\'art et de culture.', telephone: '0123456795', note: 5, picture: "./uploads/bar/bar7.png" },
      { name: 'Bar du Parc', adresse: '505 Allée Verte', description: 'Bar paisible à côté d\'un parc, parfait pour se détendre dans un cadre naturel. Profitez d\'un moment de tranquillité loin de l\'agitation de la ville, avec des boissons fraîches et des snacks sains.', telephone: '0123456796', note: 5, picture: "./uploads/bar/bar8.png" },
      { name: 'Bar Sportif', adresse: '606 Rue du Match', description: 'Bar idéal pour regarder les événements sportifs dans une ambiance électrique. Équipé de grands écrans et d\'un système sonore de qualité, c\'est le lieu de rendez-vous des fans de sport pour partager leur passion.', telephone: '0123456797', note: 3, picture: "./uploads/bar/bar9.png" },
      { name: 'Bar Gourmand', adresse: '707 Rue Gourmet', description: 'Bar avec une excellente sélection de plats et boissons, idéal pour les gourmets. Découvrez des saveurs uniques et des associations audacieuses dans un cadre élégant et confortable.', telephone: '0123456798', note: 0, picture: "./uploads/bar/bar10.png" },
    ];

    for (const barData of bars) {
      try {
        const existingBar: Bar = await this.barRepository.findOne({ where: { name: barData.name } });
        if (!existingBar) {
          const createdBar = await this.barsService.create(barData);
          console.log(`User ${createdBar.name} created.`);
        }
      } catch (error) {
        console.error(`Error creating user ${barData.name}:`, error);
      }
    }

    console.log('Seeding bars complete!');
  }
}
