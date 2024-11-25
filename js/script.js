document.getElementById("search_it").addEventListener("click", function () {
  var inputText = document.getElementById("search_text").value;

  if (inputText.trim() === "") {
    alert("Input field is empty. Please enter something.");
  } else {
    alert(" you Searched for " + inputText + "is complete.");
  }
});
$(document).on("click", ".new_user", function () {
  $("#id_of_sign_in_modal").modal("hide");
  $("#id_of_sign_up_modal").modal("show");
});
