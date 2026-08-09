self.addEventListener("install", () => {
  fetch("./EEWR-manifest.json");
});
console.log("Hay!")
