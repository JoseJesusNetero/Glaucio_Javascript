const jsonString = '[{"nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"}]';

////////////////////////////////

const alunos = JSON.parse(jsonString);

////////////////////////////////

function  Devolver_Aprovados( Objeto )        {
  
 //////// 
 for( let i = 0;  i <  Objeto.length;  i++ )   {
   
   let soma = 0;
   
   for (  let  j  =  0;  j  <  Objeto[ i ].notas.length; j++ )  {
     
     soma +=  Objeto[ i ].notas[ j ] ;
 
                                                             }                                                               
    //////////
    if  (  (soma /  3 )  >=  7.0 )
    
      console.log( " A  media da pessoa " + Objeto[ i ].nome  + " e " + ( soma /  3 ).toFixed( 2 )  +  " do curso " + Objeto[ i ].curso  +  "\n" );
    
                                                                                                                            }   
                                                                                                                              }
                                                                                                                              
/////////////                                                                                                                                                                                                                                                       
Devolver_Aprovados( alunos ) ;
                     