// Jose Jesus

function My_Function_Calcular(  precounitario,  quantidade)  {

    var Total = precounitario  *  quantidade;
    return Total ;

}

function  Desconto(  valor ) {

    var desconto = 0 ;
    var valor_final = 0;

    if( valor > 100 )  {

        desconto = 0.1 * valor;
        valor_final  =  valor - desconto;

    }

    else {

        console.log( "Muito barato, sem desconto !!") ;
        valor_final  =  valor ;
    }

    return  valor_final;

}

function Retornar_Valores( valor_antes, valor_depois ) {

    console.log( "O valor antes era" +  valor_antes  );
    console.log( "O valor agora e" + valor_depois );
    
    }


    var dinheiro =   parseFloat( prompt( "Informe qual o preco do produto" ) );
    var numero =      parseInt( prompt( "Informe quantos itens vai levar" ) );
    

///////////////
if(  !isNaN( numero )  &&  !isNaN( dinheiro ) )  {

    var valor_antes  =  My_Function_Calcular( dinheiro ,  numero) ;
    var valor_depois  = Desconto( valor_antes )

    Retornar_Valores( valor_antes, valor_depois ) ;

}
