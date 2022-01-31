import Vue from "vue";
import Vuex from "vuex";
import bikes from "./modules/bikes";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    bikes,
  },
});
