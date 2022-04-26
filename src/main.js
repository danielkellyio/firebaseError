import { createApp } from 'vue'
import App from './App.vue'
import firebaseConfig from '@/config/firebase'
import { initializeFirebaseApp } from "firebase/app"
initializeFirebaseApp(firebaseConfig);
createApp(App).mount('#app')
