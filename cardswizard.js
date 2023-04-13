function cardsWizard(elementId) {
  var cards_wizard = document.getElementById(elementId);
  var open_card = 0;

  var openCardElements = cards_wizard.querySelectorAll('[data-open-card]');
  for (var i = 0; i < openCardElements.length; i++) {
    openCardElements[i].addEventListener('click', function() {
      var openCardValue = this.getAttribute('data-open-card');
      openCard(openCardValue);
    });
  }

  const cards = cards_wizard.querySelectorAll(".card");
  cards.forEach((card, index) => {
    if (card.hasAttribute('data-clickback')) {
      card.querySelector(".card_title").addEventListener('click', function() {
        clickBack(index);
      });
    }
  });

  function clickBack(n) {
    if (n < open_card) {
      openCard(n);
    }
  };

  function openCard(n) {
    open_card = n;
    document.body.style.setProperty("--bg-opacity", 0.15 * n);
    const cards = document.getElementById("cardswizard").querySelectorAll(".card");
    var fade = true;
    cards.forEach((element, index) => {

      if (element.hasAttribute('data-clickback') && index < n ) {
        element.classList.add("clickback");
      } else {
        element.classList.remove("clickback");
      }

      if (index == n) {
        element.classList.add("open");
        fade = false;
      } else {
        element.classList.remove("open");
      }

      if (fade) {
        var brightness = 1.0 - (n - index*index) * 5.0 / 100.0;
        element.querySelector(".card_title").style.filter = "brightness(" + brightness + ")";
        element.style.transform = "scale(" + (100.0 - (n - index) * 5) / 100 + ")";
        element.style.setProperty("margin-bottom", "-" + (6 + n*3 - index*3) + "px");
      } else {
        element.querySelector(".card_title").style.filter = "brightness(1)";
        element.style.transform = "scale(1)";
        element.style.removeProperty("margin-bottom");
      }
    });
  }

  return {
    openCard: openCard,
  };
  
}