$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userinput = $("input#userinput").val();
//    const userInputUpper = userinput.toUpperCase();
    $(".userinput").text(userinput.toUpperCase()); 

    $("#return").show();
  });
});

/*   $(".userinput").text(userinput).toUpperCase(); */