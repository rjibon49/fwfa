import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
  };

const EditProgram = ({openOrder, handleOrderClose, dataDelete}) => {
    const { programName, image, ProgramDescription} = dataDelete;


        const initialInfo = {
            programName: programName,
            image: image,
            ProgramDescription: ProgramDescription
        };
      
        const [editProgram, setEditProgram] = useState(initialInfo);
    
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newProgram = {...editProgram};
            console.log(newProgram);
            newProgram[field] = value;
            setEditProgram(newProgram);
        }
    
        const handleProgramSubmit = e => {
            const programAdd = {
                ...editProgram
            }
            fetch('', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(programAdd)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    toast.success('Program Update Successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        });
                }
            })
            e.target.reset();
            e.preventDefault();
        };
  
    return (
        <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openOrder}
      onClose={handleOrderClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openOrder}>
        <Box sx={style}>
            <Form className="mb-3 mx-5" onSubmit={handleProgramSubmit}>
                <div className='text-center mb-5 mt-3'>
                    <h5 className=' fs-3 text-decoration-underline'>Update Program Details</h5>
                </div>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="programName" defaultValue={programName} onBlur={handleOnBlur} placeholder="Program Name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="text" name="image" defaultValue={image} onBlur={handleOnBlur} placeholder="Program Image" required />
                    </Form.Group>
                </Row>

                <Form.Group as={Col}>
                    <textarea className="form-control" defaultValue={ProgramDescription} name="ProgramDescription" onBlur={handleOnBlur} rows="3" placeholder="Program Description"></textarea>
                </Form.Group>
                

                <div className="text-center mt-5">
                    <Button variant="danger" type="submit" className="w-50" >
                        Submit
                    </Button>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                />
          </Form>
          </Box>
      </Fade>
    </Modal>
    );
};

export default EditProgram;