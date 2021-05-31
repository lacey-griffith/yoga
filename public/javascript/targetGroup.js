
$('#dropdown-list li a').on('click', function () {
    event.preventDefault();
    $('#pose_container').html('')
    const target_group_id = $(this).attr('id')
    const target_group = $(this).text().trim();

    fetch(`/api/targetgroups/${target_group_id}`)
        .then(res => {
            return res.json();
        }).then(res => {
            const poses = res.poses
            printPoses(poses, target_group)
        })
    })

function printPoses(poses, target_group) {
    console.log(target_group, 'target group')
    console.log(poses, 'poses')
    
    for (let i = 0; i < poses.length; i++) {
      if(!poses.length){
        $('#pose_container').append(`
        <p>No poses were found</p>`)
      } else {
    $('#pose_container').append(`
    <div class='col col-sm-auto col-md-auto col-lg-auto mt-3 mb-3 align-self-center'>
    <div class="card results-card col-sm-4 py-2 h-200" style="width: 18rem; height: 37rem;">
      <img src="${poses[i].demo}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${poses[i].pose_name}</h5>
        <p class="card-text">${poses[i].description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Difficulty: ${poses[i].difficulty}</li>
        <li class="list-group-item">Targeted anatomy: ${target_group}</li>
      </ul>
      <div class="card-body">
        <a href="https://www.youtube.com/results?search_query=${poses[i].pose_name}" class="card-link">Video Demo</a>
      </div>
    </div>
    </div>
`)
      }
    }
}
