const targetEl = document.getElementById("drawer-navigation");
const grindEl = $("#grind-size");
const espressoEl = $("#espresso");
const coldBrewEl = $("#cold-brew");
const dripEl = $("#drip");
const aeroEl = $("#aero-press");
const frenchEl = $("#french-press");
const pourEl = $("#pour-over");

// options with default values
const options = {
  placement: "left",
  backdrop: true,
  bodyScrolling: false,
  edge: false,
  edgeOffset: "",
  backdropClasses:
    "bg-ltcrm dark:bg-chocolate-800 bg-opacity-50 dark:bg-opacity-50 fixed inset-0 z-30",
};

const drawer = new Drawer(targetEl, options);

$('.drawer-toggle').click(function () {
  drawer.toggle()
});

const brewList = {
  "cold-brew": {
    "grind-size": "Extra Coarse",
    "bean-weight": "",
    "water-temperature": "",
    "ratio": 17.42
  },
  "french-press": {
    "grind-size": "Coarse",
    "bean-weight": "",
    "water-temperature": "",
    "ratio": 17.42
  },
  "drip": {
    "grind-size": "Medium",
    "bean-weight": "",
    "water-temperature": "",
    "ratio": 17.42
  },
  "pour-over": {
    "grind-size": "Medium-Fine",
    "bean-weight": "",
    "water-temperature": "",
    "ratio": 17.42
  },
  "espresso": {
    "grind-size": "Fine Grind",
    "bean-weight": "",
    "water-temperature": "",
    "ratio": 17.42
  },
  "aero-press": {
    "grind-size": "Fine Grind",
    "bean-weight": "",
    "water-temperature": "",
    "ratio": 17.42
  }
}
[espressoEl, coldBrewEl, dripEl, aeroEl, frenchEl, pourEl].forEach((element) => {
  element.click((e) => {
    grindEl.text(brewList[element.attr('id')].grind - size)
    // console.log("I'm amazing")
    // console.log(brewList[element.attr('id')], element, grindEl)
    // console.log(grindEl)
  });
});

// Listen to click for each element
// Based on click select the right grind size
// Put grind size onto the page