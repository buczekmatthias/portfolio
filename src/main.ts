import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue3-lazyload";

import { getTranslation } from "@/utils/useTranslations";

import "./css/app.css";

const i18n = getTranslation();

createApp(App).use(i18n).use(VueLazyload, {}).mount("#app");
