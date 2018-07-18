import { Moment } from 'moment';

export interface ICountry {
    id?: number;
    name?: string;
    code?: string;
    date?: Moment;
    size?: number;
    description?: string;
}

export class Country implements ICountry {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
        public date?: Moment,
        public size?: number,
        public description?: string
    ) {}
}
