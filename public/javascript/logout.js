
async function logout(){
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type':'application/json'}
    })
    if(res.ok){
        document.location.replace('/')
    } else {
        console.log(res.statusText)
    }
}

document.querySelector('#logout').addEventListener('click', logout)