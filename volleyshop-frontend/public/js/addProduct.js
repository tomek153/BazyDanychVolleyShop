$(".nav-add-product a").on("click", function() {
    
  $(".nav-add-product a").removeClass("active");
  $(this).addClass("active");
  
  var id = "v-pills-"+$(this).attr("name");
  $(".tab-content-add-product div").removeClass(["active", "show"]);
  $("#"+id).addClass(["active", "show"]);
  console.log(id);
});

