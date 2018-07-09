// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
Vue.use(Vuex);

import $ from 'jquery';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入validate校验
import '@/common/js/validate.js';

//引入省、市、区三级联动
import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    caseDetails: {},
    caseSource: {},
    facilityDetails: {},
    facilitySource: {},
    caseValue: "",
    caseInput: "",
    facilityValue: "",
    facilityInput: "",
    favoriteCount: 0,
    buyInfoObj: {},
  },
  mutations: {
    changeCaseDetails(state, params) {
      state.caseDetails = params;
      window.sessionStorage.setItem("caseDetails", JSON.stringify(state.caseDetails))
    },
    changeCaseSource(state, params) {
      state.caseSource = params;
      window.sessionStorage.setItem("caseSource", JSON.stringify(state.caseSource))
    },
    changeFacilityDetails(state, params) {
      state.facilityDetails = params;
      window.sessionStorage.setItem("facilityDetails", JSON.stringify(state.facilityDetails))
    },
    changeFacilitySource(state, params) {
      state.facilitySource = params;
      window.sessionStorage.setItem("facilitySource", JSON.stringify(state.facilitySource))
    },
    changeCaseInput(state, params) {
      state.caseValue = params.value;
      state.caseInput = params.input;
    },
    changeFacilityInput(state, params) {
      state.facilityInput = params.value;
      state.facilityInput = params.input;
    },
    addCollection(state, params) {
      state.favoriteCount++
    },
    subtractCollection(state, params) {
      state.favoriteCount--
    },
    changeBuy(state, params) {
      state.buyInfoObj = params;
      window.sessionStorage.setItem("buyInfoObj", JSON.stringify(state.buyInfoObj));
    },
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
