module.exports = function reverse (n) {
    const arr = Math.abs(n).toString().split('');
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr.join('');
}
