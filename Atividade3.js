// Jose Jesus

var  Nomes = new Array( "Andre" , "Jesus" , "Gilberto" , "Glaucio" , "Lohanna");

Nomes.push( "Marcio");
Nomes.unshift( "Brenda");

Nomes.pop() ;


////
for( let i = 0; i <= 5; i++ )  {

    console.log( Nomes[ i ]);

}
////

var pares = [ 2, 4, 6, 8 ];

var Array_dobrado  =  pares.map( valor => valor * 2) ;

console.log( Array_dobrado);
/////

var impares  =  [ 1, 3, 5, 7, 9]  ;

var Maior_q_5  =  impares.filter( num => num > 5) ;

console.log( Maior_q_5 ) ;