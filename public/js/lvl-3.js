function get_flag(){
  $.ajax({
    type:'get',
    datatype :'json',
    url:'/lev3_flag'
  }).done(function(data){
      $("#result").html(data.string);
  });
}
