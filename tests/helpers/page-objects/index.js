import { click } from "@ember/test-helpers";

const indexPage = {
  url: "/",

  selectors: {
    questionItem: ".question--item",
    tagDiv: ".index--tags > span:nth-child(1)",
    pageTwo: "ul.pagination > li:nth-child(3) > a",
  },

  clickTag() {
    return click(this.selectors.tagDiv);
  },

  goToSecondPage() {
    return click(this.selectors.pageTwo);
  }

};

export default indexPage;
