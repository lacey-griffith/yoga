//login form event listener
//collect username and password from form
//if both have value
//send fetch 'post' with username and password to api/users/login
//redirect user to dashboard
//
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
            alert('You are logged in!')
        } else {
            alert('Incorrect username or password')
            console.log(res.statusText)
        }
    }
}

//signup form event listener
//collect username and password from form
//if both have value
//send fetch 'post' to api/users to add new user
//redirect new user to their dashboard
//


document.querySelector('#login').addEventListener('submit', login)