import Vue from 'vue';
import App from './App.vue';

export function createApp() {
    const app = new Vue({
        el: "#app",
        render: h => h(App)
    })
    return {app}
}