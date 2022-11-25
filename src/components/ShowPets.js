import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase';
import { db } from '../firebase';
import { collection, getDocs, query, where, doc, updateDoc, addDoc } from 'firebase/firestore';
import Loader  from './Loader';
import Pagination from './Pagination';

const ShowPets = () => {

    const initialState = [];
    const [loading, setLoading] = useState(true);
    const [petData, setPetData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [objectsPerPage, setObjectsPerPage] = useState(3);
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const [petName, setPetName] = useState('')
    const [ID, setID] = useState('')
    const [openForm, setOpenForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    

    const fetchPetData = async () => {

        if(loading === true)
        {
            const q = query(collection(db, "Pets"), where("adoptionStatus", "==", "Available"));
            const querySnapshot  = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setPetData(current => [...current, doc.data()]);
              })
            
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            
        }
          
    }

    const navigate = useNavigate();

    const openAdoptionForm = (name, id) => {
        setOpenForm(true);
        setPetName(name);
        setID(id);
    }

    const closeAdoptionForm = () => {
        setOpenForm(false);
        navigate('/');
    }

    const handleFormSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        const data = {
            Name: name,
            Email: email,
            Phone: number,
            Pet_Name: petName,
            Pet_ID: ID
          };
          console.log(data);      

        addDoc(collection(db, "Adoption Applications"), data);

        const petRef = doc(db, "Pets", ID);
        
        updateDoc(petRef, {
            adoptionStatus: "Pending"
          });
        
          setFormSubmitted(true);

    };

    useEffect(() => {   
            
        fetchPetData();
        
    }, [])
    
    console.log(petData);

    if(loading === false)
    {
        console.log(petData[1].id);
    }

    if (loading === true ) return (
        <Loader />
    )
    

    const indexOfLastObject = currentPage * objectsPerPage;
    const indexOfFirstObject = indexOfLastObject - objectsPerPage;
    const currentData = petData.slice(indexOfFirstObject, indexOfLastObject);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const results = [];
    
    for (const data of currentData)
    {
        results.push(
            <div className="pet-listing" key={data.id}>
                <img className="pet-listing-image" src={data.imageURL} />
                <h4 className="pet-name">{data.name}</h4>
                <hr />
                <div className="pet-listing-info">
                    <p>Age : {data.age}</p>
                    <p>Breed : {data.breed}</p>
                </div>
                <button type="submit" className="adopt-button" onClick={() =>openAdoptionForm(data.name, data.id)}>Apply For Adoption</button>
        </div>,
        );
    }

    return (
        <div>
            {openForm ? 
            <div className="adoption-container">
                { !formSubmitted ? <h2>Want to adopt our {petName} ?</h2> : <h2>Thank you for applying !</h2>}
                { !formSubmitted ? <h2>Please fill in the form below</h2> : <h2>We will get back to you ASAP</h2>}
                { !formSubmitted ? <form className="adoption-form" name="adoptionForm" onSubmit={handleFormSubmit}>
                    <div className ="input-group">
                    <label>Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="input-group">
                    <label>Phone Number</label>
                    <input type="number" name="number" id="number" onChange={(e) => setNumber(e.target.value)} required /> 
                    </div>

                    <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} required /> 
                    </div>

                    <div>
                        <button type="submit" className="adoption-submit-button">Submit</button>
                    </div>

                    <div>
                        <button type="button" className="cancel-button" onClick={() => setOpenForm(false)}>Cancel</button>
                    </div>        

                </form> : 
                <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                    <div>
                        <button type="button" className="return-button" onClick={() => closeAdoptionForm()}>Return</button>
                    </div>   
                </div>
                }     
                
            </div> : <div>
                <h3>Pets for Adoption</h3>
                <Pagination objectsPerPage={objectsPerPage} totalObjects={petData.length} paginate={paginate} loading={loading}/>
                <div className='pet-container'>{results}</div>
            </div>}

        </div>
        
    )
}

export default ShowPets

