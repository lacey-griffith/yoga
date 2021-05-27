async function findThatTargetGroup(event) {
    event.preventDefault();
    
    const targetGroup = document.querySelector('.dropdown-value').value;

    console.log(targetGroup)


}

document.querySelector('.dropdown-value').addEventListener('submit', findThatTargetGroup);