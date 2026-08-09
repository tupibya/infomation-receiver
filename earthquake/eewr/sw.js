self.addEventListener("install", () => {
  fetch("./manifest.json");
});
