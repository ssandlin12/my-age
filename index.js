const currentYear = 2023;

function findAge() {
  let month = prompt('What month were you born?');

  switch (month) {
    case "January":
    case "February":
    case "March":
    case "April":
    case "May":
      month = "early in year";
      break;
    default:
      month = "late year";
      break;
  }

  let year = prompt('What year were you born?');
  let age = currentYear - year;

  if (month === "early in year") {
    return (`You're ${age} years old.`);
  } else {
    return (`You're ${age - 1} years old.`);
  }
}

document.getElementById("findMyAge").addEventListener("click", function() {
  let result = findAge();
  document.getElementById("resultContainer").textContent = result;
});
