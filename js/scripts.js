$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userinput = $("input#userinput").val();
    const userInputUpper = userinput.toUpperCase();
    $(".userinput").text(userInputUpper); 

    $("#return").show();
  });
});

/*   $(".userinput").text(userinput).toUpperCase(); */