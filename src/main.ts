import { createApp } from "vue";
import App from "./App.vue";

import { getTranslation } from "@/utils/useTranslations";
import { router } from "@/utils/useRouter";

import "./css/app.css";

const i18n = getTranslation();

createApp(App).use(i18n).use(router).mount("#app");
