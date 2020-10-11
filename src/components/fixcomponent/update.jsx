import React,{useState} from 'react';
import {putdata} from "../../actions/index"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";

function Update(props) {




 const daata = props.updta;

const {datas} = daata[0];
const key = daata[0].key

   const [bname, setbname] = useState(datas.businessname)
   const [boname, setboname] = useState(datas.businessownername)
    const [gmc, setgmc] = useState(datas.grpcount)
    const [category, setcategory] = useState(datas.category)
  const [complete, setcomplete] = useState(false)
    const updatedata = {
        businessname:bname,
        businessownername:boname,
        grpcount:gmc,
        category:category,
        date:new Date(),
    }
    
    const handleSubmit = (event) => {
        
       

        event.preventDefault();

        putdata(updatedata,key)
        setcomplete(true)
        props.moveback()
      };

    return (
        <div className='jumbotron jumbotron-fluid container p-5'>
            <h4 class="display-6 text-center">Update Your Business</h4>
            {complete ? <h6 class="mt-4 display-6 text-center text-success">Your info successfully Updated</h6> : null}
            {/* <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>  */}
           <form onSubmit={handleSubmit}>
  <div class="form-row mt-5">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Business Name</label>
      <input type="text" class="form-control" id="inputEmail4" value={bname} onChange={(e)=> setbname(e.target.value)} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Business Owner name</label>
      <input type="text" class="form-control" id="inputPassword4" value={boname}  onChange={(e)=> setboname(e.target.value)} required />
    </div>

  </div>
  <div class="form-group">
    <label for="inputAddress">Group members count</label>
    <input required type="number" class="form-control" id="inputAddress" value={gmc} onChange={(e)=> setgmc(e.target.value)}  placeholder="Group member count"  />
  </div>

  <div class="form-row">
   <div class="form-group col-md-4">
      <label for="category">Select Category of Business</label>
      <select id="category"  value={category}  onChange={(e)=> setcategory(e.target.value)}  class="form-control" required>
<option selected>choose..</option>
        <option>Food panda</option>
        <option>IT Comapnay</option>
      </select>
    </div>
  
  </div>
  <div class="form-group col-md-6">
      <label for="inputEmail4">Date/time</label>
      <input type="text" class="form-control" id="inputEmail4" value={new Date()} required/>
    </div>
 
  <button type="submit" class="mt-3 btn btn-primary w-100">Update</button>
</form>
       </div>
    )
}

function mapStateToProps(state){

    return{
      showdata:state.businessinfo.show
    }
    
  }
  
   
  function mapDispatchToProps(dispatch){
   return bindActionCreators(putdata,dispatch)
   }
   

   export default connect(null,mapDispatchToProps)(Update)
  