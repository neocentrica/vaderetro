function empezar(){
    document.body.style.backgroundColor = 'red';
    document.getElementById('vade').style.display = 'none';
    document.getElementById('sangria').style.display = 'block';
    document.getElementById('primer_boton').style.display = 'none';

}


function next1(){   
    let ingSang1 = document.getElementById('ing_sang_selector1').value;
    let ingSang2 = document.getElementById('ing_sang_selector2').value;
    let ingSang3 = document.getElementById('ing_sang_selector3').value;
    let ingSang4 = document.getElementById('ing_sang_selector4').value;
    let ingSang5 = document.getElementById('ing_sang_selector5').value;
    let ingSang6 = document.getElementById('ing_sang_selector6').value;
    let ingSang7 = document.getElementById('ing_sang_selector7').value;
    let ingSang8 = document.getElementById('ing_sang_selector8').value;
    let ingSang9 = document.getElementById('ing_sang_selector9').value;
    

    if (ingSang1 + ingSang2 + ingSang3 + ingSang4 + ingSang5 + ingSang6 + ingSang7 + ingSang8 + ingSang9 == 'vino1' + 'brandy2' + 'naranja3' + 'fresa4' + 'manzana5' + 'judena6' + 'judeli7' + 'jasi8' + 'soda9'){document.getElementById("segundo_boton").disabled = false;}
    else if (ingSang1 + ingSang2 + ingSang3 + ingSang4 + ingSang5 + ingSang6 + ingSang7 + ingSang8 + ingSang9 != 'vino1' + 'brandy2' + 'naranja3' + 'fresa4' + 'manzana5' + 'judena6' + 'judeli7' + 'jasi8' + 'soda9'){document.getElementById("segundo_boton").disabled = true;}
}


//function next(){ 
   // let ingSang = document.getElementById('ing_sang_selector').value;  
    

   //  if (ingSang != 1){document.getElementById("segundo_boton").disabled = true;}
   //  else if (ingSang == 1){document.getElementById("segundo_boton").disabled = false;}
//}
    //if (ingSang = "1"){document.getElementById("segundo_boton").disabled = "true";}
    
  



function aber(){
    document.body.style.backgroundColor = 'hotpink';
    document.getElementById('sangria').style.display = 'none';
    document.getElementById('yaaay').style.display = 'block';
}




