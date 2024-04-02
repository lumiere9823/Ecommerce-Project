export const color = [
    'white',
    'black',
    'yellow',
    'blue',
    'green',
    'red',
    'pink'
];
export const filters = [
    {
        id: 'color',
        name: 'color',
        options: [
            { value: "white", label: "white" },
            { value: "black", label: "black" },
            { value: "yellow", label: "yellow" },
            { value: "blue", label: "blue" },
            { value: "green", label: "green" },
            { value: "red", label: "red" },
            { value: "pink", label: "pink" },
        ]
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },

        ]
    },

];

export const singleFilter = [
    {
        id: "price",
        name: "price",
        options: [
            { value: "159-399", label: "$159-$399" },
            { value: "399-999", label: "$399-$999" },
            { value: "999-1999", label: "$999-$1999" },
            { value: "1999-2999", label: "$1999-$2999" },
            { value: "3999-4999", label: "$3999-$4999" },
        ]
    }, {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% and above" },
            { value: "20", label: "30% and above" },
            { value: "30", label: "30% and above" },
            { value: "40", label: "40% and above" },
            { value: "50", label: "50% and above" },
            { value: "60", label: "60% and above" },
            { value: "70", label: "70% and above" },
            { value: "80", label: "80% and above" },
        ]
    },
    {
        id: 'stock',
        name: 'Avalability',
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },

        ]
    },
]

export const sortOptions = [
    { name: "Price:Low to High", query: "price_low", current: 'false' },
    { name: "Price:High to High", query: "price_high", current: 'false' },
]