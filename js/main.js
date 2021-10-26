let inputs = document.querySelectorAll(".contact input");

inputs.forEach((input) => {
  input.oninput = function () {
    let maxLength = input.getAttribute("maxlength");
    let count = input.value.length;
    let firstProgress = document.querySelector(
      ".contact .progress:first-of-type"
    );
    let secProgress = document.querySelector(".contact .progress:last-of-type");
    if (inputs[0] == input) {
      firstProgress.style.width = `${(count * 100) / maxLength}%`;
    } else if (inputs[1] == input) {
      secProgress.style.width = `${(count * 100) / maxLength}%`;
    }
  };
});
