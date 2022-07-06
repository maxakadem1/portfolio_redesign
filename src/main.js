import App from "./App.svelte";

var app = new App({
  target: document.body,
});

options = {
  cursorOuter: "circle-basic",
  hoverEffect: "circle-move",
  hoverItemMove: false,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);

export default app;
