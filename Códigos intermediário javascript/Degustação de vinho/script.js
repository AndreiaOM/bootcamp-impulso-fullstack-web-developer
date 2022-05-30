let opcaoCorreta = gets();
let chutes = gets().split(' ');
let acertos = 0;

for (let n=0; n<chutes.length; n++) {
  if (chutes[n] == opcaoCorreta) {
    acertos++
  }
}

print(acertos)