import "alpinejs";

window.tabsScope = () => {
  const Contents = {
    flex: require("../../sections/flex.html"),
    utilities: require("../../sections/utilities.html"),
    grid: require("../../sections/grid.html"),
    layout: require("../../sections/layout.html"),
  };

  const Tabs = Object.keys(Contents);

  return {
    tabs: Tabs,
    currentTab: localStorage.getItem("currentTab") || Tabs[0],

    handleClick(tab) {
      this.currentTab = tab;
      localStorage.setItem("currentTab", tab);
      this.renderContent(tab);
    },

    handleInit() {
      this.renderContent(this.currentTab);
    },

    renderContent(tab) {
      this.$refs.container.innerHTML = Contents[tab];
    },

    isActive(tab) {
      return this.currentTab === tab;
    },
  };
};
