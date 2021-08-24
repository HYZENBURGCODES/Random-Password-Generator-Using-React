import React,{Component,location} from "react";
import {Button,Col,Image,Container,Card,CardColumns} from "react-bootstrap";
import img1 from './Images/k.PNG';
import { Link } from 'react-router-dom';

function About()
{
        return(
            <div>
                <div class="container" align="center">
                    <br></br>
                    <br></br>
                    <Container>
                    <Col xs={100} md={100}>
                        <Image src={img1} roundedCircle />
                    </Col>
                    </Container>
                    <br></br>
                    <br></br>

                    <Button variant="outline-primary" onClick={()=>window.open("https://github.com/HYZENBURGCODES","_blank")} >GitHub</Button>
                    <Button variant="outline-primary" onClick={()=>window.open("https://www.instagram.com/mr_a_s_h_98/","_blank")}>Instragram</Button>
                    <Button variant="outline-danger" nClick={()=>window.open("https://www.youtube.com/channel/UCZl461-MzQGftYUPnUJxgTA","_blank")}>YouTube</Button>
                    <Button variant="outline-primary" onClick={()=>window.open("https://www.linkedin.com/in/ashif-shakib-6b8287188/","_blank")}>LinkedIn</Button>
                    <br></br>
                    <br></br>

                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>Bsc (Hons) Software Enginnering</Card.Title>
                                <Card.Text>
                                    Hello Guys, Follow me on Social Media PLatform with given Links.Have a Nice Day. Thank you!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>

            </div>
        )
}
export default About;