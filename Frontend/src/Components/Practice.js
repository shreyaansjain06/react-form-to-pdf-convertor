import React from 'react';
import iitklogo from '../assets/images/iitklogo.jpeg';
import gymkhana from '../assets/images/gymkhana.jpeg';
import '../assets/css/Practice.css';

const Practice = () => {
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
          <input type="checkbox" id="reimbursment" />
          <label htmlFor="vendor">Payment to vendor</label>
          <input type="checkbox" id="vendor" />
        </div>
        <table className="table1">
          <tr>
            <td>Name of Council/Cell:</td>
            <td>
              <input type="text" />
            </td>
            <td>Name of Club/Head</td>
            <td>
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
              <input type="text" />
            </td>
            <td>
              <input type="text" className="size" />
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
            <td>
              <input type="text" className="size" />
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
            <td>
              <input type="text" className="size" />
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
            <td>
              <input type="text" className="size" />
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
            <td>
              <input type="text" className="size" />
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
            <td>
              <input type="text" className="size" />
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
            <td>
              Total:
              <input type="text" id="total" />
            </td>
            <td>
              <input type="text" />
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
              <input type="text" />
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
        <table className="table5">
          <tr>
            <td>Gymkhana Office</td>
            <td>Finance Convener</td>
          </tr>
          <tr>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Practice;
