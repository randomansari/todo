const users = [
    {
        name: 'Salahuddin',
        id: '1',
    },
    {
        name: 'Abdullah',
        id: '2',
    },
];

const todos = [
    {
        userId: '1',
        id: '6',
        value: 'Buy vegetables and meat',

    },
    {
        userId: '1',
        id: '7',
        value: 'Buy',

    },
    {
        userId: '2',
        id: '1',
        value: 'Pray',

    },
    {
        userId: '2',
        id: '2',
        value: 'go to huda city center',

    },
    {
        userId: '2',
        id: '3',
        value: 'just work',

    },
]

const navBarItems = [
    {
        value: "Todo's",
        selected: true,
    },
    {
        value: "History",
        selected: false,
    },
    {
        value: "Add new todo",
        selected: false,
    }
];

export {
    users,
    navBarItems,
    todos,
}