export default function signUp(user) {
    return fetch('https://stocks-store-202.herokuapp.com/api/auth/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(data => data.json())
}
