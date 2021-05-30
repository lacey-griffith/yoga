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
            $('#form_container').html('')
            $('#form_container').append(`
            <div class="alert alert-danger alert-dismissible fade show">
                <strong>Incorrect password.</strong>
            </div>
        `)
        }
        if(res.status == 404){
            console.log('wrong username')
            $('#form_container').html('')
            $('#form_container').append(`
            <div class="alert alert-danger alert-dismissible fade show">
                <strong>Incorrect username.</strong>
            </div>
        `)
        }
    }
    if(!username){
        $('#form_container').html('')
        $('#form_container').append(`
        <div class="alert alert-danger alert-dismissible fade show">
            <strong>Username is required.</strong>
        </div>
    `)
    }
    if(!password){
        $('#form_container').html('')
        $('#form_container').append(`
        <div class="alert alert-danger alert-dismissible fade show">
            <strong>Password is required.</strong>
        </div>
    `)
    }
    if(!username && !password){
        $('#form_container').html('')
        $('#form_container').append(`
        <div class="alert alert-danger alert-dismissible fade show">
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
            document.location.replace('/dashboard/')
        } else {
            alert('Invalid username or password, try again!')
            console.log(res.statusText)
        }
    }
}

document.querySelector('#login').addEventListener('submit', login)
document.querySelector('#signup').addEventListener('submit', signUp)