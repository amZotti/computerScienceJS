'use strict';

const knapsackProblem = (items, size) => {
    let accumulator = Array(size).fill(0);

    for (let i = 0;i <= size;i++) {
        let currentSack = accumulator[ i ];

        let totalValue = 0;
        for (let k = 0;k < items.length;k++) {
            let item = items[k];

            if (item.value > 0 && item.weight === 0) {
                return Infinity;
            }

            if (item.weight <= i) {
                let slice = accumulator[ i - item.weight ];
                let newTotal = item.value + slice;
                if (newTotal > totalValue) {
                    totalValue = newTotal;
                }

                accumulator[ i ] = totalValue;
            }
        }
    }
    return accumulator[ size ];
}

let items = [
    {
        weight: 10,
        value: 20
    },

    {
        weight: 15,
        value: 30
    },

    {
        weight:30,
        value: 100
    }

];

let size = 29;

console.log(knapsackProblem(items, size));
