module.exports = function check(str, bracketsConfig) {
    let brackets = '';
  bracketsConfig.forEach((item) => {
    for (let i of item) {
      brackets += i;
    }
  });
  let arrayBrackets = [];
  for (let i = 0; i < brackets.length; i += 2) {
    arrayBrackets.push(brackets[i] + brackets[i + 1]);
  }

  while (true) {
    count = 0;
    for (let bracketsKind of arrayBrackets) {
      let bracketsPlace = str.indexOf(bracketsKind);

      if (bracketsPlace >= 0) {
        str =
          str.substring(0, bracketsPlace) + str.substring(bracketsPlace + 2);
        continue;
      }

      count++;
    }

    if (count === arrayBrackets.length) {
      break;
    }
  }

  return str == '' ? true : false;
}
