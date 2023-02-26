import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';

const AddCareer = () => {

    const editorRef = useRef(null);
//    const log = () => {
//      if (editorRef.current) {
//        console.log(editorRef.current.getContent());
//      }
//    };

    const [addCareer, setAddCareer ] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newCareer = {...addCareer};
        console.log(newCareer);
        newCareer[field] = value || editorRef.current.getContent();
        setAddCareer(newCareer);
        console.log(e.target.value);
    }

    const handleProductSubmit = e => {
        const careerAdd = {
            ...addCareer
        }
        fetch('https://server.financialwellnessforall.dicoit.com/career', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(careerAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Career Added Successfully', {
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
    
    
    // const addedSuccessFully= () => {
        
    // }
    


    return (
        <Container className="bg-dark px-4 py-5 mb-4 rounded">
            <Form className="mb-3 mx-5" onSubmit={handleProductSubmit}>

                <Form.Group as={Col} className="mb-3">
                    <Form.Control type="text" name="careerName" onBlur={handleOnBlur} placeholder="Carrer Title" required />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control type="text" name="position" onBlur={handleOnBlur} placeholder="Position" required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="number" name="vacancy" onBlur={handleOnBlur} placeholder="Vacancy" required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="date" name="date" onBlur={handleOnBlur} placeholder="Last Date" required />
                    </Form.Group>
                </Row>

               

                    <Editor name="ArticleDetails" onBlur={handleOnBlur}
                        onInit={(evt, editor) => editorRef.current = editor}
                        // initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                        height: 500,
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
                    {/* <button onClick={log}>Log editor content</button> */}
                

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

export default AddCareer;