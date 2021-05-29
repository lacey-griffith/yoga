renderYogaPoses = (id) => {
    fetch(`/api/targetgroups/${target_group.id}`).then(res => {
        console.log(res.json)
        return res.json()
    }).then(function (poses) {
        for (let i = 0; i < poses.length; i++) {
            let card = `
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
    `
    $(".poses").append(card)
    }
  })
}

$('#dropdown-list li a').on('click', function(event) {
    event.preventDefault()
    renderYogaPoses($(this).attr('id'))
})
