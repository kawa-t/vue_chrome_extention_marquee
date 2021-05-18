import Vue from "vue";
import App from "./App.vue";

(function() {
  "use strict";
  document
    .querySelector("body")
    .insertAdjacentHTML("beforeEnd", `<div id="app"></div>`);
  let vm = new Vue({
    render: (h) => h(App),
  }).$mount("#app");
})();
