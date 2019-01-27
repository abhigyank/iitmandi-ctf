function get_flag(){
  $.ajax({
    type:'get',
    datatype :'json',
    url:'/lev5_flag'
  }).done(function(data){
      $("#result").html(data.string);
  });
}
