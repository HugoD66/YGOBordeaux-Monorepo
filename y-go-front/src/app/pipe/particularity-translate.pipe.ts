import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: `particularityTranslate` })
export class ParticularityTranslatePipe implements PipeTransform {
  transform(value: string): { translation: string; logo: string } {
    const afterwork = `../../assets/icons/particularity/afterwork.png`;
    const happyhour = `../../assets/icons/particularity/happyhour.png`;
    const theme = `../../assets/icons/particularity/theme.png`;
    const cocktail = `../../assets/icons/particularity/cocktail.png`;
    const vin = `../../assets/icons/particularity/vin.png`;
    const biere = `../../assets/icons/particularity/biere.png`;
    const concert = `../../assets/icons/particularity/concert.png`;
    const karaoke = `../../assets/icons/particularity/karaoke.png`;
    const animal = `../../assets/icons/particularity/animal.png`;
    const terrace = `../../assets/icons/particularity/terrace.png`;

    const mappings: { [key: string]: { translation: string; logo: string } } = {
      AFTERWORK: { translation: `Afterwork`, logo: afterwork },
      HAPPYHOUR: { translation: `Happy Hour`, logo: happyhour },
      THEMEPARTY: { translation: `Soirée à Thème`, logo: theme },
      COCKTAILBAR: { translation: `Bar à cocktail`, logo: cocktail },
      WINEBAR: { translation: `Bar à vin`, logo: vin },
      BEERBAR: { translation: `Bar à bière`, logo: biere },
      CONCERT: { translation: `Concerts`, logo: concert },
      KARAOKE: { translation: `Karaoké`, logo: karaoke },
      PETFRIENDLY: { translation: `Bar à animaux`, logo: animal },
      TERRACE: { translation: `Terrace`, logo: terrace },
    };
    return mappings[value] || { translation: value, logo: afterwork };
  }
}
