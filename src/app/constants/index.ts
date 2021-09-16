import { ICurrency } from '../interfaces/currency';

export const currencyList: ICurrency[] = [
    {
        name: 'European Union',
        conversion: '1 EUR = 1.0000 EUR',
        image: 'https://icons.iconarchive.com/icons/wikipedia/flags/1024/EU-European-Union-Flag-icon.png',
        factor: 1.0000,
        currency: 'Euros'
    },
    {
        name: 'United States',
        conversion: '1 EUR = 1.0963 USD',
        image: 'https://cdn-icons-png.flaticon.com/512/555/555526.png',
        factor: 1.0963,
        currency: 'Dólares'
    },
    {
        name: 'Peru',
        conversion: '1 EUR = 4.83 PEN',
        image: 'https://icons.iconarchive.com/icons/wikipedia/flags/1024/PE-Peru-Flag-icon.png',
        factor: 4.83,
        currency: 'Soles'
    }
];