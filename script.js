// const byteSize = (str) => {
//   // write your code here
// };

// // Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));



const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size of the Blob, which represents the byte size of the string
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Example
const str = prompt("Enter some string.");
alert(byteSize(str));
