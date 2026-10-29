      // Robosinho 24h ligado
console.log("Robosinho começou!");

setInterval(() => {
  console.log("Trabalhando - " + new Date().toLocaleString('pt-BR'));
}, 60000);
