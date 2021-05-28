

$('#dropdown-list li a').on('click', function(){
    event.preventDefault();
    
    //store value of selected target group (ex: Abs) into target variable
    const target_group_id = $(this).attr('id')
    const target_group = $(this).text().trim();
    //console.log(value)

    fetch(`/api/targetgroups/${target_group_id}`)
    .then(res => {
        return res.json();
    }).then(results => {
        console.log(results)
    })
    findTargetGroup(target_group);
});

function findTargetGroup(target_group) {
    event.preventDefault();

    console.log(target_group)
}

//document.querySelector('.dropdown-menu').addEventListener('click', findTargetGroup);