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
            console.log(res)
            document.location.replace('/dashboard/')
        } 
        if(res.status == 400){
            console.log('wrong password')
            $('#login_container').html('')
            $('#login_container').append(`
            <div class="alert alert-danger fade show">
                <strong>Incorrect password.</strong>
            </div>
        `)
        }
        if(res.status == 404){
            console.log('wrong username')
            $('#login_container').html('')
            $('#login_container').append(`
            <div class="alert alert-danger fade show">
                <strong>Incorrect username.</strong>
            </div>
        `)
        }
        else {
            alert(res.statusText)
        }
    }
    if(!username){
        $('#login_container').html('')
        $('#login_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Username is required.</strong>
        </div>
    `)
    }
    if(!password){
        $('#login_container').html('')
        $('#login_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Password is required.</strong>
        </div>
    `)
    }
    if(!username && !password){
        $('#login_container').html('')
        $('#login_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Please enter username and password.</strong>
        </div>
    `)
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
            console.log(res)
            document.location.replace('/dashboard/')
        }
        if(res.status == 500){
            $('#signup_container').html('')
            $('#signup_container').append(`
            <div class="alert alert-danger fade show">
                <strong>This username already exists.</strong>
            </div>
        `)
        } else {
            console.log(res)
            //#signup_container
        }
    }
    if(!username){
        $('#signup_container').html('')
        $('#signup_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Please enter a valid username.</strong>
        </div>
    `)
    }
    if(username.length === 0){
        $('#signup_container').html('')
        $('#signup_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Please enter a valid username.</strong>
        </div>
    `)
    }
    if(!password){
        $('#signup_container').html('')
        $('#signup_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Please enter a valid password.</strong>
        </div>
    `)
    }
    if(password.length < 8){
        console.log(password.length)
        $('#signup_container').html('')
        $('#signup_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Password must be at least 8 characters.</strong>
        </div>
    `)
    }
    if(!username && !password){
        $('#signup_container').html('')
        $('#signup_container').append(`
        <div class="alert alert-danger fade show">
            <strong>Please enter username and password.</strong>
        </div>
    `)
    }
}

document.querySelector('#login').addEventListener('submit', login)
document.querySelector('#signup').addEventListener('submit', signUp)