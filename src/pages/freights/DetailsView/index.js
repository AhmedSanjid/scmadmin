import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function DetailsView() {

  const[events, setEvents]=useState([]);
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
    let caldata=[];
    axios.get(`${process.env.REACT_APP_API_URL}/freights/`).then(function(response) {
      if(response.data.data){
        response.data.data.forEach(element => {
          let nobj={
            "id":element.id,
            "title":element.customer?.company_name,
            "company_name":element.customer?.company_name,
            "delivery_location":element.delivery_location,
            "pickup_location":element.pickup_location,
            "start":element.pickup_time,
            "end":element.delivery_time
          }
          caldata.push(nobj);
        });
      }
      
      setEvents(caldata);
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
        <b>{eventInfo.event?._def?.extendedProps?.company_name}</b><br/>
        <i><b>Pickup:</b> {eventInfo.event?._def?.extendedProps?.pickup_location}</i><br/>
        <i><b>Delivery:</b> {eventInfo.event?._def?.extendedProps?.delivery_location}</i>
      </>
    )
  }
  return (
    <>
    {events &&
      <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={events}
          eventContent={renderEventContent}
        />
    }
    </>
  )
}

export default DetailsView

