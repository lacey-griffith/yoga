async function login (event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password){
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username, 
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        if(res.ok){
            document.location.replace('/dashboard/')
        } else {
            alert('Incorrect username or password')
            console.log(res.statusText)
        }
    }
}

async function signUp(event){
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && password){
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        if(res.ok){
            document.location.replace('/dashboard/')
        } else {
            alert('Invalid username or password, try again!')
            console.log(res.statusText)
        }
    }
}



document.querySelector('#login').addEventListener('submit', login)
document.querySelector('#signup').addEventListener('submit', signUp)