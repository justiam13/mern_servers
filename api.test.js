const fetchData=require('./test/api')

jest.mock('node-fetch')
test('GET /users api data',async()=>{
    const data =await fetchData()
    console.log(data)
    expect(data).toHaveProperty('getAllUsers')
})