import React, { useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProgram = () => {

    const [addProgram, setAddProgram ] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProgram = {...addProgram};
        console.log(newProgram);
        newProgram[field] = value;
        setAddProgram(newProgram);
    }

    const handleProductSubmit = e => {
        const programAdd = {
            ...addProgram
        }
        fetch('https://server.financialwellnessforall.dicoit.com/program', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(programAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Program Added Successfully', {
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
        <Container className="bg-dark px-4 py-5 mb-4 rounded">
            <Form className="mb-3 mx-5" onSubmit={handleProductSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="programName" onBlur={handleOnBlur} placeholder="Program Title" required />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="programId" onBlur={handleOnBlur} placeholder="Program ID" required />
                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-3">
                    <Form.Control type="text" name="image" onBlur={handleOnBlur} placeholder="Image" required />
                </Form.Group>


                <Form.Group as={Col}>
                    <textarea className="form-control" name="programDescription" onBlur={handleOnBlur} rows="10" placeholder="Program Description"></textarea>
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
        </Container>
    );
};

export default AddProgram;