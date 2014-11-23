$(document).ready(function(){
  function whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }

  var animationEvent = whichAnimationEvent();

  $("#btn-close").click(function(){
    $("#notification-bar").addClass("animate");
    $("#notification-bar").one(animationEvent,
                function(event) {
      // Do something when the animation ends
      $(this).addClass("hide");
    });
  });
});