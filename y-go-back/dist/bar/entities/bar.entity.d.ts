import { DrinkEnum } from "./types/drinks.enum";
export declare class Bar {
    id: string;
    name: string;
    adresse: string;
    neighborhood: string;
    price?: number;
    nibble?: boolean;
    happyHour?: boolean;
    averageAge?: number;
    drinks?: DrinkEnum;
    openTime: number;
    closeTime: number;
    card: string;
    pictures: string[];
    notes: number;
}
