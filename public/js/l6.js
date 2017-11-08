function login(){
  var u = $("#user").val().trim();
  var p = $("#pass").val().trim();
  $.ajax({
    type:'post',
    datatype :'json',
    data:{user:u, password:p},
    url:'/l6'
  }).done(function(data){
    if(data[0]==1){
      $("#form").remove();
      $("#result").html(data[1] + "<br>" + data[2]);
    }
    else{
      $("#result").html(data[1]);
    }
  });
}
