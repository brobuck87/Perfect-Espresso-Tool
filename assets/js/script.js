const targetEl = document.getElementById("drawer-navigation");

// options with default values
const options = {
  placement: "left",
  backdrop: true,
  bodyScrolling: false,
  edge: false,
  edgeOffset: "",
  backdropClasses:
    "bg-chocolate-800 dark:bg-chocolate-800 bg-opacity-50 dark:bg-opacity-50 fixed inset-0 z-30",
  onHide: () => {
    console.log("drawer is hidden");
  },
  onShow: () => {
    console.log("drawer is shown");
  },
  onToggle: () => {
    console.log("drawer has been toggled");
  },
};

const drawer = new Drawer(targetEl, options);
