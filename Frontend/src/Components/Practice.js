import React from 'react';
import iitklogo from '../assets/images/iitklogo.jpeg';
import gymkhana from '../assets/images/gymkhana.jpeg';
import '../assets/css/Practice.css';
import { useState } from 'react';

const Practice = () => {
  const [user, setUser] = useState({ 
    tf1: '',
    tf2: '', 
    tf3: '', 
    tf4: '', 
    tf5: '', 
    tf6: '', 
    tf7: '', 
    tf8: '', 
    tf9: '', 
    tf10: '', 
    tf11: '', 
    tf12: '', 
    tf13: '', 
    tf14: '', 
    tf15: '', 
    tf16: '', 
    tf17: '', 
    tf18: '', 
    tf19: '', 
    tf20: '', 
    tf21: '', 
    tf22: '', 
    tf23: '', 
    tf24: '', 
    tf25: '', 
    tf26: '', 
    tf27: '', 
    tf28: '', 
    tf29: '', 
    tf30: '', 
    tf31: '', 
    tf32: '', 
    tf33: '', 
    tf34: '', 
    tf35: '', 
    tf36: '', 
    tf37: '', 
    tf38: '', 
    tf39: '', 
    tf40: '', 
    tf41: ''
});
  let name, value;
  const handleInput= (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {    
      tf1, 
      tf2, 
      tf3, 
      tf4, 
      tf5, 
      tf6, 
      tf7, 
      tf8, 
      tf9, 
      tf10, 
      tf11, 
      tf12, 
      tf13, 
      tf14, 
      tf15, 
      tf16, 
      tf17, 
      tf18, 
      tf19, 
      tf20, 
      tf21, 
      tf22, 
      tf23, 
      tf24, 
      tf25, 
      tf26, 
      tf27, 
      tf28, 
      tf29, 
      tf30, 
      tf31, 
      tf32, 
      tf33, 
      tf34, 
      tf35, 
      tf36, 
      tf37, 
      tf38, 
      tf39, 
      tf40, 
      tf41 } = user;
    try {
      const res = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tf1, 
          tf2, 
          tf3, 
          tf4, 
          tf5, 
          tf6, 
          tf7, 
          tf8, 
          tf9, 
          tf10, 
          tf11, 
          tf12, 
          tf13, 
          tf14, 
          tf15, 
          tf16, 
          tf17, 
          tf18, 
          tf19, 
          tf20, 
          tf21, 
          tf22, 
          tf23, 
          tf24, 
          tf25, 
          tf26, 
          tf27, 
          tf28, 
          tf29, 
          tf30, 
          tf31, 
          tf32, 
          tf33, 
          tf34, 
          tf35, 
          tf36, 
          tf37, 
          tf38, 
          tf39, 
          tf40, 
          tf41
        }),
      });
      const data = await res.json();
      console.log('succesfully registered');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="top">
        <img src={iitklogo} className="iitklogo" alt="iitklogo" />
        <div className="heading">
          <h1>Bill Clearance FORM – SG2 </h1>
          <h1>Indian Institute of Technology Kanpur</h1>
          <h4>Students Gymkhana Account</h4>
        </div>
        <img src={gymkhana} className="gymkhana" alt="gymkhana" />
      </div>
      <form method="POST">
        <div className="checkbox">
          <label htmlFor="reimbursment">Reimbursement</label>
          <input value={user.tf1} onChange={handleInput} name="tf1"type="checkbox" id="reimbursment" />
          <label htmlFor="vendor">Payment to vendor</label>
          <input value={user.tf2} onChange={handleInput} name="tf2"type="checkbox" id="vendor" />
        </div>
        <table className="table1">
          <tr>
            <td>Name of Council/Cell:</td>
            <td>
              <input value={user.tf3} onChange={handleInput} name="tf3"type="text" />
            </td>
            <td>Name of Club/Head</td>
            <td>
              <input value={user.tf4} onChange={handleInput} name="tf4"type="text" />
            </td>
          </tr>
          <tr>
            <td>Name of Executive:</td>
            <td>
              <input value={user.tf5} onChange={handleInput} name="tf5"type="text" />
            </td>
            <td>Name ofCoordinator:</td>
            <td>
              <input value={user.tf6} onChange={handleInput} name="tf6"type="text" />
            </td>
          </tr>
          <tr>
            <td>Roll No.</td>
            <td>
              <input value={user.tf7} onChange={handleInput} name="tf7"type="text" />
            </td>
            <td>Roll No.</td>
            <td>
              <input value={user.tf8} onChange={handleInput} name="tf8"type="text" />
            </td>
          </tr>
          <tr>
            <td>Contact no. </td>
            <td>
              <input value={user.tf9} onChange={handleInput} name="tf9"type="text" />
            </td>
            <td>Contact no. </td>
            <td>
              <input value={user.tf10} onChange={handleInput} name="tf10"type="text" />
            </td>
          </tr>
        </table>
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
              <input value={user.tf11} onChange={handleInput} name="tf11"type="text" />
            </td>
            <td>
              <input value={user.tf12} onChange={handleInput} name="tf12"type="text" className="size" />
            </td>
            <td>
              <input value={user.tf13} onChange={handleInput} name="tf13"type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input value={user.tf14} onChange={handleInput} name="tf14"type="text" />
            </td>
            <td>
              <input value={user.tf15} onChange={handleInput} name="tf15"type="text" className="size" />
            </td>
            <td>
              <input value={user.tf16} onChange={handleInput} name="tf16"type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input value={user.tf17} onChange={handleInput} name="tf17"type="text" />
            </td>
            <td>
              <input value={user.tf18} onChange={handleInput} name="tf18"type="text" className="size" />
            </td>
            <td>
              <input value={user.tf19} onChange={handleInput} name="tf19"type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input value={user.tf20} onChange={handleInput} name="tf20"type="text" />
            </td>
            <td>
              <input value={user.tf21} onChange={handleInput} name="tf21"type="text" className="size" />
            </td>
            <td>
              <input value={user.tf22} onChange={handleInput} name="tf22"type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input value={user.tf23} onChange={handleInput} name="tf23"type="text" />
            </td>
            <td>
              <input value={user.tf24} onChange={handleInput} name="tf24"type="text" className="size" />
            </td>
            <td>
              <input value={user.tf25} onChange={handleInput} name="tf25"type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input value={user.tf26} onChange={handleInput} name="tf26"type="text" />
            </td>
            <td>
              <input value={user.tf27} onChange={handleInput} name="tf27"type="text" className="size" />
            </td>
            <td>
              <input value={user.tf28} onChange={handleInput} name="tf28"type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input value={user.tf29} onChange={handleInput} name="tf29"type="text" />
            </td>
            <td>
              Total:
              <input value={user.tf30} onChange={handleInput} name="tf30"type="text" id="total" />
            </td>
            <td>
              <input value={user.tf31} onChange={handleInput} name="tf31"type="text" />
            </td>
          </tr>
        </table>
        <div className="para">
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
              <input value={user.tf32} onChange={handleInput} name="tf32"type="text" />
            </td>
            <td>
              <input value={user.tf33} onChange={handleInput} name="tf33"type="text" />
            </td>
            <td>
              <input value={user.tf34} onChange={handleInput} name="tf34"type="text" />
            </td>
          </tr>
        </table>
        <h4 id="headline2">To be filled by Finance Convener / FC Member</h4>
        <table className="table4">
          <tr>
            <td>Balance in Club/Head</td>
            <td>Balance in Council/Cell:</td>
            <td>Remarks (if any):</td>
            <td>Verified for ₹:</td>
          </tr>
          <tr>
            <td>
              <input value={user.tf35} onChange={handleInput} name="tf35"type="text" />
            </td>
            <td>
              <input value={user.tf36} onChange={handleInput} name="tf36"type="text" />
            </td>
            <td>
              <input value={user.tf37} onChange={handleInput} name="tf37"type="text" />
            </td>
            <td>
              <input value={user.tf38} onChange={handleInput} name="tf38"type="text" />
            </td>
          </tr>
        </table>
        <table className="table5">
          <tr>
            <td>Gymkhana Office</td>
            <td>Finance Convener</td>
          </tr>
          <tr>
            <td><input value={user.tf39} onChange={handleInput} name="tf39"type="text" /></td>
            <td><input value={user.tf40} onChange={handleInput} name="tf40"type="text" /></td>
          </tr>
        </table>
        <input value={user.tf41} onChange={handleInput} name="tf41"type="submit" value="submit" id="submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};
export default Practice;
