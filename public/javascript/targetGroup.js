$('#dropdown-list li a').on('click', function(event){
    event.preventDefault();
    //store value of selected target group (ex: Abs) into target variable
    const target_group_id = $(this).attr('id')
    const target_group = $(this).text().trim();
    //console.log(value)

    fetch(`/api/targetgroups/${target_group_id}`)
    .then(res => {
        return res.json();
    }).then(res => {
        document.location.replace('/dashboard')
    })
});

// function findPoses(results) {
//     const selectedTarget_id = results.id
//     const selectedTarget_name = results.target_group

//     fetch(`/api/poses`)
//     .then(res => {
//         return res.json();
//     }).then(results => {
//         console.log(results)
//     })
    
// }

//document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);