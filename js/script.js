(function(window, $){
  $(function(){
    $("form").bind("submit", function(e){
      e.preventDefault();
      $("#password").val('');

      $("#status").text("probably").addClass("yes");
    });
  });
})(window, jQuery);
