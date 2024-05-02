import {useState, useEffect, Fragment} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cardActions';
import ChekoutSteps from './ChekoutSteps';

function PaymentScreens() {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart;
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        navigate('/shipping')
    }

    const submitHander = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <FormContainer>
            <ChekoutSteps step1 step2 step3 />
            <Form onSubmit={submitHander}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>

                    <Col>
                        <Form.Check
                            type="radio"
                            label='PayPal or Credit Card'
                            id='paypal'
                            name="paymentMethod"
                            checked
                            onChange={(e) =>  setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group> <br></br>
                <Button type="submit" variant='btn btn-dark'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreens