import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';

function Inscription() {

  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Inscription');
  };

  return (
    <Container className='text-center mycenter'>
    <Card style={{ width: '50%', padding:'15px' }}>
        <h2>Inscription</h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Mot de passe:</Form.Label>
        <Form.Control type="password" required 
        minLength="4" placeholder="Password" isInvalid={!isValid} />
        <Form.Control.Feedback type="invalid">
                Le mot de passe doit avoir au moins 4 caractères.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password-repeat">
        <Form.Label>Répétez le mot de passe:</Form.Label>
        <Form.Control type="password" required minLength="4" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
    </Card>
    </Container>
  );
}

export default Inscription;