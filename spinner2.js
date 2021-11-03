const sequence = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

//
const charPrint = function(char, index) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, index * 200);
};

const spinner2 = function(arr) {
  arr.forEach((char, index) => charPrint(char, index));
};

spinner2(sequence);
