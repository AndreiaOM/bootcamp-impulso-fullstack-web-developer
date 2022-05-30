const array = [];
const isUnique = [];

do {
  const value = gets();
  if (value == '') {
    break;
  } else {
    array.push(value); //adiciona no array
  }
} while (true);

for (i=0; i<array.length; i++) {
  if (!isUnique.includes(array[i])) {
    isUnique.push(array[i])};
}

const result = isUnique.length;

print(result);