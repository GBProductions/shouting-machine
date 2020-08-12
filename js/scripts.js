$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const userinput = $("input#userinput").val();
    $(".userinput").text(userinput);

    $("#return").show();
     
    event.preventDefault();

  });
});