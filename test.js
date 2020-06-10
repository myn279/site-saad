/**
 Écrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. 
Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15
NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul
*/ 

var nombreUtilisateur=5;
var resultat=0;
for(var i=1; i<=nombreUtilisateur; i++) {
    resultat=resultat + i;
}
console.log(resultat);


var nombreUtilisateur=5;
var resultat=0;
for(var i=0; i<nombreUtilisateur; i++) {
    resultat=resultat + i+1;
}
console.log(resultat);