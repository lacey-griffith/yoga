

$('#dropdown-list li a').on('click', function () {
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
        .then(res => {
            return res.json();
            //console.log(results)
            //findPoses(results);
        }).then(res => {
            const poses = res.poses
            printPoses(poses)
        })
});


//document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);