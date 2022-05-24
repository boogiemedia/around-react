// import React , {useEffect} from "react";
// export default function Api(){




//     fetch("https://around.nomoreparties.co/v1/group-42/cards", {
//   headers: {
//     authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   }); 
// }


const api = {
  genericCall : async (url) =>{
    try{
      const res = await fetch(url ,  { headers: {
            authorization: "3b0591f5-8d80-48af-bfb2-1499d5045304"
     }})
     const jsonObj = await res.json()
     return jsonObj    
    }
    catch(err){
      console.log("Error API : generCall ");
      console.log(err);
    }
  },
  getCards : async ()=>{
     try{
       const url = "https://around.nomoreparties.co/v1/group-12/cards"
       return await  api.genericCall(url)
     }
     catch(err){
       console.log("ERROR : getCards ");
     }},
  getProfile : async ()=>{
    try{
      const url = "https://around.nomoreparties.co/v1/group-12/users/me"
      return await api.genericCall(url)
     }
     catch(err){
       console.log("ERROR : getCards ");
     }}
}

export default api