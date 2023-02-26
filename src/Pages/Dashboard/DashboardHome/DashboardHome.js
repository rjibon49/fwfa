import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


function DashboardHome() {
//   const { user, logout } = useAuth();


//   const [itemOrder, setOrderItem] = useState([]);
//   useEffect(() => {
//     const url = `https://hidden-taiga-98154.herokuapp.com/order?email=${user.email}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setOrderItem(data));
//   }, []);

//   const handleDelete = email => {
//     const url = `https://hidden-taiga-98154.herokuapp.com/order?email=${email}`;
//     fetch(url, {
//         method: 'DELETE'
//     })
//     .then( res => res.json())
//     .then( data => {
//         console.log(data);
//         if(data.deletedCount) {
//           toast.success('Data Delete Successfully', {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: false,
//             progress: undefined,
//             });
//             const remaining = itemOrder.filter(pl => pl._id !==email)
//             setOrderItem(remaining);
//         }
//     })
// }


  return ( 
    <Container className="py-5 my-5">
    <Row>
      <Col xl={4} lg={4} md={6} sm={12} xs={12} >
        <div className="text-center">
            <h2>Total Article</h2>
            <p>See All</p>
        </div>
      </Col>
      <Col xl={4} lg={4} md={6} sm={12} xs={12} >
        <div className="text-center">
            <h2>Total Events</h2>
            <p>See All</p>
        </div>
      </Col>
      <Col xl={4} lg={4} md={6} sm={12} xs={12} >
        <div className="text-center">
            <h2>Total Program</h2>
            <p>See All</p>
        </div>
      </Col>
    </Row>
  </Container>
  );
};


export default DashboardHome;