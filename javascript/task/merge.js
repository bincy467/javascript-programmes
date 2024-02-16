function mergeAndSort(arr1, arr2) {
    // Concatenate the two arrays into one
    let mergedArray = arr1.concat(arr2);
    // Sort the merged array
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
}


const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];


const sortedArray = mergeAndSort(array1, array2);
console.log(sortedArray); 

