//jest test to test our http get method
const app = require('./index')
const request =require('supertest')
describe('GET /users',()=>{
    test('Get users from /users api',async ()=>{
        const res=await request(app)
        .get('/users')
        .expect(200)
    })
})