
$('#dropdown-list li a').on('click', function () {
    event.preventDefault();

    const target_group_id = $(this).attr('id')
    //const target_group = $(this).text().trim();

    fetch(`/api/targetgroups/${target_group_id}`)
        .then(res => {
            return res.json();
        }).then(res => {
            const poses = res.poses

            console.log(poses[0])
            console.log(target_group_id, 'selected target group id')
            printPoses(poses)
            //return poses[0];
        })
    })

// function printPoses(poses){
//     return poses;
// }

function printPoses(poses) {

    console.log(poses)
    for (let i = 0; i < poses.length; i++) {
        console.log(poses[i].pose_name)
    $('#pose_container').append(`
    <div class='col-4 mt-3'>
    <div class="card results-card" style="width: 18rem;">
      <img src="/images/lotusbehappy.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Pose Name:${poses[i].pose_name}</h5>
        <p class="card-text">Move slowly through each pose, remembering to breathe as you move. Pause after any pose you find challenging, especially if you are short of breath, and start again when your breathing returns to normal. The idea is to hold each pose for a few, slow breaths before moving on to the next one.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Difficulty: ${poses[i].difficulty}</li>
        <li class="list-group-item">Targeted anatomy:${poses[i].target_group}</li>
      </ul>
      <div class="card-body">
        <a href="https://www.youtube.com/results?search_query=${poses[i].pose_name}" class="card-link">Video Demo</a>
      </div>
    </div>
    </div>
`)
    }
}