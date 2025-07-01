let courses = [];

function addCourse() {
  const name = document.getElementById("courseName").value;
  const credit = parseFloat(document.getElementById("courseCredit").value);
  const grade = parseFloat(document.getElementById("courseGrade").value);

  if (name && credit && grade >= 0) {
    courses.push({ name, credit, grade });
    displayCourses();
  }
}

function displayCourses() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";
  courses.forEach((course, index) => {
    const li = document.createElement("li");
    li.textContent = `${course.name} - Credit: ${course.credit}, Grade: ${course.grade}`;
    list.appendChild(li);
  });
}

function calculateGPA() {
  let totalCredits = 0;
  let weightedSum = 0;

  courses.forEach(course => {
    totalCredits += course.credit;
    weightedSum += course.credit * course.grade;
  });

  const gpa = (weightedSum / totalCredits).toFixed(2);
  document.getElementById("result").textContent = `Your GPA: ${gpa}`;
}
