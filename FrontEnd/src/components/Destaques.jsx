import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import '../assets/css/equipe.css'

function Destaques() {
    return (
        <Row Row xs={1} md={2} className="g-5"> 
     
        <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="./image/manuela.jpg" />
                    <Card.Body>
                        <Card.Title>Manuela Andrade</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/menezes.jpg" />
                    <Card.Body>
                        <Card.Title>Jorge Menezes</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/beatriz.jpg" />
                    <Card.Body>
                        <Card.Title>Beatriz Melo</Card.Title>
                    </Card.Body>
                </Card>
            </Col>                
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/PH.jpg" />
                    <Card.Body>
                        <Card.Title>Philipe Almeida</Card.Title>
                    </Card.Body>
                </Card>
            </Col>      
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/carol.jpg" />
                    <Card.Body>
                        <Card.Title>Caroline Bentes</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../image/matheus.jpg" />
                    <Card.Body>
                        <Card.Title>Matheus Mendonça</Card.Title>
                    </Card.Body>
                </Card>
            </Col>      
                  
        </Row>
    );
}

export default Destaques;