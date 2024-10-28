import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function DetailsView() {

  const[events, setEvents]=useState([]);
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/freights/`).then(function(response) {
      setEvents(response.data.data);
    });
  }
  const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/freights/${id}`).then(function(response){
      getDatas();
    });
  }
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  return (
    <>
    {events &&
      <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={false}
          events={events}
          eventContent={renderEventContent}
        />
    }
      {data && data.map((d, key) =>
          <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.customer_id}</td>
              <td>{d.shipment_type}</td>
              <td>{d.pickup_location}</td>
              <td>{d.total_qty}</td>
              <td>{d.pickup_time}</td>
              <td>{d.transport_type_id}</td>
              <td>{d.delivery_location}</td>
              <td>{d.delivery_time}</td>
              <td>{d.payment_method	}</td>
              <td>{d.vat}</td>
              <td>{d.total_amount}</td>
              <td>
                  <Link to={`/freights/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
                  <button type='button' onClick={() => deleteData(d.id)} className='btn btn-warning'>Delete</button>
                  <button type='button' onClick={() => (d.id)} className='btn btn-success'>Approve</button>
              </td>
          </tr>
      )}
    </>
  )
}

export default DetailsView