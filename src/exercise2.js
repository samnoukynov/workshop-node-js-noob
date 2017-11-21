exports.run = function(input) {
  
  var chiffre = 0 ;
  var array = input.split("");
  for ( var i=0 ; i < array.length ; i++)
  {
  	if (chiffre < array[i])
  	{
  		chiffre = array[i];
  	}
  }
  console.log(chiffre);
}