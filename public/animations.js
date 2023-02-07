$(document).ready(function () {
  $(".burger-icon").on("click", function () {
    $("header ul").toggleClass("open");

    return false;
  });

  $("#blog").on("click", function () {
    $("#pop-up").slideDown();
    setTimeout(closePop, 5000);

    return false;
  });

  $("#pop-up").on("click", function () {
    closePop();
  });
});

function closePop() {
  $("#pop-up").fadeOut();

  return false;
}
