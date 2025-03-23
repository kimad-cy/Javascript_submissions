import { createApp } from 'vue'; // Import createApp from 'vue'
import App from './App.vue';
import router from './router';

const app = createApp(App); // Create the Vue app instance
app.use(router); // Use the router
app.mount('#app'); // Mount the app to the DOM
