import React, { useEffect, useState,useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddService from '../components/AddService'
import { useParams } from 'react-router-dom'
import { getSpecificCustomer } from '../ApiServices/allApis'
import { addServiceResponseContext } from '../ContextApi/CustomerContext'

function Service() {
  const { id } = useParams()
  const {addServiceResponse}=useContext(addServiceResponseContext)
  const [customer, setCustomer] = useState({})

  // console.log(id);

  useEffect(() => {
    getData()
  }, [addServiceResponse])

  const getData = async () => {
    const header={
      "Content-Type":"application/json",
      "Authorization":`Token ${sessionStorage.getItem('token')}`
  }
    const result = await getSpecificCustomer(id,header)
    // console.log(result)
    if (result.status == 200) {
      setCustomer(result.data)
    }
    else {
      console.log(result)
    }
  }

  console.log(customer)

  return (
    <>
      <div className='container-fluid p-5'>
        <h3 className='mb-3'>Services</h3>

        <div className='my-4'>
          <h4>Customer : {customer.customer}</h4>
          <h4>Vehicle Number : {customer.vehicle_number}</h4>
        </div>

        <Row>
          <Col sm={6} md={2}>
            <AddService id={id}/>
          </Col>
          <Col sm={6} md={10}>
            <table className="table table-info table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Notes</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  customer?.services?.length>0 ?
                    customer.services.map(item => (
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.notes}</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))
                  :
                  <h3 className='text-danger'>No Services Available</h3>
                }

              </tbody>
            </table>
          </Col>
        </Row>
        <div className='my-5 p-3 text-center'>
          <h3>Total Service Charge : RS.<span className='text-success '>{customer.total_amount?customer.total_amount:0}</span></h3>
        </div>
      </div>
    </>
  )
}

export default Service