import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemForms.css'


const ItemForm = ({ item, onSuccess }) => {
    const [fname, setfname] = useState('');
    const [mname, setmname] = useState('');
    const [lname, setlname] = useState('');
    const [Address, setAddress] = useState('');
    const [Barangay, setBarangay] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [ZipCode, setZipCode] = useState('');
    const [Religion, setReligion] = useState('');
    const [Sex, setSex] = useState('');
    const [Age, setAge] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Student_No, setStudent_No] = useState('');
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [PlaceofBirth, setPlaceofBirth] = useState('');
    const [DateofBirth, setDateofBirth] = useState('');
    const [CivilStatus, setCivilStatus] = useState('');
    const [Course, setCourse] = useState('');
    const [Year, setYear] = useState('');
    const [Section, setSection] = useState('');
    const [Department, setDepartment] = useState('');
    const [Subject, setSubject] = useState('');
    const [Citizenship, setCitizenship] = useState('');
   

    useEffect(() => {
        if (item) {
        setfname(item.fname);
        setmname(item.mname);
        setlname(item.lname);
        setAddress(item.Address);
        setBarangay(item.Barangay);
        setCity(item.City);
        setState(item.State);
        setZipCode(item.ZipCode);
        setReligion(item.Religion);
        setSex(item.Sex);
        setAge(item.Age);
        setPhone(item.Phone);
        setEmail(item.Email);
        setStudent_No(item.Student_No);
        setHeight(item.Height);
        setWeight(item.Weight);
        setPlaceofBirth(item.PlaceofBirth);
        setDateofBirth(item.DateofBirth);
        setCivilStatus(item.CivilStatus);
        setCourse(item.Course);
        setYear(item.Year);
        setSection(item.Section);
        setDepartment(item.Department);
        setSubject(item.Subject);
        setCitizenship(item.Citizenship);
       
    }
    }, [item]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { fname, mname, lname, Address,Barangay,City,State, 
            ZipCode, Religion, Sex, Age, Phone, Email,Student_No, Height, Weight, PlaceofBirth, DateofBirth, CivilStatus,
        Course, Year, Section, Department, Subject, Citizenship,};
        try {
            if (item) {
                await
        axios.put(`http://localhost:8000/myapi/items/${item.id}/`, data);
        } else {
                await
        axios.post('http://localhost:8000/myapi/items/', data);
        }
        onSuccess();
    } catch (error) {
console.error('There was an error submitting the form!', error);
    }
};


    return (
    
    <form onSubmit={handleSubmit}>
    <div>
        <label>Firstname:</label>
            <input type="text" value={fname} onChange={(e) => setfname(e.target.value)} />
    </div>
    <div>
        <label>Middlename:</label>
            <input type="text" value={mname} onChange={(e) => setmname(e.target.value)} />
    </div>
    <div>
        <label>Lastname:</label>
            <input type="text" value={lname} onChange={(e) => setlname(e.target.value)} />
    </div>

    <div>
        <label>Address:</label>
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
    </div>
    <div>
        <label>Barangay:</label>
            <input type="text" value={Barangay} onChange={(e) => setBarangay(e.target.value)} />
    </div>
    <div>
        <label>City:</label>
            <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
    </div>
    <div>
        <label>State:</label>
            <input type="text" value={State} onChange={(e) => setState(e.target.value)} />
    </div>

    <div>
        <label>Zipcode:</label>
            <input type="text" value={ZipCode} onChange={(e) => setZipCode(e.target.value)} />
    </div>
    <div>
        <label>Religion:</label>
            <input type="text" value={Religion} onChange={(e) => setReligion(e.target.value)} />
    </div>
    <div>
        <label>Sex:</label>
            <input type="text" value={Sex} onChange={(e) => setSex(e.target.value)} />
    </div>

    <div>
        <label>Age:</label>
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} />
    </div>
    <div>
        <label>Phone:</label>
            <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} />
    </div>
    <div>
        <label>Email:</label>
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
    </div>

    <div>
        <label>Student No:</label>
            <input type="text" value={Student_No} onChange={(e) => setStudent_No(e.target.value)} />
    </div>
    <div>
        <label>Height:</label>
            <input type="text" value={Height} onChange={(e) => setHeight(e.target.value)} />
    </div>
    <div>
        <label>Weight:</label>
            <input type="text" value={Weight} onChange={(e) => setWeight(e.target.value)} />
    </div>
    <div>
        <label>Place of Birth:</label>
            <input type="text" value={PlaceofBirth} onChange={(e) => setPlaceofBirth(e.target.value)} />
    </div>
        
    <div>
        <label>Date of Birth:</label>
            <input type="text" value={DateofBirth} onChange={(e) => setDateofBirth(e.target.value)} />
    </div>
    <div>
        <label>Civil Status:</label>
            <input type="text" value={CivilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
    </div>

    <div>
        <label>Course:</label>
            <input type="text" value={Course} onChange={(e) => setCourse(e.target.value)} />
    </div>
    <div>
        <label>Year:</label>
            <input type="text" value={Year} onChange={(e) => setYear(e.target.value)} />
    </div>
    <div>
        <label>Section:</label>
            <input type="text" value={Section} onChange={(e) => setSection(e.target.value)} />
    </div>
    <div>
        <label>Department:</label>
            <input type="text" value={Department} onChange={(e) => setDepartment(e.target.value)} />
    </div>
    <div>
        <label>Subject:</label>
            <input type="text" value={Subject} onChange={(e) => setSubject(e.target.value)} />
    </div>

    <div>
        <label>Citizenship:</label>
            <input type="text" value={Citizenship} onChange={(e) => setCitizenship(e.target.value)} />
    </div>
    
        <button type="submit">Submit</button>
        </form>
    );
};
export default ItemForm;