// main.js
import {setupTabs} from "./js/tabs.js";
import {setupConverter} from ".//js/converter.js";

document.addEventListener('DOMContentLoaded', setupTabs);

document.addEventListener("DOMContentLoaded",() => {
    setupTabs();
    setupConverter();
});