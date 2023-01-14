import React from 'react';
import "./AdmitCardsDownloads.css"

const AdmitCardsDownloads = () => {
    return (
        <div className='bg-light pb-3 background'>
    <div>
        <h4 className='pt-2'><i class="bi bi-text-indent-left"></i>Online Admit Card Download / Print</h4>
    </div>
    <hr></hr>
            <div className="wrapper ">
        <div className="grid">
          <div className="item bold">
Select Semester</div>
          <div className="item"><select id="country" name="country">
      <option value="australia">Fall   2022 (4M)</option>
      <option value="canada">Summer 2022 (4M)</option>
      <option value="usa">Spring 2022 (4M)</option>
      <option value="usa">Fall   2021 (4M)</option>
      <option value="usa">Summer 2021 (4M)</option>
      <option value="usa">Spring 2021 (4M)</option>
      <option value="usa">Fall   2020 (4M)</option>
      <option value="usa">Summer 2020 (4M)</option>
      <option value="usa">Spring 2020 (4M)</option>
      <option value="usa">Fall   2019 (4M)</option>
      <option value="usa">Summer 2019 (4M)</option>
      <option value="usa">Spring 2019 (4M)</option>
    </select></div>
          <div className="item bold">
          Midterm Admit Card</div>
          <div className="item"><button type="button" className="btn btn-success btn-sm">Download / Print</button></div>
          <div className="item bold">Final Term Admit Card</div>
          <div className="item"><p className='text-danger'>Final Term Payment Incomplete, Please Clear Payments for get Admit Card!</p> </div>
        </div>
        </div>
        </div>
    );
};

export default AdmitCardsDownloads;