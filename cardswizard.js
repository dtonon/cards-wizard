function open_block(n) {
  
  document.body.style.setProperty("--bg-opacity", 0.15 * n);
  const blocks = document.getElementById("cardswizard").querySelectorAll(".block");
  var fade = true;
  blocks.forEach((element, index) => {
    if (element.id == 'block' + n) {
      element.classList.add("open");
      fade = false;
    } else {
      element.classList.remove("open");
    }
    if (fade) {
      var brightness = 1.0 - (n - index*index) * 5.0 / 100.0;
      element.querySelector(".block_title").style.filter = "brightness(" + brightness + ")";
      element.style.transform = "scale(" + (100.0 - (n - index) * 5) / 100 + ")";
      element.style.setProperty("margin-bottom", "-" + (6 + n*3 - index*3) + "px");
    } else {
      element.querySelector(".block_title").style.filter = "brightness(1)";
      element.style.transform = "scale(1)";
      element.style.removeProperty("margin-bottom");
    }
  });

  // Custom logic

  if (n == 0) {
    document.getElementById("block0").classList.remove("clickable");
  } else {
    document.getElementById("block0").classList.add("clickable");
  }

  var wizard_restart_element = document.getElementById("wizard_accordion").querySelector(".wizard_restart");
  if (n > 1) {
    if (wizard_restart_element) { wizard_restart_element.style.display = 'inline'; }
    document.getElementById("block1").classList.add("clickable");
  } else {
    if (wizard_restart_element) { wizard_restart_element.style.display = 'none'; }
    document.getElementById("block1").classList.remove("clickable");
  }

}