import { useState } from 'react';
import './Form.css';

const Form = () => {

    const url = "http://13.233.217.107:8080/api/AddAppointment"
    const [data, setData] = useState({
        
        Title:"", 
        AppointmentDate:"", 
        AppointmentTime:"", 
        AppointmentChannel:"yes",  
        AppointmentType:"", 
        AppointmentStatus:"active",
        
        FirstName:"",
        LastName:"",
        BookedDate:"",
        Address:"",
        City:"",
        State:"",
        pincode:"",
        country:"",

        Patient_BP:"",
        Patient_Plus:"",
        Patient_SPO2:"",
        Patient_Temp:"",
        Patient_Weight:"",
        Patient_Height:"",
        ShortNote:"",
        PrescriptionNote:"",
        UserId:"810459219",
        ClinicId:"122990548",
        DoctorId:"45346070"


    })

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData);

    }

    let onSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res)

        })
    }

    return (
        <>
           
            <div className="container-fluid border-top border-3">
                <div className="d-inline-flex flex-column p-5 bg-secondary text-white icons">
                    <div className='icons1'>
                        <div> <i className='fas fa-user-check'></i></div>
                        <div> <i className='fa fa-desktop'></i></div>
                        <div> <i className='fa fa-address-book'></i></div>
                        <div> <i className='fas fa-user-check'></i></div>
                        <div> <i className='fa fa-home'></i></div>
                        <div> <i className='fa fa-desktop'></i></div>
                        <div> <i className='fa fa-clone'></i></div>
                        <div> <i className='fa fa-credit-card'></i></div>
                        <div> <i className='fa fa-clone'></i></div>
                    </div>
                </div>
            </div>


            <h1 className='h1'>Book Appointment</h1>
            <div className="form1">
                <form className='row g-3'>
                    <div className="col-md-6" id="details">
                        <div className='dediv'>
                            <h3 className='h1'>Details</h3>
                            
                            <div className="col-md-6">                  
                                <label htmlFor="inputEmail4" className="form-label"></label>
                                <input onChange={(e) => { handle(e) }} id="Title" value={data.Title} type="text" className="form-control" placeholder=" Title" />
                            </div>
                            
                            <div className="cols_Section d-flex flex-column justify-content-center col-md-6 ">
                            <label htmlFor="FirstName">FirstName</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.FirstName} id="FirstName" placeholder="FirstName" className='label'/><br></br>
                                <label htmlFor="LastName">LastName</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.LastName} id="LastName" placeholder="LastName" className='label'/><br></br>
                                <label htmlFor="BookedDate">BookedDate</label>
                                <input type="date" onChange={(e) => { handle(e) }} value={data.BookedDate} id="BookedDate" placeholder="BookedDate" className='label'/><br></br>
                                <label htmlFor="Address">Address</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.Address} id="Address" placeholder="Address" className='label'/><br></br>
                                <label htmlFor="City">City</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.City} id="City" placeholder="City"  className='label'/><br></br>
                                <label htmlFor="State">State</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.State} id="State" placeholder="State" className='label'/><br></br>
                                <label htmlFor="Pincode">Pincode</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.pincode} id="pincode" placeholder="Pincode" className='label'/><br></br>
                                <label htmlFor="Country">Country</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.country} id="country" placeholder="Country" className='label'/><br></br>
                                </div>
                            </div>
                       </div>

                    
                    <div className="col-md-6 ">
                        <div className='appdiv'>
                            <h3 className='h1'> Appointment Details</h3>
                            <h5>John Wick M-9848848222</h5>
                            <div className="form-check form-switch">
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> AppointmentChannel Walk-In</label>
                                <input onChange={(e) => { handle(e) }} id="AppointmentChannel" value={data.AppointmentChannel}className="form-check-input" type="checkbox" role="switch"  /><br></br><br></br>
                            </div>

                            <label htmlFor="AppointmentDate">AppointmentDate</label>
                            <input onChange={(e) => { handle(e) }} id="AppointmentDate" value={data.AppointmentDate} type="Date"  placeholder='AppointmentDate' className="label"/><br></br><br></br>
                            <label htmlFor="AppointmentTime">AppointmentTime</label>
                            <input onChange={(e) => { handle(e) }} id="AppointmentTime" value={data.AppointmentTime} type="time"  placeholder='AppointmentTime' className="label" /><br></br>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="Atype">AppointmentType</label>
                                <select onChange={(e) => { handle(e) }} id="AppointmentType" value={data.AppointmentType} className="form-select" placeholder="Appointment Channel">
                                    <option>Type-1</option>
                                    <option>Type-2</option>
                                    <option>Type-3</option>
                                </select>
                            </div>
                            
                            <div className="cols_Section d-flex flex-column justify-content-center col-md-6">
                                <label htmlFor="UserId">UserId</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.UserId} id="UserId" placeholder="810459219" className="label"/><br></br>
                                <label htmlFor="ClinicId">ClinicId</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.ClinicId} id="ClinicId" placeholder="122990548" className="label"/><br></br>
                                <label htmlFor="DoctorId">DoctorId</label>
                                <input type="text" onChange={(e) => { handle(e) }} value={data.DoctorId} id="DoctorId" placeholder="45346070" className="label"/><br></br>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div id="dev">
                            <h3 className='h1'>Vital Information</h3> 
                            <div className="d-flex flex-row">
                                <div className="input-group">
                                    <span className="input-group-text">BloodPre</span>
                                    <input onChange={(e) => { handle(e) }} id="Patient_BP" value={data.Patient_BP} type="text" className="col-md-3" />
                                </div>

                                <div className="input-group">
                                    <span className="input-group-text">Height</span>
                                    <input onChange={(e) => { handle(e) }} id="Patient_Height" value={data.Patient_Height} type="text" className="col-md-3" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Spo2</span>
                                    <input onChange={(e) => { handle(e) }} id="Patient_SPO2" value={data.Patient_SPO2} type="text" className="col-md-3" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Temp</span>
                                    <input onChange={(e) => { handle(e) }} id="Patient_Temp" value={data.Patient_Temp} type="text" className="col-md-3" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Weight</span>
                                    <input onChange={(e) => { handle(e) }} id="Patient_Weight" value={data.Patient_Weight} type="text" className="col-md-3" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Pulse Rate</span>
                                    <input onChange={(e) => { handle(e) }} id="Patient_Plus" value={data.Patient_Plus} type="text" className="col-md-3" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row container my-5 ">
                            <textarea onChange={(e) => { handle(e) }} id="ShortNote" value={data.ShortNote} className="form-control" placeholder="Reason"></textarea>
                            <textarea onChange={(e) => { handle(e) }} id="PrescriptionNote" value={data.PrescriptionNote} className="form-control" placeholder="Note For Doctor"></textarea>
                        </div>
                    </div>

                    <div className="container my-2">
                        <div className="d-flex flex-row container">
                            <button id="Cancel" type="reset" className="btn btn-primary btn-lg">Cancel</button>
                            <button  onClick={onSubmit} id="Book" type="submit" className="btn btn-primary btn-lg">Book</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
