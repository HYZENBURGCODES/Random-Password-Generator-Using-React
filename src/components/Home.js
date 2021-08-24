import React, {Component,useState} from "react";
import {CardColumns,Card,Container} from "react-bootstrap";
import {FloatingLabel,Form,Image,Button,Alert,Col,Row} from "react-bootstrap";
import Navigation from "./Navigation";
import {
    numbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters,
} from './Characters/characters';
import notify from 'react-notifications-component';

function Home()
{
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(20)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const [show, setShow] = useState(true);


    const handleGeneratePassword = (e) => {
        if (
            !includeUppercase &&
            !includeLowercase &&
            !includeNumbers &&
            !includeSymbols
        ) {
            document.getElementById("error").innerHTML="Select At Least One Option to Generate the Password";

        }
        let characterList = ''

        if (includeLowercase) {
            characterList = characterList + lowerCaseLetters
            document.getElementById("error").style.visibility="hidden";
        }

        if (includeUppercase) {
            characterList = characterList + upperCaseLetters
            document.getElementById("error").style.visibility="hidden";
        }

        if (includeNumbers) {
            characterList = characterList + numbers
            document.getElementById("error").style.visibility="hidden";
        }

        if (includeSymbols) {
            characterList = characterList + specialCharacters
            document.getElementById("error").style.visibility="hidden";
        }
        setPassword(createPassword(characterList))
    }
    const createPassword = (characterList) => {
        let password = ''
        const characterListLength = characterList.length

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterListLength)
            password = password + characterList.charAt(characterIndex)
        }
        return password
    }

        return(
            <div>
                <div class="container" align="center">
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome to Password Generator</Card.Title>
                        <Card.Text>
                           Select and Create your Password
                        </Card.Text>
                        <form>
                            <label htmlFor='password-strength'>Password length &nbsp;</label>
                        <input
                            defaultValue={passwordLength}
                            onChange={(e) => setPasswordLength(e.target.value)}
                            type='number'
                            id='password-strength'
                            name='password-strength'
                            max='100'
                            min='8'
                        />
                        </form>
                        <form>
                            <label htmlFor='uppercase-letters'>Include Uppercase Letters &nbsp;</label>
                            <input
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                type="checkbox"
                                id='uppercase-letters'
                                name='uppercase-letters'
                            />
                        </form>
                        <form>
                            <label htmlFor='lowercase-letters'>Include Lowercase Letters &nbsp;</label>
                            <input
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                                type='checkbox'
                                id='lowercase-letters'
                                name='lowercase-letters'
                            />
                        </form>
                        <form>
                            <label htmlFor='include-numbers'>Include Numbers &nbsp;</label>
                            <input
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                type='checkbox'
                                id='include-numbers'
                                name='include-numbers'
                            />
                        </form>
                        <form>
                            <label htmlFor='include-symbols'>Include Symbols &nbsp;</label>
                            <input
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                type='checkbox'
                                id='include-symbols'
                                name='include-symbols'
                            />
                        </form>
                        <br></br>
                        <p id="error" class="text-danger"></p>
                        <Button variant="primary" onClick={handleGeneratePassword}>Generate</Button>
                    </Card.Body>
                </Card>
                    <br></br>
                <FloatingLabel controlId="floatingTextarea2" label="After Generating the Password, Copy the Password from here.">
                    <Form.Control
                        as="textarea"
                        value={password}
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}/>
                </FloatingLabel>
            </div >
                {/*Middle Container*/}
                <br></br>
                <br></br>
                <div class="container alert alert-dark" align="center" bg="dark">
                <Container>
                    <Row>
                        <Col sm>
                            <h4>Easy to Use</h4>
                            <p1>Just one click, Boom ! There you go..Your Password is Ready</p1>
                        </Col>
                        <Col sm>
                            <h4>Multiple Patterns</h4>
                            <p1>You can create your Own Password as you want. you can Totally Create passwords with the Length you Want</p1>
                        </Col>
                        <Col sm>
                            <h4>Free</h4>
                            <p>No Click Bait or No Fees.Totally Free. Just Copy and Paste. Simple as That!</p>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
}
export default Home;