 async function findTargetGroup(event) {
    event.preventDefault();
    
    const target = document.querySelector('#dropdown-item-text').innerText
    
    console.log(target)
    const response = await fetch('/api/targetgroups/card', {
        method: 'post',
        body: JSON.stringify({
            target

        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    console.log(response)


}

document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);