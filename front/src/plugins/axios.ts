import Vue from "vue";
import axios, { AxiosStatic } from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
Vue.prototype.$axios = axios;

declare module 'vue/types/vue' {
    interface Vue {
      $axios: AxiosStatic;
    }
  }