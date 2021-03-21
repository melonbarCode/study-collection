// Write JQuery code here!
const $wrapper = $(".wrapper");
const $items = $wrapper.find(".item");

/* 두개로 하는 방법 */
// $wrapper.on("click", ".item", function (e) {
//   e.stopPropagation();

//   $(this).toggleClass("open").siblings().removeClass("open");
// });

// $("body").on("click", function (e) {
//   $items.removeClass("open");
// });

/* 한개로 하는 방법 최적화에는 약간 불리해 보인다.*/

// $("body").on("click", function (e) {
//   const item = $(e.target);
//   if (item.is(".item")) {
//     item.toggleClass("open").siblings().removeClass("open");
//   } else {
//     $items.removeClass("open");
//   }
// });
