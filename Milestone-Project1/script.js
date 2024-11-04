// const toggleButton =document.getElementById('toggle-skills') as HTMLButtonElement
// const skills = document.getElementById('skills') as HTMLElement
// toggleButton.addEventListener('click', ()=> {
//     if(skills.style.display ==='none'){
//         skills.style.display = 'block'
//     } else{
//         skills.style.display = 'none'
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skills = document.getElementById('skills');
    toggleButton.addEventListener('click', function () {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    });
});
