import Vue from "vue";
import axios, { AxiosStatic } from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
Vue.prototype.$axios = axios;

