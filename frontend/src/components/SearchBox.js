import { useEffect, useState } from 'react';
import {Button, Form} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


function SearchBox() {
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(window.location.pathname)
        }
    }

    return (
        <Form onSubmit={submitHandler}   className='d-flex justify-content-between'>
            <Form.Control
                type='text'
                name='q'
                onChange={e => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            >

            </Form.Control>
            
            <Button
                type='submit'
                variant='outline-success'
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox