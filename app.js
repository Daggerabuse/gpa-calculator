let courseCount = 0;

function addCourse() {
  courseCount++;

  const form = document.getElementById("courseForm");

  const div = document.createElement("div");
  div.className = "course-entry";

  div.innerHTML = `
    <h3>Course ${courseCount}</h3>
    <input type="number" placeholder="Credit" class="credit">
    <select class="grade">
      <option value="4.0">AA</option>
      <option value="3.5">BA</option>
      <option value="3.0">BB</option>
      <option value="2.5">CB</option>
      <option value="2.0">CC</option>
      <option value="1.5">DC</option>
      <option value="1.0">DD</option>
      <option value="0.0">FF</option>
    </select>
  `;

  form.appendChild(div);
}

function calculateGPA() {
  const credits = document.getElementsByClassName("credit");
  const grades = document.getElementsByClassName("grade");

  let totalCredits = 0;
  let weightedSum = 0;

  for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const grade = parseFloat(grades[i].value);

    if (!isNaN(credit) && !isNaN(grade)) {
      totalCredits += credit;
      weightedSum += credit * grade;
    }
  }

  const gpa = (weightedSum / totalCredits).toFixed(2);
  document.getElementById("result").textContent = `Your GPA: ${gpa}`;
}
