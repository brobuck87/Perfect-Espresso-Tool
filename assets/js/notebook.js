const grindEl = $("#grind");
const beanEl = $("#bean");
const tempEl = $("#temp");
const ratioEl = $("#ratio");
const saveButton = $("#save");
const tableEl = $("#brew-table");

saveButton.click(function (event) {
  event.preventDefault();
  // pull current local storage array if it exits, parse it (because it will be a string)
  const pastBrewDetails = JSON.parse(localStorage.getItem("brewArray")) || [];

  const brewDetails = {
    grind: grindEl.val(),
    bean: beanEl.val(),
    temp: tempEl.val(),
    ratio: ratioEl.val(),
  };

  // add object to array from form
  console.log(pastBrewDetails);
  pastBrewDetails.push(brewDetails);

  localStorage.setItem("brewArray", JSON.stringify(pastBrewDetails));
  buildTable();
});

function buildTable() {
  // ADD TRASHCAN IN FUTURE PR FOR USER DELETION

  // empty current table
  tableEl.text("");
  // pull local storage and parse it
  const pastBrewDetails = JSON.parse(localStorage.getItem("brewArray"));
  if (!pastBrewDetails) {
    return;
  }
  // loop over array of objects
  pastBrewDetails.forEach((element) => {
    const tr = $("<tr>");
    const grindTd = $("<td>")
      .text(element.grind)
      .addClass("text-center bg-espresso-700 py-3 text-ltcrm");
    const beanTd = $("<td>").text(element.bean).addClass("text-center py-3 text-ltcrm");
    const tempTd = $("<td>")
      .text(element.temp)
      .addClass("text-center bg-espresso-700 py-3 text-ltcrm");
    const ratioTd = $("<td>").text(element.ratio).addClass("text-center py-3 text-ltcrm");
    tr.append([grindTd, beanTd, tempTd, ratioTd]);
    // append to table
    tableEl.append(tr);
  });
}

$("#brew-results").click(function () {
  $("#brew-results").addClass("hidden");
  $("#form").removeClass("hidden");
});

buildTable();
