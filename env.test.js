let dataSets=[]
//execute env before all
beforeAll(()=>{
    dataSets=['raju','rani']
})
beforeEach(()=>{
    console.log('Befor each setup is called ')

})
afterEach(()=>{
    console.log('After Each setup is called ')
})
afterAll(()=>{
    dataSets=[]
})
test('test case ', () => {
    expect(dataSets.length).toBe(2)
  
})
test('DataSet contain',()=>{
    expect(dataSets).toContain('rani')
})
