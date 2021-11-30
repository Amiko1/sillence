import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icons from './components/icons/index.vue'

const silenceApp = createApp(App)

const requireComponent = require.context(
  "./components/base",
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
  silenceApp.component(baseComponentName, baseComponentConfig);
});

silenceApp.use(store)
silenceApp.use(router)

silenceApp.component('Icon', Icons)

silenceApp.mount('#app')
