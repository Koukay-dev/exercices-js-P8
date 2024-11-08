document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  button.addEventListener(
    "click",
    () =>
      (document.getElementById("paragraphe").innerText =
        "Bonjour, vous avez cliqué sur le bouton !")
  );
});
