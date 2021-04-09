import React from 'react';
import axios from 'axios';
import './Style.css'


function APICallTest() {
    APItest();
    return (
        <div>
            <h1>APICallTest</h1>
        </div>
    );
}


const APItest = () => {
    axios(
      {
        url: '/api/lists/20210101',
        method: 'get',
        // baseURL: 'http://localhost:8080',
        // withCredentials: true,
      }
    ).then(function (response) {
      console.log(response.data);
    });
  }
  

export default APICallTest;
