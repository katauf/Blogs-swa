import React, { useRef } from 'react';
import {Form, Button} from 'react-bootstrap';

const CreateBlogItem = () => {

    const title = useRef();
    const blogtext = useRef();

    const handleSubmit = async e => {
        e.preventDefault();

        const data = {
            Title: title.current.value,
            BlogText: blogtext.current.value
        }

        fetch('api/PostBlogItems', {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {'content-type': 'application/json; charset=UTF-8',
                    'Accept': '*/*'}
        })
        .then(function (res) {
            console.log('Request success: ', 'posten skapad' + res)
          })
          .catch(() => console.log("There was an error, please try again"));
      
         window.location.href = "/";
    
    }
    return (<div className="offset-4 mt-4">
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className="col-6">
                <Form.Label>Skriv titeln:</Form.Label>
                <Form.Control className="mt-1" ref={title} />
            </div>
            <div className="col-6">
                <Form.Label className="mt-3" >Skriv bloggtexten:</Form.Label>
                <Form.Control as="textarea" rows={3} ref={blogtext} />
            </div>
            </Form.Group>
            <div className="col-6 m-0 mt-4">
                <Button type="submit" variant="dark" className="mt-1">Lägg till</Button>
            </div>
        </Form>
    </div>)
}

export default CreateBlogItem;