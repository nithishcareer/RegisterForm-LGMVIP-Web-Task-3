const registrationForm = document.getElementById('registrationForm');
const studentList = document.getElementById('studentList');
const enrolledStudents = document.getElementById('enrolledStudents');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const gender = document.getElementById('gender').value;
    const description = document.getElementById('description').value;
    const skills = document.getElementById('skills').value;
    const image = document.getElementById('image').files[0];

    const listItem = document.createElement('li');
    const imageElement = document.createElement('img');
    const detailsElement = document.createElement('div');

    imageElement.src = URL.createObjectURL(image);
    imageElement.alt = name;

    detailsElement.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Website:</strong> ${website}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Skills:</strong> ${skills}
    `;

    listItem.appendChild(imageElement);
    listItem.appendChild(detailsElement);

    studentList.appendChild(listItem);

    // Clear form fields
    registrationForm.reset();
});
