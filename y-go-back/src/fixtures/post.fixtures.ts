import { Injectable } from '@nestjs/common';
import { BarsService } from '../bars/bars.service';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post/entities/post.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PostFixtures {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private usersService: UsersService,
    private barsService: BarsService,
  ) {}
  async seedPosts(): Promise<void> {
    const user = await this.usersService.findOneRandom();
    const bar = await this.barsService.findOneRandom();

    const messages = [
      `Un endroit absolument fantastique avec une ambiance incroyable.`,
      `Les cocktails étaient délicieux, et le service était irréprochable.`,
      `Une expérience mémorable, j'y retournerai sans hésiter.`,
      `L'ambiance et la décoration nous ont vraiment transportés.`,
      `Le personnel est très accueillant et professionnel. Un vrai plaisir.`,
      `Malheureusement, l'expérience n'a pas été à la hauteur de nos attentes.`,
      `Le service était lent et les boissons assez moyennes.`,
      `L'ambiance était un peu terne, pas ce à quoi nous nous attendions.`,
      `Les prix étaient exorbitants par rapport à la qualité reçue.`,
      `Un peu déçu par l'expérience, il y a clairement de la place pour s'améliorer.`,
      `Une carte de boissons variée et originale, chaque choix a été un plaisir à découvrir.`,
      `Le meilleur bar en ville pour se détendre après une longue semaine de travail.`,
      `Incroyable sélection de vins, et les conseils du personnel étaient spot-on.`,
      `Des événements live vraiment top niveau, une superbe trouvaille !`,
      `Trop bruyant pour pouvoir profiter de la soirée, difficile de s'entendre parler.`,
      `La musique était bien trop forte, pas l'ambiance relaxante que j'espérais.`,
      `Attente interminable pour obtenir une table, même avec une réservation.`,
      `Boissons surcotées pour ce que c'est, j'ai eu mieux pour moins cher ailleurs.`,
      `Propreté laissant à désirer, surtout les toilettes, c'était limite répugnant.`,
      `Carte des boissons limitée et manquant cruellement d'originalité`,
      `Service rapide, même quand c'est bondé, ils savent vraiment gérer la foule.`,
      `Le bar à cocktails dont j'ai toujours rêvé, chaque création est une œuvre d'art.`,
      `Un véritable joyau caché, chaque visite est une nouvelle aventure.`,
      `La terrasse offre une vue imprenable, l'endroit parfait pour un rendez-vous.`,
      `Des événements live vraiment top niveau, une superbe trouvaille !`,
    ];

    for (const message of messages) {
      const user = await this.usersService.findOneRandom();
      const bar = await this.barsService.findOneRandom();
      const createdAt = this.getRandomDate();

      const post = {
        message: message,
        user: user,
        bar: bar,
        createdAt: createdAt,
      };

      try {
        await this.postRepository.save(post);
        console.log(`Post created with message: "${post.message}"`);
      } catch (error) {
        console.error(`Error creating post: ${error.message}`);
      }
    }

    console.log(`Seeding posts complete!`);
  }

  private getRandomDate(startDate?: Date, endDate?: Date): Date {
    const start = startDate
      ? startDate.getTime()
      : new Date().setFullYear(new Date().getFullYear() - 2);
    const end = endDate ? endDate.getTime() : new Date().getTime();
    return new Date(start + Math.random() * (end - start));
  }
}
