const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".project-panel");
const navTabs = document.querySelectorAll("[data-tab-link]");

function selectProject(target) {
  tabs.forEach((item) => {
    const isSelected = item.dataset.target === target;
    item.classList.toggle("is-active", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
  });

  navTabs.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.tabLink === target);
  });

  panels.forEach((panel) => {
    const isSelected = panel.id === target;
    panel.classList.toggle("is-active", isSelected);
    panel.hidden = !isSelected;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectProject(tab.dataset.target);
  });
});

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectProject(tab.dataset.tabLink);
  });
});
