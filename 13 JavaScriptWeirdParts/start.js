//Nan
if (NaN * 1 === NaN) {
  console.log("equal");
}

const result = 1 / "hello";
if (Number.isNaN(result)) {
  console.log("equal to NaN");
}

//Type Coercion
if (3 > 2 > 1) {
  console.log("inside");
}

console.log(2 - "1");
console.log(2 + "1");

console.log(true + true);

// Interpreter & Compiler

function getPerson() {
  return {
    name: "pollapat",
  };
}
console.log(getPerson());

//Checking Object Type

const person = null;
if (typeof person === "object" && person !== null) {
  console.log("Yes, object");
}
