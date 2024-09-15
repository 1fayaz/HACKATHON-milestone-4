// get reference to the form and dispaly area
var form = document.getElementById('Resumeform');
var resumeDispalyElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Phone = document.getElementById('phonenumber').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    var resumeHTML = "\n   <h2><b>EditableResume</b></h2>\n   <h3>Personal Infromation</h3>\n   <p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n   <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n   <p><b>Phonenumber:</b span contenteditable=\"true\">").concat(Phone, "</span</p>\n\n   <h3>Education</h3>\n   <p contenteditable=\"true\">").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p contenteditable=\"true\">").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n\n\n   ");
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Dispaly Element is missing!');
    }
});
