
import axios from "axios"
import { connect } from "react-redux";

var server = "https://react-crud-9f4ad.firebaseio.com/businessdata"
export async function showbusinessdetails(){
    var userArr = [] ;

const {data} = await axios.get(`${server}.json`)

  
for (const key in data){
    userArr.push({
      datas:data[key],
      key:key
           })}
     return{
       type:'GET_DETAILS',
        payload:userArr
    }
   }



export async function deletedataaction(key){ 
   await axios.delete(`${server}/${key}.json`)
}

export async function putdata(data,key){ 

 await axios.put(`${server}/${key}.json`,data)
  
 }

 

