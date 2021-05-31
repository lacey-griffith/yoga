async function logout(){
    event.preventDefault();
    const res = await fetch('/api/users/about', {
        method: 'POST',
        headers: {'Content-Type':'application/json'}
    })
    if(res.ok){
        document.location.replace('about')
    } else {
        console.log(res.statusText)
    }
}

document.querySelector('#about').addEventListener('click', logout)