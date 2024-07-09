// async function fetchData(){
//     try {
//         const response=await fetch('http://localhost:3001/users')
//         if(!response){
//             throw new Error ('failed to fetch')
//         }
//         const data =response.json()
//         return data
//     }catch(err){
//         throw err
//     }
// }
// module.exports=fetchData
async function fetchData() {
    return {
        getAllUsers:[
            {
                "id": "6683866277731e217b877793",
            "name": "sush",
      "email": "sush@gmail.com",
      "password": "pass1234",
                
            }
        ]
    }

}
module.exports=fetchData
