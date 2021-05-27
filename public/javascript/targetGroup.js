 async function findTargetGroup(event) {
    event.preventDefault();
    
    const target = document.querySelector('#dropdown-item-text8').innerText
    console.log('=====')
    console.log(target)
    console.log('=====')
    const response = await fetch('/api/targetgroups', {
        method: 'post',
        body: JSON.stringify({
            target

        }),
        headers: {
            'Content-Type': 'application/json'
          }
    }).then(res => {

        console.log(res, 'line 19')
        console.log(target, 'line 20')
    })


}

document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);