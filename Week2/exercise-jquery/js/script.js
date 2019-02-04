// $(".element").click(function(event) {
//     alert("DOM is Loaded");
//   });

  $("p").click(function() {
      $(this).remove()
  })

  $("button").click(function() {
      $("p").remove()
  })

  $(document).ready(function(){
      $(".popup").click(function(event){
          alert( "Hi");
      });
  });







