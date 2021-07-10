$(document).ready(function(){
  init()

  function init(){
    var url="https://api.covid19api.com/summary"
    var data= ''
    $.get(url,function(data){
      console.log(data.Global)
      data = `
      
      <td style="color:white">${data.Global.TotalConfirmed}</td>
      <td style="color:white">${data.Global.TotalRecovered}</td>
      <td style="color:white">${data.Global.TotalDeaths}</td>

      `
      $("#data").html(data)
      
    })
  }
  $('button').click(function (){
    clearData()
  });
  function clearData(){
    init()
  }
})

