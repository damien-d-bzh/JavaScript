<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Function estPremier</title>
        <script type="text/javascript">
            class Eleves{
                constructor(nom, prenom, moyenne){
                this.nom=nom;
                this.prenom=prenom;
                this.moyene=0;
                }

                moyenne(a){
                    var somme=0;
                    var note=new Array();
                    for(var indice=0; indice<a; ++indice){
                        note[indice]=parseInt(prompt("entrer la note"+(indice+1)+" de "+a+" :"));
                        var q=note[indice];
                        alert(q);
                        somme+=note[indice];
                    }
                        alert(somme);
                        var moyenne=somme/4;
                        alert(moyenne);
                        return moyenne;
                    }

                present(){
                    return "présent";
                }
            }



            var sujet=new Array();
            //var sujetMoyn=new Array();
            var tailleClasse=parseInt(prompt('entrer la taille de la classe :'));
            const NombreDeNotes=parseInt(prompt('entrer un nombre de notes :'));
            for(var indice=0; indice<tailleClasse; ++indice){
                sujet[indice]=new Eleves(nom=prompt('nom'), prenom=prompt('prenom'));
                alert(sujet[indice].nom+" "+sujet[indice].prenom+" "+sujet[indice].moyene);
                //sujetMoyn[indice]=sujet[indice].moyenne(NombreDeNotes);
                sujet[indice].moyene=sujet[indice].moyenne(NombreDeNotes);
            }
            for(indice=0; indice<tailleClasse; ++indice){
                document.write(sujet[indice].nom+" "+sujet[indice].prenom+"<br>");
                document.write(sujet[indice].present()+"<br>");
                document.write(sujet[indice].moyene+"<br>");
            }




        </script>
    </head>
    <body>

    </body>
</html>
