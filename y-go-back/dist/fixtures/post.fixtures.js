"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFixtures = void 0;
const common_1 = require("@nestjs/common");
const bars_service_1 = require("../bars/bars.service");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../post/entities/post.entity");
const typeorm_2 = require("typeorm");
let PostFixtures = exports.PostFixtures = class PostFixtures {
    constructor(postRepository, usersService, barsService) {
        this.postRepository = postRepository;
        this.usersService = usersService;
        this.barsService = barsService;
    }
    async seedPosts() {
        const user = await this.usersService.findOneRandom();
        const bar = await this.barsService.findOneRandom();
        const posts = [
            {
                message: `Un endroit absolument fantastique avec une ambiance incroyable.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `<p> coucou </p>Les cocktails étaient délicieux, et le service était irréprochable.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Une expérience mémorable, j'y retournerai sans hésiter.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `L'ambiance et la décoration nous ont vraiment transportés.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Le personnel est très accueillant et professionnel. Un vrai plaisir.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Malheureusement, l'expérience n'a pas été à la hauteur de nos attentes.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Le service était lent et les boissons assez moyennes.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `L'ambiance était un peu terne, pas ce à quoi nous nous attendions.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Les prix étaient exorbitants par rapport à la qualité reçue.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Un peu déçu par l'expérience, il y a clairement de la place pour s'améliorer.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Une carte de boissons variée et originale, chaque choix a été un plaisir à découvrir.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Le meilleur bar en ville pour se détendre après une longue semaine de travail.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Incroyable sélection de vins, et les conseils du personnel étaient spot-on.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Des événements live vraiment top niveau, une superbe trouvaille !`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Trop bruyant pour pouvoir profiter de la soirée, difficile de s'entendre parler.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `La musique était bien trop forte, pas l'ambiance relaxante que j'espérais.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Attente interminable pour obtenir une table, même avec une réservation.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Boissons surcotées pour ce que c'est, j'ai eu mieux pour moins cher ailleurs.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Propreté laissant à désirer, surtout les toilettes, c'était limite répugnant.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Carte des boissons limitée et manquant cruellement d'originalité`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Service rapide, même quand c'est bondé, ils savent vraiment gérer la foule.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Le bar à cocktails dont j'ai toujours rêvé, chaque création est une œuvre d'art.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Un véritable joyau caché, chaque visite est une nouvelle aventure.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `La terrasse offre une vue imprenable, l'endroit parfait pour un rendez-vous.`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
            {
                message: `Des événements live vraiment top niveau, une superbe trouvaille !`,
                user: user,
                bar: bar,
                createdAt: this.getRandomDate(),
            },
        ];
        for (const post of posts) {
            try {
                await this.postRepository.save(post);
                console.log(`Post created with message: "${post.message}"`);
            }
            catch (error) {
                console.error(`Error creating post: ${error.message}`);
            }
        }
        console.log(`Seeding posts complete!`);
    }
    getRandomDate(startDate, endDate) {
        const start = startDate ? startDate.getTime() : new Date().setFullYear(new Date().getFullYear() - 2);
        const end = endDate ? endDate.getTime() : new Date().getTime();
        return new Date(start + Math.random() * (end - start));
    }
};
exports.PostFixtures = PostFixtures = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        bars_service_1.BarsService])
], PostFixtures);
//# sourceMappingURL=post.fixtures.js.map