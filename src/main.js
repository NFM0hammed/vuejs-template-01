import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./sass/main.scss";
import "./sass/global/normalize.css";

// Import library to push font awesome
import { library } from "@fortawesome/fontawesome-svg-core";

// Import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import icons of solid style
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

// Import icons of regular style
import { faUser } from "@fortawesome/free-regular-svg-icons";

// Import icons of brands style
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* Add icons to the library */
library.add({
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faUser,
  faMagnifyingGlass,
  faBars,
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
