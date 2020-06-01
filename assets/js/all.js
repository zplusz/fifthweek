"use strict";

$(document).ready(function () {
  var show = document.getElementById('reply-show');
  var hide = document.getElementById('cancel');

  show.onclick = function () {
    var obj = document.getElementById("reply");
    obj.style.display = "block";
  };

  hide.onclick = function () {
    var obj = document.getElementById("reply");
    obj.style.display = "none";
  };
});
//# sourceMappingURL=all.js.map
