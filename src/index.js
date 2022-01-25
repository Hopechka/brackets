module.exports = function check(str, bracketsConfig) {
    let brackets = '';
    bracketsConfig.forEach((item) => {
      for (let i of item) {
        brackets += i;
      }
    });

    while (str.includes(brackets)) {
      let bracketsPlace = str.indexOf(brackets);
      str = str.substring(0, bracketsPlace) + str.substring(bracketsPlace + 2);
    }

    return str == '' ? true : false;
}
