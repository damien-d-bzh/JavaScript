
function FunctionNbPremier(num){
    if((num==2)||(num==3)||(num==5)||(num==7)){
        //alert(num+" est premier");
        return num+" est premier";
    }
    if((num%2==0)||(num%3==0)||(num%5==0)||(num%7==0)){
        //alert(num+" n\'est pas premier");
        return num+" n\'est pas premier";
    }
    else{
        //alert(num+" est premier");
        return num+" est premier";
    }
}

//b=confirm('continuer ?');
//var num=parseInt(prompt('entrer un nombre :'));   
//var nombre=parseInt(prompt('entrer un nombre pour verifier :'));
//document.write(FunctionNbPremier.VerificationNmbrPremier(nombre));



    
