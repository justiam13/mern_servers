
jest.mock('./test/utils',()=>(
    {getdata:jest.fn(),
    getRaw:jest.fn()
    }
))
const {getdata,getRaw}=require('./test/utils')
const {processData,processRaw}=require('./test/processData')
//mock return value
test('Mocked the process data',()=>{
    getdata.mockReturnValue('Mocked data')
    expect(processData()).toBe('Processed:Mocked data')
})
test('moked raw',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true)
})