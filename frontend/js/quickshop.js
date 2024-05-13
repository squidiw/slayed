const $allQSButtons = document.querySelectorAll("button[data-quickshop]");

async function fetchQuickShopComponentByHandle(handle) {
	return fetch(`/products/${handle}?view=quickshop`).then(res => res.text());
}

function clearShopModal() {
	document.getElementById("theme-quickshop-modal").innerHTML = "";
}

async function clickHandler(event) {
	const {
		dataset: { quickshop },
	} = event.target;

	const quickshopComponent = await fetchQuickShopComponentByHandle(quickshop);

	document.getElementById("theme-quickshop-modal").innerHTML =
		quickshopComponent;

	document
		.querySelector("#theme-quickshop-modal .close-btn")
		.addEventListener("click", clearShopModal);
}

Array.from($allQSButtons).forEach($btn =>
	$btn.addEventListener("click", clickHandler)
);
