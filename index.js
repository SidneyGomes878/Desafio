let nomeHeroi = "Zeldão";
let nivelHeroi = 7000;
let nivel = ""; 

if (nivelHeroi <= 1000) {
    nivel = "Ferro";
} 
else if (nivelHeroi <= 2000) {
    nivel = "Bronze";
}
 else if (nivelHeroi <= 3000) {
    nivel = "Prata";
} 
else if (nivelHeroi <= 4000) {
    nivel = "Ouro";
}
 else if (nivelHeroi <= 5000) {
    nivel = "Platina";
} 
else if (nivelHeroi <= 6000) {
    nivel = "Diamante";
} 
else if (nivelHeroi <= 7000) {
    nivel = "Mítico";
} 
else if (nivelHeroi <= 8000) {
    nivel = "Lendário";
}

console.log("O herói " + nomeHeroi + " está no nível " + nivel + " com " + nivelHeroi + " pontos de poder.");
console.log("Parabéns, " + nomeHeroi)