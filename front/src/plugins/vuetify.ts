import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {VSnackbar, VBtn, VIcon} from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
import { Framework } from 'vuetify'
import VuetifyToast from 'vuetify-toast-snackbar-ng'

declare module 'vue/types/vue' {
  // this.$vuetify inside Vue components
  interface Vue {
    $vuetify: Framework
  }
}

Vue.use(Vuetify, {
    components: {
      VSnackbar,
      VBtn,
      VIcon
    }
  });
Vue.use(VuetifyToast, {
	x: 'center', // default
	y: 'top', // default
	color: 'red', // default
	icon: 'info',
	iconColor: '', // default
	classes: [
		'body-2'
	],
	timeout: 2000, // default
	dismissable: true, // default
	multiLine: false, // default
	vertical: false, // default
	queueable: false, // default
	showClose: true, // default
	closeText: '', // default
	closeIcon: 'close', // default
	closeColor: '', // default
	slot: [], //default
	shorts: {
		custom: {
			color: 'purple'
		}
	},
	property: '$toast' // default
})
export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
    theme: {
        themes: {
            light: {
                background: colors.shades.white,
            },
            dark: {
                background: colors.shades.black
            }
        }
    }
});
