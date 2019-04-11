import store from '../store';


export default function info() {
    const token = store.getState().tokens.accessToken;
    return fetch('https://stocks-store-202.herokuapp.com/api/account/info', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(data => data.json())
}