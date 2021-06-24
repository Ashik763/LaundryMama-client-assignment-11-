import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import UserData from '../ProcessPayment/UserData/UserData';

const Dashboard = () => {
    // const {phone} = useParams();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [usersData,setUsesrData] = useState([]);
 
    useEffect(() => {
        var phone = prompt('Input  your phone number to show your orders.');
        
        fetch(`https://rocky-fortress-38643.herokuapp.com/userInfo/${phone}`)
        .then(res => res.json())
        .then((data) => {
        //   setServiceDetail(data);
          console.log(data);
          setUsesrData(data);
          
        },[phone]);


    })
   
    return (
        <div>
            {usersData.map(data => <UserData userData={data} />)}
        
          
        </div>
    );
};

export default Dashboard;