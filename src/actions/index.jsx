
import axios from "axios"

export async function showbusinessdetails(){
    var userArr = [] ;

const {data} = await axios.get('https://react-crud-9f4ad.firebaseio.com/businessdata.json')

  
for (const key in data){
    userArr.push({
             datas:data[key],
             key:key
           })
    
}
     return{
    
        type:'GET_DETAILS',
        payload:userArr
    
    }
  
 

//     axios.get('https://react-crud-9f4ad.firebaseio.com/businessdata.json').then(
   
//  ({data}) => {

  
 
//    for (const key in data){
//    userArr.push({
//      datas:data[key],
//      key:key
//    })
 
//  }

 
// }


// )


 





   }