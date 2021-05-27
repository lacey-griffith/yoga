//  async function findTargetGroup(event) {
//     event.preventDefault();

//     const target = document.querySelector('#dropdown-item-text').innerText
//     console.log('=====')
//     console.log(target)
//     console.log('=====')
//     const response = await fetch('/api/targetgroups', {
//         method: 'post',
//         body: JSON.stringify({
//             target

//         }),
//         headers: {
//             'Content-Type': 'application/json'
//           }
//     }).then(res => {

//         console.log(res, 'line 19')
//         console.log(target, 'line 20')
//     })
// }
async function findTargetGroup(target) {
    event.preventDefault();

    target = target.trim()

    const response = await fetch('/api/targetgroups/selected', {
        method: 'POST',
        body: JSON.stringify({
            target
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    if(response.ok){
        console.log(response)
        console.log('success')
    }
}


$('#dropdown-list li a').on('click', function(){
    event.preventDefault();
    //store value of selected target group (ex: Abs) into target variable
    const target = $(this).text();

    findTargetGroup(target);
});

//document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);