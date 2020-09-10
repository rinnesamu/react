import React from "react";
//import { Table } from 'react-bootstrap'
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";
let data;
const List = () => {


    return(
        <div className="container">
            <p>Tapahtumat:</p>
          <JsonToTable json={data} />
        </div>
    )
}
const promise = axios.get('http://localhost:3001/events');
promise.then(response => {
    data = response.data;
    for (let i = 0; i < data.length; i++){
        data[i].important = data[i].important.toString(); // taulukko ei jostain syystä näytä boolean arvoja, joten muutetaan ne string muotoon
    }
})

export default List