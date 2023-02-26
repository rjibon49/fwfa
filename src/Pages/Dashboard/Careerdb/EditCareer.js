import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Editor } from '@tinymce/tinymce-react';

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

const EditCareer = ({openOrder, handleOrderClose, dataDelete}) => {

    const editorRef = useRef(null);


    const {careerName, position, vacancy, date } = dataDelete;


        const initialInfo = {
            careerName: careerName,
            position: position,
            vacancy: vacancy,
            date: date
        };
      
        const [editCareer, setEditCareer] = useState(initialInfo);
    
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newProgram = {...editCareer};
            console.log(newProgram);
            newProgram[field] = value || editorRef.current.getContent();;
            setEditCareer(newProgram);
        }
    
        const handleProgramSubmit = e => {
            const careerAdd = {
                ...editCareer
            }
            fetch('', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(careerAdd)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    toast.success('Career Update Successfully', {
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
                    <h5 className=' fs-3 text-decoration-underline'>Update Career Details</h5>
                </div>

                <Form.Group as={Col} className="mb-3">
                    <Form.Control type="text" name="careerName" defaultValue={careerName} onBlur={handleOnBlur} placeholder="Carrer Title" required />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control type="text" name="position" defaultValue={position} onBlur={handleOnBlur} placeholder="Position" required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="number" name="vacancy" defaultValue={vacancy} onBlur={handleOnBlur} placeholder="Vacancy" required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="date" name="date" defaultValue={date} onBlur={handleOnBlur} placeholder="Last Date" required />
                    </Form.Group>
                </Row>

               

                    <Editor name="ArticleDetails" onBlur={handleOnBlur}
                        onInit={(evt, editor) => editorRef.current = editor}
                        // initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                        height: 400,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Roboto,Arial,sans-serif; font-size:14px }'
                        
                        }}
                    />
                

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

export default EditCareer;