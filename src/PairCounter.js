import React from 'react';

class PairCounter extends React.Component {
  countPairsWithSum(arr, X) {
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum === X) {
        count += 1;
        left += 1;
        right -= 1;
      } else if (sum < X) {
        left += 1;
      } else {
        right -= 1;
      }
    }

    return count;
  }

  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const X = 50;
    const result = this.countPairsWithSum(arr, X);

    return (
      <div>
        <p>Count of pairs with sum {X}: {result}</p>
      </div>
    );
  }
}

export default PairCounter;
