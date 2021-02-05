import Vue from "vue";
import axios, { AxiosStatic } from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || "http://localhost:3000/";
axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
Vue.prototype.$axios = axios;