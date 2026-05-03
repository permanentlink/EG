function attachMenuToggle() {
  const $nav = $('#main-nav');
  const $icon = $('#menu-icon');

  $('#menu-toggle').on('click', () => {
    $nav.toggle();
    $icon.attr('src', $nav.is(':visible') ? 'close.svg' : 'menu.svg');
  });
}

async function loadHeaderAndFooter() {
  const headerRes = await fetch('header.html');
  const footerRes = await fetch('footer.html');

  const headerHtml = await headerRes.text();
  const footerHtml = await footerRes.text();

  document.getElementById("site-header").innerHTML = headerHtml;
  document.getElementById("site-footer").innerHTML = footerHtml;

  attachMenuToggle()
}

loadHeaderAndFooter();

function addToCart(product) {
  alert(product + " was added to cart");
}

function toggleInfo(descId, btn) {
  const $desc = $(`#${descId}`);
  $desc.toggle();
  btn.textContent = $desc.is(':visible') ? 'Hide Info' : 'Info';
}

$(document).ready(function() {
  $('.carousel').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1
  });
});