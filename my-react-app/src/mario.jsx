function pyramid() {
    const value1 = document.querySelector('#usernum').value;
    const value2 = document.querySelector('#usernum2').value;
    
    const pyramid = [];
    for (let i = 0; i < value1; i++) {
        let row = '';
        for (let j = 0; j < value2; j++) {
            if (i + j >= value1 - 1) {
                row += '<a>#</a>';
            } else {
                row += '<a>.</a>';
            }
        }
        pyramid.push(row);
    }

    return pyramid;
}

function printing_pyra() {
    const pyramidElement = (
        <div>
          <h2>Your pyramid</h2>
          {pyramid().map((line, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: line }}></div>
          ))}
        </div>
      );
    
      document.getElementById('mario').innerHTML = '';
      document.getElementById('mario').appendChild(pyramidElement);
}

document.getElementById('sub2').addEventListener('click', () => {
  printing_pyra();
});

