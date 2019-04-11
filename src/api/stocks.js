import store from '../store';


export default function stocks() {
    const token = store.getState().tokens.accessToken;
    return fetch('https://stocks-store-202.herokuapp.com/api/stocks', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(data => data.json())
}