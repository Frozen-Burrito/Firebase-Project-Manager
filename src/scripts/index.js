
// const userProjects = firestore.collection('users/someUser/projects');

// const titleInput = document.querySelector('#titleInput');
// const descriptionInput = document.querySelector('#descriptionInput');
// const createBtn = document.querySelector('#createProject');

// createBtn.addEventListener('click', () => {
//     const newProject = {
//         title: titleInput.value,
//         description: descriptionInput.value,
//     }
//     console.log('Project: ', newProject);

//     userProjects.add({
//         title: newProject.title,
//         description: newProject.description,
//     }).then(() => {
//         console.log('Project saved!');
//     }).catch((error) => {
//         console.log('Error: ', error);
//     });
// })

// const update = () => {
//     // doc.onSnapshot((snapshot) => {
//     //     if (snapshot && snapshot.exists) {
//     //         const data = snapshot.data();
//     //         console.log(data);
//     //     }
//     // })
// }

// update();