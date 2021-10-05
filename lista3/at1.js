function contandorNomes(nomes){



var count = (nomes.match(/Fernando/g) || []).length;

console.log(count)

}

contandorNomes("Diego Ademir Diego Diego Maicon Diego Maicon Ademir Diego Adriana Adriana Delvair Roselene Delvair Delvair Lawiny Luan Felipe Philipe Lucas Gabriel Gabriel Fernando Eduarda Eduarda Fernando Ademir")