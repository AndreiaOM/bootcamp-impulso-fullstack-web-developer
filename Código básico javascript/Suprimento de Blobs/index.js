var n = parseInt(gets());

//implemente sua solução nos espaços em branco

while (n > 0) {
  var c = parseFloat(gets());
  var dias = 0;
  while (c > 1) {
    c = c / 2.0;
    dias++;
  }
  n--;
  print(`${dias}  dias`);
}