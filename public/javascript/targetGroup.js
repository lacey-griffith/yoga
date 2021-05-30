

$('#dropdown-list li a').on('click', function() {
    let yogaPoses = $(this).attr('id')
    event.preventDefault()
    console.log(yogaPoses)
   renderYogaPoses(yogaPoses)
})

renderYogaPoses = (yogaPoses) => {

    const response = fetch(`/dashboard/${yogaPoses}`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    })
    console.log(response)
    if(response.ok){
        document.location.reload()
    }
}


// .then(data => {
//     const card = `
// <div class='col-4 mt-3'>
// <div class="card results-card" style="width: 18rem;">
//   <img src="/images/lotusbehappy.png" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Pose Name:${data.poses.pose_name}</h5>
//     <p class="card-text">Move slowly through each pose, remembering to breathe as you move. Pause after any pose you find challenging, especially if you are short of breath, and start again when your breathing returns to normal. The idea is to hold each pose for a few, slow breaths before moving on to the next one.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Difficulty: ${data.poses.difficulty}</li>
//     <li class="list-group-item">Targeted anatomy:${data.poses.target_group}</li>
//   </ul>
//   <div class="card-body">
//     <a href="https://www.youtube.com/results?search_query=${data.poses.pose_name}" class="card-link">Video Demo</a>
//   </div>
// </div>
// </div>
// `
// $("#cards").html("")
// $("#cards").append(card)
// })

// const card = `
// <div class='col-4 mt-3'>
// <div class="card results-card" style="width: 18rem;">
//   <img src="/images/lotusbehappy.png" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Pose Name:${data.poses.pose_name}</h5>
//     <p class="card-text">Move slowly through each pose, remembering to breathe as you move. Pause after any pose you find challenging, especially if you are short of breath, and start again when your breathing returns to normal. The idea is to hold each pose for a few, slow breaths before moving on to the next one.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Difficulty: ${data.poses.difficulty}</li>
//     <li class="list-group-item">Targeted anatomy:${data.poses.target_group}</li>
//   </ul>
//   <div class="card-body">
//     <a href="https://www.youtube.com/results?search_query=${data.poses.pose_name}" class="card-link">Video Demo</a>
//   </div>
// </div>
// </div>
// `
// $("#cards").html("")
// $("#cards").append(card)

// $('#dropdown-list li a').on('click', function () {
//     event.preventDefault();
//     //store value of selected target group (ex: Abs) into target variable
//     const target_group_id = $(this).attr('id')
//     const target_group = $(this).text().trim();
//     //console.log(value)
//     fetch(`/api/targetgroups/${target_group_id}`, {
//         method: 'GET',
//         body: JSON.stringify({

//             target_group,
//             difficulty
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => {
//              res.json();
//             console.log(res)
//             //findPoses(results);
//         })
//         .then(data => {
//             const poses = data.poses
//             console.log(poses)
//             renderYogaPoses = () => {
                 
//                     for (let i = 0; i < poses.length; i++) {
//                         let card = `
//                     <div class='col-4 mt-3'>
//                     <div class="card results-card" style="width: 18rem;">
//                       <img src="/images/lotusbehappy.png" class="card-img-top" alt="...">
//                       <div class="card-body">
//                         <h5 class="card-title">Pose Name:${poses[i].pose_name}</h5>
//                         <p class="card-text">Move slowly through each pose, remembering to breathe as you move. Pause after any pose you find challenging, especially if you are short of breath, and start again when your breathing returns to normal. The idea is to hold each pose for a few, slow breaths before moving on to the next one.</p>
//                       </div>
//                       <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Difficulty: ${poses[i].difficulty}</li>
//                         <li class="list-group-item">Targeted anatomy:${poses[i].target_group}</li>
//                       </ul>
//                       <div class="card-body">
//                         <a href="https://www.youtube.com/results?search_query=${poses[i].pose_name}" class="card-link">Video Demo</a>
//                       </div>
//                     </div>
//                     </div>
//                 `
//                 $(".poses").append(card)
//                 }
//             }
//         })
//     })
