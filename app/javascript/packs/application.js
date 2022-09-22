// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
require("@fortawesome/fontawesome-free")
// require("bootstrap")

import { runSlides } from "./plugins/questions"
import { initSmoothScroll } from "./plugins/home-first-banner"
import "channels"
import "controllers"
import "bootstrap"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('turbolinks:load', () => {
  runSlides(),
  initSmoothScroll()
});
