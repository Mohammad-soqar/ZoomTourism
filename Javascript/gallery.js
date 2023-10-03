$(document).ready(function () {
  const $thumbnails = $(".thumbnail");
  const $popup = $(".popup");
  const $popupContent = $(".popup-content");

  $thumbnails.click(function () {
    const $selectedImage = $(this);
    const imagePath = $selectedImage.attr("src");

    $popupContent.attr("src", imagePath);
    $popup.show();
  });

  $(".close-popup").click(function () {
    $popup.hide();
  });
});
