let linha = gets();
let coluna = gets();

if (linha % 2 === 0) {
  if (coluna % 2 === 0) {
    print(1)} else {print(0)}
  }
else if (linha % 2 !== 0) {
  if (coluna % 2 === 0) {
    print(0)} else {print(1)}
}