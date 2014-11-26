$("input[type=checkbox]").click(function(){
  var $this = $(this);
  setTimeout(function(){
    $this.siblings("#notification-bar").toggleClass("hide", "block");
  }, 500, $this);
});
