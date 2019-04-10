// import axios from 'axios';


export default class stockmarketService {
    myData = [
            {
                id : 1,
                group : 'банк',
                name : 'Тинькофф',
                prise : 32,
                coverImage : 'tinkoff-bank.png'
            },
            {
                id : 2,
                group : 'банк',
                name : 'Сбербанк',
                prise : 23,
                coverImage : 'sber.jpg'
            }
        ];

    data = [
        {
            id : 3,
            group : 'банк',
            name : 'НеСбербанк',
            prise : 5,
            coverImage : 'sber.jpg'
        },
        {
            id : 4,
            group : 'небанк',
            name : 'НеТинькофф',
            prise : 19,
            coverImage : 'tinkoff-bank.png'
        },
    ]

getStocks() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(this.data)
        }, 1000);
    });
    };

getMyStocks() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(this.myData)
        }, 1000);
    });
    };
}


// getStocks() {
//     return axios.get('https://app.swaggerhub.com/apis-docs/enp0s23/stocks/0.0.1#/Stocks/getStocks');
// };

// getMyStocks() {
//     return axios.get('https://app.swaggerhub.com/apis-docs/enp0s23/stocks/0.0.1#/Stocks/getStocks');
// // };
// };
