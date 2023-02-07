import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tabel from '../../../Components/Tabel/Tabel';
import "./AllMember.css"



const AllMember = () => {
    const [datas,setDatas] = useState([]);    
    useEffect(() => {
        async function getResults() {
            const results = await axios('https://jsonplaceholder.typicode.com/posts');
            setDatas(results.data)
          }
          getResults()
    }, []);
    const columns = [
        {
          name: "Id",
          selector: (row) => row.id,
          sortable: true,      
        },
        {
          name: "title",
          selector: (row) => row.title,
          sortable: true,
        },
        {
          type:"action",
          name: "Actions",          
          button:[
            {
                color:"dark",
                lable:"View",
                url:`member/view`,
                parameter:"id"
            },
            {
                color:"danger",
                lable:"Delete",
                url:`member/delete`,
                parameter:"id"
            }
          ]
        },
      ];
    return (
        <div className='bg-light'>
            <h3>All Member Page</h3>
            <Tabel 
                tabelData={datas} 
                column={columns}               
            />
        </div>
    );
};

export default AllMember;