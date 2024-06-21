function simpleCalculator(num1, num2, sign) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return `unknown value`;
    } else {
      if (sign == "+") {
        return num1 + num2;
      }
      if (sign == "-") {
        return num1 - num2;
      }
      if (sign == "*") {
        return num1 * num2;
      }
      if (sign == "/" && num2 != 0) {
        return num1 / num2;
      }
  
      return `unknown value`;
    }
  }
  
  console.log(simpleCalculator(3, 2, "+"));
  console.log(simpleCalculator(4, 2, "-"));
  console.log(simpleCalculator(1, 2, "&"));
  console.log(simpleCalculator(1, "k", "*"));
  console.log(simpleCalculator(5, 3, "*"));
  console.log(simpleCalculator(5, 0, "/"));
  console.log(simpleCalculator(5, 2, "/"));

