export function pyramid(rows) {
    var inputNumber = parseInt(prompt("Enter the number of rows:"));

    for (var i = 0; i < inputNumber; i++) {
        var row = "";

        for (var j = 0; j <= i; j++) {
            row += "#";
        }

        console.log(row);
    }

    return (
        <div>
            <h1>Welcome to my page</h1>
            <p>This is mario !</p>
            <p>{row}</p>
        </div>
    );
}

// Call the function
pyramid();
