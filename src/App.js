
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import {useState} from 'react'
import {useEffect} from 'react'

import Plans from './components/plans'

const App = () => {

    const [isInput, setIsInput] = useState("")
    const [isData, setIsData] = useState([])

    function handleSubmit (event) {
        event.preventDefault()

        setIsData(prevData => {
            let obj = {
                title: event.target[0].value
            }
            return [
                ...prevData,
                obj
            ]
        })

        setIsInput("")
    }

    function handleChange (event) { 
        setIsInput(event.target.value)
    }

    function handleRemoveItem (event) {
        const idk = event.target.getAttribute("id")
        setIsData(isData.filter(item => item !== isData[idk]))
    }
    
    return(
        <Container className="col-6 mt-5">

            <Form onSubmit={handleSubmit} className="form-group col input-group">
                <input 
                    type="text"
                    placeholder="Text yout ToDo Plan"
                    name="inp"
                    onChange={handleChange}
                    autoComplete="off"
                    value={isInput}
                    className="form-control me-2 rounded"
                />

                <Button type="submit" className="btn border-0 btn-default col-sm-3 rounded teal-900">Schedule Plan</Button>
            </Form>

            {isData && isData.map((item, index) => <Plans del={handleRemoveItem} index={index} item={item} /> )}     
            
        </Container>
    )

}

export default App