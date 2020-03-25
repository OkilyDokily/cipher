$(document).ready(function(){
  
  
  
  
  var string = prompt("Enter a sentence") 
  console.log(string);


  $('#first').click(function(){
    $("#sentence").text(string);
    $("#third").slideDown();

  });

  $('#second').click(function(){
    $("#sentence").text(reverseConcatenate(string));
    $("#third").slideDown();

  });

  $('#third').click(function(){
    $("#third").fadeOut();

  });
  // function capitalizeFirstAndLast(string){
  //   var capitalizeFirst = string.replace(/^./,string.charAt(0).toUpperCase());
  //   var capitalizeLast = capitalizeFirst.replace(/.$/,capitalizeFirst.charAt(string.length-1).toUpperCase());
  //   return capitalizeLast;
  // }

  // function switchFirstAndLast(string){
  //   var switchFirst = string.replace(/^./,string.charAt(string.length - 1));
  //   var switchLast = switchFirst.replace(/.$/,string.charAt(0));
  //   return switchLast;
  // }

  function capitalizeFirstAndLast(string){
    var array = string.match(/^.|.$/g)
    return (array[0] + array[1]).toUpperCase();; 
  }

  function switchFirstAndLast(string){
    var array = capitalizeFirstAndLast(string);
    return array[1] + array[0];
  }

  function concatenateSwitch(string){
    return string + switchFirstAndLast(string);
  }

  function reverseConcatenate(string){
    return concatenateSwitch(string).split("").reverse().join("");
  }
  


  
  















});