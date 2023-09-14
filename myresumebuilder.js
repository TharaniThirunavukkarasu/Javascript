function addNewSkill() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.style.marginTop = "20px";
    newnode.classList.add("tallentfield");
    newnode.setAttribute("rows", 1);
    newnode.setAttribute("placeholder", "Enter your Skill");
  
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2", "mt-1");
    removeButton.addEventListener("click", function () {
      newnode.remove();
      removeButton.remove();
    });
    let weAdd = document.getElementById("sl");
    let weAddButton = document.getElementById("slAddButton");
  
    weAdd.insertBefore(newnode, weAddButton);
    weAdd.insertBefore(removeButton, weAddButton);
  }



  function addNewEdu() {
    let newnode = document.createElement("div");
    newnode.classList.add("education");
  
    let degreeRow = document.createElement("div");
    degreeRow.classList.add("row");
  
    let degreeCol = document.createElement("div");
    degreeCol.classList.add("col");
    let degreeInput = document.createElement("input");
    degreeInput.type = "text";
    degreeInput.classList.add("form-control", "mt-3");
    degreeInput.placeholder = "Degree";
    degreeInput.name = "degreeField";
    degreeCol.appendChild(degreeInput);
  
    let institutionCol = document.createElement("div");
    institutionCol.classList.add("col");
    let institutionInput = document.createElement("input");
    institutionInput.type = "text";
    institutionInput.classList.add("form-control", "mt-3");
    institutionInput.placeholder = "Institution";
    institutionInput.name = "institutionField";
    institutionCol.appendChild(institutionInput);
  
    degreeRow.appendChild(degreeCol);
    degreeRow.appendChild(institutionCol); let eduSection = document.getElementById("edu");
    let addButton = document.getElementById("EAddButton");
  
    eduSection.insertBefore(newnode, addButton);
  }


  function generateResume() {
    let file = document.getElementById("imgField").files[0];
    console.log(file);
  
    let reader = new FileReader();
    reader.readAsDataURL(file);
  
    // Set image
    reader.onloadend = function () {
      document.getElementById("my-img").src = reader.result;
    };
  
    let firstName = document.getElementById("firstNameField").value;
    let lastName = document.getElementById("lastNameField").value;
    let fullName = firstName + " " + lastName;
    document.getElementById("nameT1").innerHTML = fullName;
  
    let contactNo = document.getElementById("contactfield").value;
    document.getElementById("noT").innerHTML = contactNo;
  
    let email = document.getElementById("emailfield").value;
    document.getElementById("emailT").innerHTML = email;
  
    let address = document.getElementById("addressfield").value;
    document.getElementById("addressT").innerHTML = address;
  
    let Github = document.getElementById("githubfield").value;
    document.getElementById("githubT").innerHTML = Github;
  
    let Linkedin = document.getElementById("linkedinfield").value;
    document.getElementById("linkedinT").innerHTML = Linkedin;
  
    let knw = document.getElementsByClassName("tallentfield");
    let skills = [];
    for (let e of knw) {
      skills.push(e.value);
    }
    document.getElementById("skillT").innerHTML = skills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
  
    let obj = document.getElementById("objfield").value;
    document.getElementById("objT").innerHTML = obj;
  
    let work = document.getElementsByClassName("work-experience");
    let experiences = [];
    for (let exp of work) {
      let position = exp.querySelector('input[name="positionField"]').value;
      let company = exp.querySelector('input[name="companyField"]').value;
      let startDate = exp.querySelector('input[name="startDateField"]').value;
      let endDate = exp.querySelector('input[name="endDateField"]').value;
      let description = exp.querySelector('textarea[name="expField"]').value;
  
      experiences.push({
        position: position,
        company: company,
        startDate: startDate,
        endDate: endDate,
        description: description,
      });
    }
    let experiencesHTML = experiences
      .map(
        (exp) =>
          `<li>${exp.position} at ${exp.company}<br>${exp.startDate} - ${exp.endDate}<br>${exp.description}</li>`
      )
      .join("");
    document.getElementById("weT").innerHTML = experiencesHTML;
  
    let Education = document.getElementsByClassName("education");
    let educationList = [];
    for (let edu of Education) {
      let degree = edu.querySelector('input[name="degreeField"]').value;
      let institution = edu.querySelector('input[name="institutionField"]').value;
      let completionDate = edu.querySelector(
        'input[name="completionDateField"]'
      ).value;
      let eduDescription = edu.querySelector('textarea[name="eduField"]').value;
  
      educationList.push({
        degree: degree,
        institution: institution,
        completionDate: completionDate,
        eduDescription: eduDescription,
      });
    }
    let educationHTML = educationList
      .map(
        (edu) =>
          `<li>${edu.degree} from ${edu.institution}<br>${edu.completionDate}<br>${edu.eduDescription}</li>`
      )
      .join("");
    document.getElementById("eduT").innerHTML = educationHTML;








  function generateResume() {
    let file = document.getElementById("imgField").files[0];
    console.log(file);
  
    let reader = new FileReader();
    reader.readAsDataURL(file);
  
    // Set image
    reader.onloadend = function () {
      document.getElementById("my-img").src = reader.result;
    };
  
    let firstName = document.getElementById("firstNameField").value;
    let lastName = document.getElementById("lastNameField").value;
    let fullName = firstName + " " + lastName;
    document.getElementById("nameT1").innerHTML = fullName;
  
    let contactNo = document.getElementById("contactfield").value;
    document.getElementById("noT").innerHTML = contactNo;
  
    let email = document.getElementById("emailfield").value;
    document.getElementById("emailT").innerHTML = email;
  
    let address = document.getElementById("addressfield").value;
    document.getElementById("addressT").innerHTML = address;
  
    let Github = document.getElementById("githubfield").value;
    document.getElementById("githubT").innerHTML = Github;
  
    let Linkedin = document.getElementById("linkedinfield").value;
    document.getElementById("linkedinT").innerHTML = Linkedin;
  
    let knw = document.getElementsByClassName("tallentfield");
    let skills = [];
    for (let e of knw) {
      skills.push(e.value);
    }
    document.getElementById("skillT").innerHTML = skills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
  
    let obj = document.getElementById("objfield").value;
    document.getElementById("objT").innerHTML = obj;
  
    
    let Education = document.getElementsByClassName("education");
    let educationList = [];
    for (let edu of Education) {
      let degree = edu.querySelector('input[name="degreeField"]').value;
      let institution = edu.querySelector('input[name="institutionField"]').value;
      let completionDate = edu.querySelector(
        'input[name="completionDateField"]'
      ).value;
      let eduDescription = edu.querySelector('textarea[name="eduField"]').value;
  
      educationList.push({
        degree: degree,
        institution: institution,
        completionDate: completionDate,
        eduDescription: eduDescription,
      });
    }
    
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  
}
  }


  // Storing the input in local storage
  function storeInput() {
    let formData = {
      firstName: document.getElementById("firstNameField").value,
      lastName: document.getElementById("lastNameField").value,
      contactNo: document.getElementById("contactfield").value,
      email: document.getElementById("emailfield").value,
      address: document.getElementById("addressfield").value,
      github: document.getElementById("githubfield").value,
      linkedin: document.getElementById("linkedinfield").value,
      skills: getValuesByClassName("tallentfield"),
      objective: document.getElementById("objfield").value,
      workExperience: getValuesByClassName("wefield"),
      education: getValuesByClassName("edufield"),
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
  }