import './assets/main.css';
import './index.css';
import './styles/index.scss';
import 'primevue/resources/themes/aura-light-green/theme.css';
//Vue
import { createApp } from 'vue';
import MultipleChoiceOptions from './components/MultipleChoiceOptions.vue';
// PrimeVue
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';

// Pinia
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import NavBar from './components/NavBar.vue';
import TimerClock from './components/TimerClock.vue';
import FlipCard from './components/FlipCard.vue';
import BannerMessage from './components/BannerMessage.vue';
import QuizQuestionResult from './components/QuizQuestionResult.vue';
import VocabCard from './components/VocabCard.vue';


const app = createApp(App);
const pinia = createPinia();

// Pinia
app.use(pinia);
// PrimeVue
app.use(PrimeVue, { unstyled: true });
app.use(ToastService);
app.component("PrimeButton", Button);
app.component("PrimeCard", Card);
app.component("NavBar", NavBar);
app.component("TimerClock", TimerClock);
app.component("MultipleChoiceOptions", MultipleChoiceOptions);
app.component("FlipCard", FlipCard);
app.component("BannerMessage", BannerMessage);
app.component("QuizQuestionResult", QuizQuestionResult);
app.component("VocabCard", VocabCard);

app.use(router);

app.mount("#app");
