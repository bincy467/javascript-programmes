function findmissingnumber(arr) {
    const n = arr.length + 1;
    const expectedsum = (n * (n + 1)) / 2;
    const actualsum = arr.reduce((sum, num) => sum + num, 0);
    return expectedsum - actualsum;
  }
  
  const array = [1, 2, 3, 4, 6, 7];
  const missingnumber = findmissingnumber(array);
  console.log(`missingnumber is: ${missingnumber}`);
  
