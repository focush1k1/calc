const express = require('express');
const app = express();
const port = 3000;

let a = -4;
let b = 0;

const calc = (a, b) => {
    let result1 = a + b;
    let result2 = a - b;
    let result3 = a * b;
    let result4 = a / b;
    if (b === 0) {
        result4 = 'Ошибка';
    }
    let result5 = b ** 2;
    let result6 = Math.sqrt(a);
    if (a < 0) {
        result6 = 'Ошибка'
    }
    return [result1, result2, result3, result4, result5, result6]; 
}

app.get("/", (req, res) => {
    const c = calc(a, b);
    console.log(c);
    res.send({succes: true, code: calc(a, b)});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});