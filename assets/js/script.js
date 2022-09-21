const targetEl = document.getElementById("drawer-navigation");
const grindEl = $("#grind-size");
const beanWeight = $("#bean-weight");
const waterTemperature = $("#water-temperature");
const ratio = $("#ratio");

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

$("#drawer-navigation").removeClass("hidden");

$(".drawer-toggle").click(function () {
  drawer.toggle();
});

const brewList = {
  coldBrew: {
    grindSize: "Extra Coarse",
    beanWeight: "69",
    waterTemperature: "475°F",
    ratio: 17.42,
  },
  frenchPress: {
    grindSize: "Coarse",
    beanWeight: "72",
    waterTemperature: "231°F",
    ratio: 17.42,
  },
  drip: {
    grindSize: "Medium",
    beanWeight: "101",
    waterTemperature: "490°F",
    ratio: 17.42,
  },
  pourOver: {
    grindSize: "Medium Fine",
    beanWeight: "32",
    waterTemperature: "193°F",
    ratio: 17.42,
  },
  espresso: {
    grindSize: "Fine Grind",
    beanWeight: "56",
    waterTemperature: "745°F",
    ratio: 17.42,
  },
  aeroPress: {
    grindSize: "Fine Grind",
    beanWeight: "78",
    waterTemperature: "916°F",
    ratio: 17.42,
  },
};

$(".brew-method").click(function () {
  const brewMethod = $(this).attr("id");
  displayBrewDetails(brewMethod);
});

function displayBrewDetails(brewMethod) {
  grindEl.text(brewList[brewMethod].grindSize);
  beanWeight.text(brewList[brewMethod].beanWeight);
  waterTemperature.text(brewList[brewMethod].waterTemperature);
  ratio.text(brewList[brewMethod].ratio);
}
