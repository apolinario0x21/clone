function sum(arg, arg1) {
  if(typeof arg !== "number") return "Error"
  return arg + arg1;
}

exports.sum = sum; // CommonJS