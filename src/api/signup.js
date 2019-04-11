export default function singup(user) {
    return fetch('https://stocks-mocks.herokuapp.com/api/auth/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(data => data.json())
}
