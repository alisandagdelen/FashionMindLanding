/**
 * Custom JS for theme elements
 */


// WRAP product title and price in new div for latest product section
let warbleproductDivs = document.querySelectorAll('.wp-block-latest-products .wc-block-grid__product')
if (warbleproductDivs !== null) {
	warbleproductDivs.forEach((productDiv) => {

		let warbleproductInfoWrap = document.createElement('div')
		warbleproductInfoWrap.classList.add('wp-product-info-wrap')

		let warbleproductLink = productDiv.querySelector('.wc-block-grid__product-link')
		let warbleproductPrice = productDiv.querySelector('.wc-block-grid__product-price')
		let warbleproductTitle = productDiv.querySelector('.wc-block-grid__product-title')
		let warbleproductReview = productDiv.querySelector('.wc-block-grid__product-rating')

		warbleproductInfoWrap.appendChild(warbleproductTitle)
		warbleproductInfoWrap.appendChild(warbleproductPrice)

		if (warbleproductReview !== null) {
			warbleproductInfoWrap.appendChild(warbleproductReview)
		}

		warbleproductLink.after(warbleproductInfoWrap)

	})
}


// ADD CLASS WHILE SECTION IS IN VIEWPORT

var warbleisInViewport = function (elem) {
	var warbledistance = elem.getBoundingClientRect();
	var warblewindowHeight = window.innerHeight || document.documentElement.clientHeight;
	// Calculate the middle of the element
	var warbleelementMiddle = warbledistance.top + warbledistance.height / 2;
	return (
		warbleelementMiddle >= 0 &&
		warbleelementMiddle <= warblewindowHeight
	);
};
var warblesections = document.querySelectorAll('.wp-block-section');
if (warblesections !== null) {
	window.addEventListener('scroll', function (event) {
		// add event on scroll
		warblesections.forEach(element => {
			//for each .thisisatest
			if (warbleisInViewport(element)) {
				//if in Viewport
				element.classList.add("transition-element");
			}
		});
	}, false);
}


function warbleCartUpdate() {
	let warblebtnTrigger = document.querySelector('button[name="update_cart"]');
	if (warblebtnTrigger !== null) {
		warblebtnTrigger.addEventListener('click', function () {
			setTimeout(function () {
				warbleQtyChange();
			}, 5000);
			setTimeout(function () {
				warbleCartUpdate();
			}, 5000);
		});
	}
}
warbleCartUpdate();

// Added to cart text change when product added
let warblecartBtn = document.querySelectorAll('.add_to_cart_button');
if (warblecartBtn !== null) {
	warblecartBtn.forEach((item) => {
		let warbletext = 'added to cart';
		item.addEventListener('click', function () {
			item.innerHTML = warbletext;
		});
	});
}

// Sticky Mobile Icon Menu body padding bottom
let warblefixedMenu = document.querySelector('.wp-mobile-icon-menu');
if (warblefixedMenu !== null) {
	document.body.style.paddingBottom = `${warblefixedMenu.clientHeight}px`;
}


// add reset password title for reset password form
let warblepassTitle = document.createElement('h3');
let warblenode = document.createTextNode('Reset Your Password');

warblepassTitle.appendChild(warblenode);

let warbleelement = document.querySelector('.woocommerce-lost-password .woocommerce');
let warblechild = document.querySelector('.lost_reset_password');
if (warbleelement !== null) {
	warbleelement.insertBefore(warblepassTitle, warblechild);
}


//  FOR HEADER PRODUCT SEARCH 

const warblesearchInput = document.querySelector('.wp-header-right .search-product input[type="search"]');
const warblemobileIcon = document.querySelector('.wp-mobile-icon-menu');
const warblesearchCont = document.querySelectorAll('.wp-header-right');
const warblesearchDummy = document.querySelector('.dummy-icon .wp-block-search__button');
const warblesearchWrap = document.querySelector('.wp-header-right .search-product');
const warbleShowHandler = (e) => {
	e.preventDefault();
	let warblebody = document.body;
	warblebody.classList.toggle('search-toggle');
}
if (warblesearchCont !== null) {
	warblesearchCont.forEach((item) => {
		let warblesearchBtn = document.querySelectorAll('.dummy-icon .wp-block-search__button')
		warblesearchBtn.forEach((btn) => {
			btn.addEventListener('click', warbleShowHandler)
		})
	})
	if (warblemobileIcon !== null && warblesearchCont !== null && warblesearchWrap !== null && warblesearchDummy !== null) {
		document.addEventListener('click', function (e) {
			if (!warblesearchWrap.contains(e.target) && !warblesearchDummy.contains(e.target) && !warblemobileIcon.contains(e.target)) {
				let warblebody = document.body;
				warblebody.classList.remove('search-toggle')
			}
		}
		)
	}
}

// header media load animation
let warblebannerWrap = document.querySelector('.wp-block-custom-header-media')
if (warblebannerWrap !== null) {
	setTimeout(() => warblebannerWrap.classList.add('show'), 200);
}


// ADD CUSTOM CSS FOR SHOWING CURRENT_MENU_ITEM CLASS

document.body.querySelectorAll('.wp-block-navigation').forEach(function (navBlock) {
	if (navBlock !== null) {
		navBlock.querySelectorAll('[href="' + window.location.href + '"]').forEach(function (navActiveLink) {
			navActiveLink.parentNode.classList.add('current-nav-item');
		});
	}
});