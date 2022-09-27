var grindEl = document.querySelector("#grind");
var beanEl = document.querySelector("#bean");
var tempEl = document.querySelector("#temp");
var ratioEl = document.querySelector("#ratio");
var saveButton = document.querySelector("#save");

formRows = [grindEl, beanEl, tempEl, ratioEl];

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var brewDetails = {
    grind: grindEl.value,
    bean: beanEl.value,
    temp: tempEl.value,
    ratio: ratioEl.value,
  };

  localStorage.setItem("brewDetails", JSON.stringify(brewDetails));
  addRow();
});

function addRow() {
  formRows.forEach((element) => {
    let firstRow = document.createElement("input");
    element.append(firstRow);
  });
}

$("#brew-results").click(function () {
  $("#brew-results").addClass("hidden");
  $("#form").removeClass("hidden");
});
