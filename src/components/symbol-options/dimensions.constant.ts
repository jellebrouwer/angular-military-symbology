import { app } from '../../app.module';

export class Affiliations {
    static get Default(): any {
        return [
            {
                name: 'Friend',
                key: 'F'
            },
            {
                name: 'Assumed friend',
                key: 'A'
            },
            {
                name: 'Hostile',
                key: 'H'
            },
            {
                name: 'Unknown',
                key: 'U'
            },
            {
                name: 'Pending',
                key: 'P'
            }
        ]
    }
}
export class Battle {
    static get Default(): any {
        return [
            {
                name: 'Space',
                key: 'P'
            },
            {
                name: 'Air',
                key: 'A'
            },
            {
                name: 'Ground',
                key: 'G'
            },
            {
                name: 'Sea surface',
                key: 'S'
            },
            {
                name: 'Sea subsurface',
                key: 'U'
            }
        ]
    }
}

app.constant('affiliations', Affiliations.Default);
app.constant('battle', Battle.Default);