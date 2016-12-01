import { ngMilitarySymbology } from '../milSymbols.module';

// export class AppSettings {
//     public static get API_ENDPOINT(): string { return 'http://127.0.0.1:6666/api/'; }
// }

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


ngMilitarySymbology.constant('affiliations', Affiliations.Default);
ngMilitarySymbology.constant('battle', Battle.Default);


export let dimensions = {
    affiliations: [
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
    ],
    battle: [
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
};
