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

$('#dropdown-list li a').on('click', function(){
    event.preventDefault();
    //store value of selected target group (ex: Abs) into target variable
    const target = $(this).text();

    //set queryURL
    const query = '/api/targetgroups'
    console.log(target)

    fetch(query)
    }).then(res => {
        console.log(res, 'line 36')
});

//document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);