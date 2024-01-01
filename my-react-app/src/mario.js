function pyramid() {
    const input = prompt("Enter height of pyramid");
    
    for (let i = 0; i < input; i++) {
        let row = '';
        for (let j = 0; j < input; j++) {
            if (i + j >= input - 1) {
                row += '#';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

// Call the pyramid function
pyramid();
