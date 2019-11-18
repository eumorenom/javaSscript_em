
var calculadora ={
  memoria:0,
  tecla: "",
  // logica para totalizar
  total:function (){


      vg_tecla = vg_acum;
      document.getElementById('display').textContent = vg_tecla;
      console.log (" totalizanco  =" +  vg_tecla );
      vg_op1 = " ";

      vg_op1 = vg_op2;
      vg_n2   = 0;
      vg_tecla = " ";
      vg_contador = 0;
      vg_punto_si = -1;



  },
  //******************************************************************

  operacion: function(){
    switch (vg_operacion){
      case  "division":{
        console.log ("enttra a dividir");
        if (vg_n2 == 0){
           vg_n2 =1;
         }
        vg_acum = parseFloat (vg_acum) / parseFloat(vg_n2);
        break;
      }
      case  "multiplicacion":{
        console.log ("enttra a  multiplicar");
        if (vg_n2 == 0){
           vg_n2 = 1;}


        vg_acum = parseFloat (vg_acum ) * parseFloat(vg_n2);

        break;

      }
      case  "suma":{
        console.log ("enttra a  sumar");
        vg_acum = parseFloat (vg_acum ) + parseFloat(vg_n2);

        break;

      }
      case  "resta":{
        console.log ("enttra a  restar");
        vg_acum = parseFloat (vg_acum ) - parseFloat(vg_n2);

        break;
      }



    }

  },

//******************************************************************
analizaoperacion: function(){
  console.log ("--- entra a nalizar operacoin");

    if (vg_acum == 0){
      //guarda el primer  numero a  trabajar y la peracion
      vg_acum = vg_tecla;
      vg_op1 = vg_operacion;
      vg_tecla = " ";



      document.getElementById('display').textContent = vg_tecla;


    }
    else {
      if (vg_tecla == " ")
            {
                //logica que permite cambiar la opercaion entre los numeros
                vg_op1 = vg_operacion;



                document.getElementById('display').textContent = vg_tecla;
              }
              else{
                //logica que permite  llamar al metodo de ejecucion de la operacion

                    vg_n2 = vg_tecla;
                    vg_op2 = vg_operacion;
                    vg_operacion = vg_op1;
                    vg_tecla = " ";
                    document.getElementById('display').textContent = vg_tecla;
                    //


                    calculadora.operacion();


                    var vl_sacum = vg_acum.toString();

                  }
    //mANEJO DEL punto decimal

    var  vl_pos_signo = 0;
    // vl_pos_signo = vg_acum.indexOf("-");
    vg_acum = vg_acum * 1.0;
    vl_tipo=" ";
    vl_tipo = typeof vg_acum;


    vg_acum = vg_acum. toFixed(2);
    var vl_acum = vg_acum.toString();

    vg_lcadena = vl_acum.length;
    var vl_pos = vl_acum. lastIndexOf(".");
    if (vl_pos > -1) {


                                        var vl_decimal = vl_acum.slice (vl_pos);
                                        var vl_nroDec = 0;
                                        vl_nroDec = parseInt(vl_decimal.length);
                                        var vl_i = 0;
                                        vl_i = vl_nroDec - 1;
                                        var vl_letra = " ";







                                        for(vl_i1=1; vl_i1 <= vl_nroDec; vl_i1++ ){
                                          vl_letra =  vl_decimal.charAt(vl_i);
                                          if (vl_letra == "0" || vl_letra == "." ){
                                              vg_lcadena = vl_acum.length;


                                              vl_acum = vl_acum.slice(0, vg_lcadena - 1);




                                            }
                                            else {

                                              break;
                                            }
                                             vl_i = vl_i - 1;
                                        }
    }

    //logica para mostrar solo 8 caracteres

    var vl_pos = vl_acum. lastIndexOf("-");
    var vl_lon = 8;  // para mostrar 8 caracters
    var vl_sacum = " ";


    if (vl_pos > -1 ) {
                      vl_sacum = "-";
                      vl_lon = 7;
                      vl_acum = vl_acum. slice(1);
                      vg_lcadena = vl_acum.length;

    }

    if (vg_lcadena > vl_lon) {
                                          vg_lcadena = parseInt (vg_lcadena) - parseInt(vl_lon);
                                          vl_acum = vl_acum. slice(vg_lcadena);



                                         document.getElementById('display').style.color="yellow";

  }
  vl_acum = vl_sacum + vl_acum;

  vl_acum = vl_acum.trim();

  vg_acum = vl_acum;


  vg_op1 = vg_op2;
  vg_n2   = 0;
  vg_tecla = " ";
  vg_contador = 0;
  vg_punto_si = -1;






    }


console.log ("** sale de analizar operacoin");

},

//******************************************************************
analizaCadena: function(){

  console.log("Entra a anlizar cadena");





  vg_vector = vg_tecla;
  vg_lcadena = vg_tecla.length;



//logica para  no permitir la repeticion de ceros
// si la primera posiciones 0 y la segunda posiucion es "."  muestra 0.
//de lo contrario quita los ceros a la izquierda
// lineas  21-33
if  (vg_vector[0] == 0 ){

      var  vl_tecla = vg_tecla;
      vg_tecla = vl_tecla.slice(1);


}

vg_vector = vg_tecla;
if  (vg_vector[0] == "."){
      vg_tecla = "0" + vg_tecla;

}

 //logica  para  manejo de decimales lineas 26-56
 //logica que no permite la insercion de  dos puntos (..) decimales
 //lineas  38-61
vg_lcadena = vg_tecla.length;

var vl_punto_si = -1;
vl_punto_si = vg_tecla. lastIndexOf(".");
if (vl_punto_si  > -1 && vg_punto_si == -1){
 vg_contador = vg_contador + 1;
 vg_punto_si = vl_punto_si;
}


if (vl_punto_si > vg_punto_si ) {
  vg_tecla = vg_tecla.slice(0,vg_lcadena - 1);

  vg_lcadena = vg_tecla.length;

}


    // logica de signo
var  vl_pos_signo = vg_tecla. lastIndexOf("-");
var  vl_ultimoC = vg_tecla.charAt(vg_lcadena -1);
vl_tecla = vg_tecla.slice(0,1);




if (vl_pos_signo > -1){

     if (vl_tecla == "-" && vl_ultimoC == "-" ){

            vg_lcadena = vg_tecla.length;
            vg_tecla = vg_tecla.slice(1,vg_lcadena - 1);

      }
        else if ( vl_ultimoC == "-"){
              vg_tecla = "-"+ vg_tecla;
              vg_lcadena = vg_tecla.length;
              vg_tecla = vg_tecla.slice(0,vg_lcadena - 1 );



         }
            else{

                 }


         vg_tecla = vg_tecla.trim();




}

    // logica para q la calculadora no soporte sino hasta 8 caracteres.
if  (vg_lcadena > 8)
    {

      vg_tecla = vg_tecla.slice(0,vg_lcadena - 1);

      vg_lcadena = vg_tecla.length;
  }


var  vl_ultimoC = vg_tecla.charAt(vl_pos_signo);






    vg_lcadena = vg_tecla.length;

    console.log(" sale de analizar caddna: longitud de vg_tecla= " + vg_lcadena);
    console.log(" sale de analizar caddna:  vg_tecla= " + vg_tecla);
    console.log(" sale de analizar caddna:  vg_contador= " + vg_contador);



console.log ("sale de analizar cadena");

},

//******************************************************************
obtenertecla: function() {



 document.getElementById('1').addEventListener("click", function(){
   document.getElementById('display').style.color="black";

   vg_tecla = vg_tecla + "1";
   calculadora.analizaCadena ();
     document.getElementById('display').textContent = vg_tecla;




 } )



 document.getElementById('2').addEventListener("click", function(){
  document.getElementById('display').style.color="black";
   vg_tecla = vg_tecla + "2";
   calculadora.analizaCadena ();
   document.getElementById('display').textContent = vg_tecla;


 } )
 document.getElementById('3').addEventListener("click", function(){
    document.getElementById('display').style.color="black";
   vg_tecla = vg_tecla + "3";
   calculadora.analizaCadena ();
   document.getElementById('display').textContent = vg_tecla;
 } )

 document.getElementById('4').addEventListener("click", function(){
    document.getElementById('display').style.color="black";
   vg_tecla = vg_tecla + "4";

   calculadora.analizaCadena ();
   document.getElementById('display').textContent = vg_tecla;
 } )

 document.getElementById('5').addEventListener("click", function(){
    document.getElementById('display').style.color="black";
   vg_tecla = vg_tecla + "5";
   calculadora.analizaCadena ();
   document.getElementById('display').textContent = vg_tecla;
 } )


 document.getElementById('6').addEventListener("click", function(){
    document.getElementById('display').style.color="black";
   //calculadora.imprimirDatos();

   vg_tecla = vg_tecla + "6";
   calculadora.analizaCadena ();
   document.getElementById('display').textContent = vg_tecla;


    } )
    document.getElementById('7').addEventListener("click", function(){
       document.getElementById('display').style.color="black";
     vg_tecla = vg_tecla + "7";
     calculadora.analizaCadena ();
     document.getElementById('display').textContent = vg_tecla;


   } )

   document.getElementById('8').addEventListener("click", function(){
      document.getElementById('display').style.color="black";
     //calculadora.imprimirDatos();

     vg_tecla = vg_tecla + "8";
     calculadora.analizaCadena ();
     document.getElementById('display').textContent = vg_tecla;


      } )
      document.getElementById('9').addEventListener("click", function(){
         document.getElementById('display').style.color="black";
       //calculadora.imprimirDatos();

       vg_tecla = vg_tecla + "9";
       calculadora.analizaCadena ();
       document.getElementById('display').textContent = vg_tecla;


        } )
        document.getElementById('0').addEventListener("click", function(){
           document.getElementById('display').style.color="black";
         //calculadora.imprimirDatos();

         vg_tecla = vg_tecla + "0";
         calculadora.analizaCadena ();
         calculadora.analizaCadena ();
         document.getElementById('display').textContent = vg_tecla;

          } )

 //Otras teclas no numericads

        document.getElementById('on').addEventListener("click", function(){
           document.getElementById('display').style.color="black";
         //calculadora.imprimirDatos();
         vg_punto_si =  -1;
         vg_contador = 0.0;
           vg_n1 = 0;
       vg_acum = 0;
         vg_n2 = 0;
         vg_op1 = " ";
           vg_op2 =" ";
           vg_parcial = 0;
           vg_operacion = " ";



         var vg_lcadena = 0;
         var vg_vector = [];
         vg_punto_si =  -1;
         vg_tecla = 0;
         vg_acumulado = 0.0;


         document.getElementById('display').textContent = vg_tecla;




          } )

          document.getElementById('sign').addEventListener("click", function(){
           //calculadora.imprimirDatos();

           vg_tecla = vg_tecla + "-";
           calculadora.analizaCadena ();
           document.getElementById('display').textContent = vg_tecla;


            } )


          document.getElementById('punto').addEventListener("click", function(){
           //calculadora.imprimirDatos();

           vg_tecla = vg_tecla + ".";
           calculadora.analizaCadena ();
           document.getElementById('display').textContent = vg_tecla;


            } )
            document.getElementById('dividido').addEventListener("click", function(){
             vg_operacion =  "division";
             calculadora.analizaoperacion ();
             //document.getElementById('display').textContent = vg_tecla;


              } )
              document.getElementById('por').addEventListener("click", function(){
               vg_operacion =  "multiplicacion";
               calculadora.analizaoperacion ();
               //document.getElementById('display').textContent = vg_tecla;


                } )

                document.getElementById('menos').addEventListener("click", function(){
                 vg_operacion =  "resta";
                 calculadora.analizaoperacion ();
                 //document.getElementById('display').textContent = vg_tecla;


                  } )
                  document.getElementById('mas').addEventListener("click", function(){
                   vg_operacion =  "suma";
                   calculadora.analizaoperacion ();
                  // document.getElementById('display').textContent = vg_tecla;


                    } )
                    document.getElementById('igual').addEventListener("click", function(){
                   // vg_operacion =  " ";

                    calculadora.analizaoperacion ();
                    calculadora.total ();


                    //document.getElementById('display').textContent = vg_acum;


                      } )




},

//******************************************************************
reduce_tecla: function() {

            document.getElementById("1").addEventListener("mousedown",function(){
            document.getElementById("1").setAttribute("style","transform:scale(0.5,0.5)");
       })

       document.getElementById("2").addEventListener("mousedown",function(){
        document.getElementById("2").setAttribute("style","transform:scale(0.5,0.5)");
   })
   document.getElementById("3").addEventListener("mousedown",function(){
    document.getElementById("3").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("4").addEventListener("mousedown",function(){
document.getElementById("4").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("5").addEventListener("mousedown",function(){
document.getElementById("5").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("6").addEventListener("mousedown",function(){
document.getElementById("6").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("7").addEventListener("mousedown",function(){
document.getElementById("7").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("8").addEventListener("mousedown",function(){
document.getElementById("8").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("9").addEventListener("mousedown",function(){
document.getElementById("9").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("0").addEventListener("mousedown",function(){
document.getElementById("0").setAttribute("style","transform:scale(0.5,0.5)");
})
// Otras teclas no numericads
document.getElementById("on").addEventListener("mousedown",function(){
document.getElementById("on").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("sign").addEventListener("mousedown",function(){
document.getElementById("sign").setAttribute("style","transform:scale(0.5,0.5)");
})

document.getElementById("raiz").addEventListener("mousedown",function(){
document.getElementById("raiz").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("dividido").addEventListener("mousedown",function(){
document.getElementById("dividido").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("dividido").addEventListener("mousedown",function(){
document.getElementById("dividido").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("por").addEventListener("mousedown",function(){
document.getElementById("por").setAttribute("style","transform:scale(0.5,0.5)");
})


document.getElementById("menos").addEventListener("mousedown",function(){
document.getElementById("menos").setAttribute("style","transform:scale(0.5,0.5)");
})

document.getElementById("punto").addEventListener("mousedown",function(){
document.getElementById("punto").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("igual").addEventListener("mousedown",function(){
document.getElementById("igual").setAttribute("style","transform:scale(0.5,0.5)");
})
document.getElementById("mas").addEventListener("mousedown",function(){
document.getElementById("mas").setAttribute("style","transform:scale(0.5,0.5)");
})


},

devulve_tam_tecla: function() {

  document.getElementById("1").addEventListener("mouseup",function(){
  document.getElementById("1").setAttribute("style","transform:scale(1,1)");

})

document.getElementById("2").addEventListener("mouseup",function(){
document.getElementById("2").setAttribute("style","transform:scale(1,1)");

})

document.getElementById("3").addEventListener("mouseup",function(){
document.getElementById("3").setAttribute("style","transform:scale(1,1)");

})

document.getElementById("4").addEventListener("mouseup",function(){
document.getElementById("4").setAttribute("style","transform:scale(1,1)");

})
document.getElementById("5").addEventListener("mouseup",function(){
document.getElementById("5").setAttribute("style","transform:scale(1,1)");

})
document.getElementById("6").addEventListener("mouseup",function(){
document.getElementById("6").setAttribute("style","transform:scale(1,1)");

})

document.getElementById("7").addEventListener("mouseup",function(){
document.getElementById("7").setAttribute("style","transform:scale(1,1)");

})
document.getElementById("8").addEventListener("mouseup",function(){
document.getElementById("8").setAttribute("style","transform:scale(1,1)");

})
document.getElementById("9").addEventListener("mouseup",function(){
document.getElementById("9").setAttribute("style","transform:scale(1,1)");
})

document.getElementById("0").addEventListener("mouseup",function(){
  document.getElementById("0").setAttribute("style","transform:scale(1,1)");

})
//Otras teclas no numericads
document.getElementById("on").addEventListener("mouseup",function(){
document.getElementById("on").setAttribute("style","transform:scale(1,1)");
})
document.getElementById("sign").addEventListener("mouseup",function(){
document.getElementById("sign").setAttribute("style","transform:scale(1,1)");
})

document.getElementById("raiz").addEventListener("mouseup",function(){
document.getElementById("raiz").setAttribute("style","transform:scale(1,1)");
})
document.getElementById("dividido").addEventListener("mouseup",function(){
document.getElementById("dividido").setAttribute("style","transform:scale(1,1)");
})
document.getElementById("dividido").addEventListener("mouseup",function(){
document.getElementById("dividido").setAttribute("style","transform:scale(1,1)");
})
document.getElementById("por").addEventListener("mouseup",function(){
document.getElementById("por").setAttribute("style","transform:scale(1,1)");
})


document.getElementById("menos").addEventListener("mouseup",function(){
document.getElementById("menos").setAttribute("style","transform:scale(1,1)");
})

document.getElementById("punto").addEventListener("mouseup",function(){
document.getElementById("punto").setAttribute("style","transform:scale(1,1)");
})
document.getElementById("igual").addEventListener("mouseup",function(){
document.getElementById("igual").setAttribute("style","transform:scale(1,1)");
})
document.getElementById("mas").addEventListener("mouseup",function(){
document.getElementById("mas").setAttribute("style","transform:scale(1,1)");
})


}


//******************************************************************
}







var vg_tecla = 0;
var vg_lcadena = 0;
var vg_vector = [];
vg_punto_si =  -1;
vg_contador = 0;
vg_n1 = 0;
vg_acum = 0;
vg_n2 = 0;
vg_op1 = " ";
vg_op2 =" ";
vg_parcial = 0;

vg_operacion = " ";


calculadora.obtenertecla();
calculadora.reduce_tecla();
calculadora.  devulve_tam_tecla();
//calculadora.tamanoNormavg_tecla ();
