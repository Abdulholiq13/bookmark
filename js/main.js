const modifiers = {
  tabItemActive: "tabs__item--active",
  tabPAnelActive: "tabs__panel--active",
  accordionItemOpen: "accordion__item--open",
};

const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabsPanel = document.querySelectorAll(".tabs__panel");
const elsTabLink = document.querySelectorAll(".js-tab-link");

const elsAccordionItem = document.querySelectorAll(".accordion__item");
const elsAccordionItemToggler = document.querySelectorAll(
  ".accordion__item-toggler"
);

function deactivateTabItem() {
  elsTabsItem.forEach(function (elsTabsItem) {
    elsTabsItem.classList.remove(modifiers.tabItemActive);
  });
}

function deactivateTabPanels() {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabPAnelActive);
  });
}

function closeAccordionItems() {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
}

elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener("click", function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class form tabs__item elements
    deactivateTabItem();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabPAnelActive);
  });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener("click", function () {
    closeAccordionItems();

    elAccordionItemToggler
      .closest(".accordion__item")
      .classList.add("accordion__item--open");
  });
});
