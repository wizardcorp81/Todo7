
const calculadora = require("../calculadora");

test("deve somar 2 numeros corretamente",async() => {
    const res = await requestAnimationFrame(calculadora).post('/somar')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('total');
});
test("deve subtrair 2 numeros corretamente",async() => {
    const res = await requestAnimationFrame(calculadora).post('/subtrair')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('total');
});
test("deve dividir 2 numeros corretamente",async() => {
    const res = await requestAnimationFrame(calculadora).post('/dividir')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('total');
});
test("deve multiplicar 2 numeros corretamente",async() => {
    const res = await requestAnimationFrame(calculadora).post('/multiplicar')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('total');
});