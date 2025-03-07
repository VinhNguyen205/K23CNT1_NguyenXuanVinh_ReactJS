//Render danh sách phần tử trong React
const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>  // Luôn thêm key cho mỗi item
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);