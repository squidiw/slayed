import "liquid-ajax-cart";

import Alpine from "alpinejs";
import AlpineCollapse from "@alpinejs/collapse";
import AlpineFocus from "@alpinejs/focus";
import AlpineMorph from "@alpinejs/morph";
import AlpineWire from "../js/alpine/plugins/wire";
import AlpineGlobals from "../js/alpine/index.js";
import helpers, { hasBodyClass } from "../js/helpers.js";
import "@splidejs/splide/css";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Dynamic imports
hasBodyClass("product-template") && import("../js/prodify.js");

//Splide
window.Splide = Splide;
window.SplideScroll = AutoScroll;

//Loop for default Splide Slider
const splideSliders = document.querySelectorAll(".splide.default");
splideSliders.forEach(slider => {
	new Splide(slider).mount();
});

//Loop for marquee Splide Slider
const splideMarquees = document.querySelectorAll(".splide.marquee");
splideMarquees.forEach(marquee => {
	new Splide(marquee).mount({ AutoScroll });
});

// Lookbook Slider
const splideLookBook = document.querySelectorAll(".splide.lookbook");
let customDots = document.querySelectorAll(".custom-dot");

splideLookBook.forEach(slider => {
	let splide = new Splide(slider).mount();
	customDots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			splide.go(index);
		});
	});
});

// Splide End

const ns = "slayed";

window.slayedNamespace = ns;
window[ns] = window[ns] || {};
window[ns].helpers = helpers;

for (const [key, value] of Object.entries(helpers)) {
	window[ns].helpers[key] = value;
}

// Register and initialize AlpineJS
window.Alpine = Alpine;

Alpine.plugin([AlpineCollapse, AlpineFocus, AlpineWire, AlpineMorph]);
AlpineGlobals.register(Alpine);
Alpine.start();

// Hide the Shopify preview bar when in development
// if (process.env.NODE_ENV === 'development') {
//   //
//   window.addEventListener('DOMContentLoaded', () => {
//     var css = '#preview-bar-iframe { display: none !important; }',
//       head = document.head || document.getElementsByTagName('head')[0],
//       style = document.createElement('style')

//     head.appendChild(style)

//     style.appendChild(document.createTextNode(css))
//   })
// }
