'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.PostFixtures = void 0;
const common_1 = require('@nestjs/common');
const bars_service_1 = require('../bars/bars.service');
const users_service_1 = require('../users/users.service');
const typeorm_1 = require('@nestjs/typeorm');
const post_entity_1 = require('../post/entities/post.entity');
const typeorm_2 = require('typeorm');
let PostFixtures = (exports.PostFixtures = class PostFixtures {
  constructor(postRepository, usersService, barsService) {
    this.postRepository = postRepository;
    this.usersService = usersService;
    this.barsService = barsService;
  }
  async seedPosts() {
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
  getRandomDate(startDate, endDate) {
    const start = startDate
      ? startDate.getTime()
      : new Date().setFullYear(new Date().getFullYear() - 2);
    const end = endDate ? endDate.getTime() : new Date().getTime();
    return new Date(start + Math.random() * (end - start));
  }
});
exports.PostFixtures = PostFixtures = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata('design:paramtypes', [
      typeorm_2.Repository,
      users_service_1.UsersService,
      bars_service_1.BarsService,
    ]),
  ],
  PostFixtures,
);
//# sourceMappingURL=post.fixtures.js.map
