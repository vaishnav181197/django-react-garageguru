import React, { useEffect, useState,useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AddCustomer from '../components/AddCustomer';
import { getCustomers } from '../ApiServices/allApis';
import { addCustomerResponseContext } from '../ContextApi/CustomerContext';

function Customer() {

  const {addCustomerResponse}=useContext(addCustomerResponseContext)
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getData()
  }, [addCustomerResponse])

  const getData = async () => {
    const header={
      "Content-Type":"application/json",
      "Authorization":`Token ${sessionStorage.getItem('token')}`
  }
    const result = await getCustomers(header)
    // console.log(result.data)
    setCustomers(result.data)
  }

  console.log(customers)

  return (
    <>
      <div className='container-fluid p-5'>
        <h2 className='mb-2'>Customers</h2>
        <Row>
          <Col sm={6} md={2}>
            <AddCustomer />
          </Col>
          <Col sm={6} md={10}>
            <div className='row'>

              {
                customers.length > 0 ?

                  customers.map(item => (
                    <Card style={{ width: '18rem' }} className='shadow border m-3'>
                      <Card.Img variant="top" height={'200px'} width={'100%'} src={item.image?item.image:"https://hips.hearstapps.com/hmg-prod/images/2019-hyundai-kona-1548195339.jpg"} />
                      <Card.Body>
                        <Card.Title>{item.vehicle_number}</Card.Title>
                        <Card.Text>
                          <h5>Customer : {item.customer}</h5>
                          <h6>Phone : {item.phone}</h6>
                        </Card.Text>
                        <Link to={`/service/${item.id}`} className='btn btn-primary'>Services</Link>
                      </Card.Body>
                    </Card>
                  ))

                  :
                  <h4 className='text-center text-danger'>No Customers Available!!</h4>


              }


            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Customer