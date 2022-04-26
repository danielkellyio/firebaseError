import { createApp } from 'vue'
import App from './App.vue'
import firebaseConfig from '@/config/firebase'
import { initializeApp } from "firebase/app"
initializeApp(firebaseConfig);
createApp(App).mount('#app')
