import Container from 'react-bootstrap/Container';
import {MDBTypography} from 'mdb-react-ui-kit'

const FondoPreceptor = () => {
    return(
        <Container fluid style={{backgroundColor: 'rgb(0,200,150)', height: 200+'px', position: 'relative'}} >
                <MDBTypography tag='div' className='display-1 position-absolute top-50 start-50 translate-middle' style={{color: 'rgb(253,239,213)'}}>
                    Preceptores
                </MDBTypography>
        </Container>
    )
}

export default FondoPreceptor