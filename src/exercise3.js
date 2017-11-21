 exports.run = function(input) {
  
 

  var array = input;
  var resultat = 1;
  for ( var i=0 ; i < array.length ; i++)
  {
  	if ( array[i].multiply == true )
  	{
  		resultat = resultat * array[i].value ;
  	}
  }
  console.log(resultat);
};
