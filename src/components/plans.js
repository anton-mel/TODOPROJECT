import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

function Plans (props) {
    return (
        <ListGroupItem className="col mt-2 rounded" key={props.index}>
            <div className="form-group d-flex align-items-center p-2 ps-0">
                <p className="col-sm-8 mb-1 ">{props.item.title}</p>
                <Button className="col-sm-3 bg-danger border-0 position-absolute end-0 me-3" onClick={props.del} id={props.index}>This Task in Done!</Button>
            </div>
        </ListGroupItem>
    )
}

export default Plans