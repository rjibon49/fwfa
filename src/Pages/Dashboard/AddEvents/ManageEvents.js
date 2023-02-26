import React, { useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import EditEvents from './EditEvents';
import parse from 'html-react-parser';
import useAuth from '../../../hooks/useAuth';

const ManageEvents = () => {
  const [dataDelete, setDataDelete] = useState([]);
  // const {editdatainfo} = UseProgram();

  const [openOrder, setOpenOrder] = useState(false);
  const handleOrderOpen = () => setOpenOrder(true);
  const handleOrderClose = () => setOpenOrder(false);

  const { admin } = useAuth();

  useEffect(() => {
    fetch ('https://server.financialwellnessforall.dicoit.com/event')
    .then ( res => res.json())
    .then ( data => setDataDelete(data));
}, []);

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure, You want to delete? ");
    if(proceed) {
      const url = `https://server.financialwellnessforall.dicoit.com/event/${id}`;
    console.log(id);
    fetch(url, {
        method: 'DELETE'
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if(data.deletedCount) {
          toast.success('Event Delete Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
            const remaining = dataDelete.filter(pl => pl._id !== id)
            setDataDelete(remaining);
        }
    })
    }
}

console.log(dataDelete);
    return (
      <div class="table-responsive">
          <Table striped bordered hover variant="dark" >
            <thead style={{verticalAlign:"middle"}}>
              <tr className="text-center">
                <th>Event Title</th>
                <th>Date</th>
                <th>Event Image</th>
                <th className='w-50'>Details</th>
                <th>Action</th>
              </tr>
              {
                dataDelete.map(pg => <tr key={pg._id}>
                    <td>{pg.eventName}</td>
                    <td className='text-center'>{pg.eventDate}</td>
                    <td><Image src={pg.eventImage}  className="dashboardImage"/></td>
                    <td>{parse(`${pg.undefined}`)}</td>
                    <td className="text-center">
                    { admin && 
                    <div>
                      <button className="btn btn-danger p-1 m-1" onClick={handleOrderOpen}><BorderColorIcon className="m-1"/></button>
                      <button className="btn btn-danger p-1 m-1" onClick={ () => handleDelete(pg._id)}><DeleteIcon className="m-1"/></button>
                    </div>}
                    </td>
                  </tr>)
              }
            </thead>
          </Table>

          <EditEvents
          key ={dataDelete._id}
          handleOrderClose = {handleOrderClose}
          openOrder = {openOrder}
          dataDelete={dataDelete}
        ></EditEvents>
      </div>
    );
};

export default ManageEvents;