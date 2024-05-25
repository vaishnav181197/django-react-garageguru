import React from 'react'
import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addService } from '../ApiServices/allApis';
import { addServiceResponseContext } from '../ContextApi/CustomerContext';


function AddService({id}) {
    const {setAddServiceResponse}=useContext(addServiceResponseContext)
    const [serviceData,setServiceData]=useState({
        title:"",notes:"",amount:""
    })
    const [show, setShow] = useState(false);

    const handleSubmit=async()=>{
        console.log(serviceData)
        const {title,notes,amount}=serviceData
        if(!title || !notes || !amount){
            toast.warning("Invalid Service Inputs!!")
        }
        else{
            const header={
                "Content-Type":"application/json",
                "Authorization":`Token ${sessionStorage.getItem('token')}`
            }
            const result=await addService(id,serviceData,header)
            if(result.status==201){
                toast.success("Service Added successfully!!")
                handleClose()
                setServiceData({
                    title:"",notes:"",amount:""
                })
                setAddServiceResponse(result)
            }
            else{
                console.log(result)
                toast.error("service registration failed!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-info' onClick={handleShow}>Add Service +</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Service Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="floatingNAME" label="Service Title" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e)=>{setServiceData({...serviceData,title:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhne" label="Notes" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e)=>{setServiceData({...serviceData,notes:e.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="Kilom" label="Amount" className="mb-3">
                        <Form.Control type="number" placeholder="" onChange={(e)=>{setServiceData({...serviceData,amount:e.target.value})}}/>
                    </FloatingLabel>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Add</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AddService