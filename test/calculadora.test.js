const request = require('supertest')
const app = require("../rotas")

describe('Testando minha API', () => {
    it('Deve somar dois numeros corretamente', async() => {
        const res = await request(app).get('/soma')
        .send({
            "num1": 6,
            "num2": 2
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({"total": 8})
    }),
    it('Deve subtrair dois numeros corretamente', async() => {
        const res = await request(app).get('/subtracao')
        .send({
            "num1": 6,
            "num2": 2
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({"total": 4})
    }),
    it('Deve dividir dois numeros corretamente', async() => {
        const res = await request(app).get('/divisao')
        .send({
            "num1": 6,
            "num2": 2
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({"total": 3})
    }),
    it('Deve multiplicar dois numeros corretamente', async() => {
        const res = await request(app).get('/multiplicar')
        .send({
            "num1": 6,
            "num2": 2
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({"total": 12})
    })
})