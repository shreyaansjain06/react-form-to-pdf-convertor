import React from 'react'
import iitklogo from '../assets/images/iitklogo.jpeg';
import gymkhana from '../assets/images/gymkhana.jpeg';
import '../assets/css/Practice.css';
class Form extends React.Component {
  render(){
    return (
      <div className="p-3 mb-2 bg-light text-dark container-fluid">
      <div className="top container-fluid">
        <img src={iitklogo} className="iitklogo  img-responsive " alt="iitklogo" />
        <div className="heading">
          <h1 className="">Bill Clearance FORM – SG2 </h1>
          <h1>Indian Institute of Technology Kanpur</h1>
          <h4  style={{fontWeight:"30"}}>Students Gymkhana Account</h4>
        </div>
        <div>
        <img src={gymkhana} className="gymkhana  img-responsive img-fluid" alt="gymkhana" />
        <div className="container-fluid" > 
       <h5 className="img_tag"style={{fontWeight:".8",fontSize:".5rem",paddingLeft:"2.5rem"}}>Student's Gymkhana</h5>
      <h6 style={{textAlign:"center",fontWeight:"1",fontSize:".6rem"}}>IIT Kanpur</h6>
      </div>
      </div>
      </div>
      <div className="container-fluid">
      <form  >
        <div className="checkbox container-fluid" >
          <label htmlFor="reimbursment"className="tick_text ">Reimbursement</label>
          <input type="checkbox" id="reimbursment" className="tick"/>
          <label htmlFor="vendor"className=" tick_text">Payment to vendor</label>
          <input type="checkbox" className="tick"id="vendor" />
        </div>
        <div className="table-responsive">
        <table className=" table1">
          <tr>
            <td className="">Name of Council/Cell:</td>
            <td className="">
              <input type="text" />
            </td>
            <td class="">Name of Club/Head</td>
            <td className="">
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Name of Executive:</td>
            <td>
              <input type="text" />
            </td>
            <td>Name ofCoordinator:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Roll No.</td>
            <td>
              <input type="text" />
            </td>
            <td>Roll No.</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Contact no. </td>
            <td>
              <input type="text" />
            </td>
            <td>Contact no. </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        </div>
        <div className="table-responsive-sm">
        <table className="table2">
          <tr>
            <td>Date </td>
            <td>Bill /VR. No</td>
            <td>Brief Particulars of Transaction</td>
            <td>Amount (In ₹)</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" className="size"style={{width:"100%"}} />
            </td>
            <td>
              <input type="text"style={{width:"100%"}} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" className="size" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" className="size" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text"style={{width:"100%"}} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" className="size" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" className="size"style={{width:"100%"}} />
            </td>
            <td>
              <input type="text"style={{width:"100%"}} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" className="size" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" />
            </td>
            <td  style={{display:"flex"}}>
             <span> Total</span>:
              <input type="text" id="total" style={{marginLeft:"3rem"}} />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        </div>
        <div className="para container-fluid">
          <h4>In case of expenditure below ₹25,000:</h4>
          <p>
            “I am personally satisfied that these goods purchased are of the
            requisite quality and purchased from a reliable supplier at a
            reasonable price “
          </p>
          <h4>In case of expenditure above ₹25,000 and below ₹2,50,000:</h4>
          <div id="headline">
            The LPC form has to be attached along with this form.
          </div>
        </div>
        <div  className="table-responsive">
        <table className="table3">
          <tr>
            <td>Chairperson/President/Genera, UG,PG- Secretary</td>
            <td>
              Chairperson, Students' Senate (Only in Case of Senator Seed Fund)
            </td>
            <td>(Approved by) Faculty Counsellor</td>
          </tr>
          <tr>
            <td>
              <input type="text" className="t3_input" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" className="t3_input" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" style={{width:"100%"}} />
            </td>
          </tr>
        </table>
        </div>
        <div id="headline2_div">
        <h4 id="headline2">To be filled by Finance Convener / FC Member</h4>
        </div>
        <div  className="table-responsive">
        <table className="table4">
          <tr>
            <td>Balance in Club/Head</td>
            <td>Balance in Council/Cell:</td>
            <td>Remarks (if any):</td>
            <td>Verified for ₹:</td>
          </tr>
          <tr>
            <td>
              <input type="text" style={{width:"100%"}}/>
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        </div>
        <div  className="table-responsive">
        <table className="table5">
          <tr>
            <td>Gymkhana Office</td>
            <td>Finance Convener</td>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        </div>
        <button type="button" class="btn btn-secondary" id="submit" onClick={this.props.handlePrint}>Save as Pdf</button>
      </form>
      </div>
    </div>
   
  );
  }
   
}

export default Form;