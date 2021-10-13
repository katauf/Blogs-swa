import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

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
          .catch(() => alert("There was an error, please try again"));
      
         alert("Blogposten är skapad" + JSON.stringify(data));
         window.location.href = "/";
    }
    return (<div className="lobby">
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control className="mt-3" placeholder="Skriv titeln:" ref={title} />
                <Form.Label>Skriv bloggtexten</Form.Label>
                <Form.Control as="textarea" rows={3} ref={blogtext} />
            </Form.Group>
            <Button type="submit" variant="dark" className="mt-1">Lägg till</Button>
        </Form>
    </div>)
}

export default CreateBlogItem;