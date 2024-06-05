import { createApp } from 'vue';
import App from './App.vue';
import Lista from './components/Lista.vue';
import Formulario from './components/Formulario.vue';
import Recurso from './components/Recurso.vue';
import Vmodal from './components/Ventamodal.vue';

const app = createApp(App);
app.component('Lista', Lista);
app.component('Form', Formulario);
app.component('Recurso', Recurso);
app.component('Vmodal', Vmodal);
app.mount('#app');
