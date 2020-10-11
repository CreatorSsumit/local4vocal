import React,{useEffect,useState} from 'react'
import {showbusinessdetails,deletedataaction} from "../../actions/index"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import Update from './update';



function Showallbusiness(props) {

const [alldata,setalldata] = useState([])
const [blank, setblank] = useState(true)
const [updateview, setupdateview] = useState(false)
const [singledata, setsingledata] = useState('')
useEffect(()=>{
  fetchdata()
 showdetails()
 

})

 var fetchdata =()=>{
   props.showbusinessdetails()
  }

  var showdetails =()=>{
    if(props.showdata){
      setalldata(props.showdata)
   }
   if(alldata.length <=0){
     setblank(true)
   }else{
     setblank(false)
   }
    
  } 

  
const deletedata = (e)=>{
  var key = e.key
props.deletedataaction(key)
  }

const Updatedata =(uniquekey)=>{
  setupdateview(true)
const uniquedata = props.showdata.filter(e=>e.key === uniquekey)
setsingledata(uniquedata)

}

var goback =()=>{
  setupdateview(!updateview)
  console.log(updateview)
}


  return (
        <div> 
         {blank ?  <h5 className="card-title p-5 text-center">No User Registred </h5> : null}
        {updateview ? <Update updta={singledata} moveback={goback} /> : alldata.map((e)=>{
          return(<div>
           <div className="row">
        
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
          <h5 className="card-title">business name - {e.datas.businessname}</h5>
          <h6 className="card-title">owner name - {e.datas.businessownername}</h6>
          <p className="card-text">Grp members = {e.datas.grpcount}</p>
          <button href="#" onClick={Updatedata.bind(this,e.key)} className="btn btn-primary">Update</button>
          <button href="#" onClick={deletedata.bind(this,e)} className="ml-3 btn btn-warning">Delete</button>
      </div>
    </div>
  </div>
</div>
        </div>  )
        })} 
        </div>
    )

        }


function mapStateToProps(state){

  
     return{
       showdata:state.businessinfo.show
     }
     
   }
   
    
   function mapDispatchToProps(dispatch){
    return bindActionCreators({showbusinessdetails,deletedataaction},dispatch)
    }
    
    

export default connect(mapStateToProps,mapDispatchToProps)(Showallbusiness)