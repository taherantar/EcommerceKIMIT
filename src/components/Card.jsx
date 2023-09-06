import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import HoverCard from './HoverCard';

export default function Card() {
    return (
        <>
            <Container className='d-flex'>
                <MDBCard className='mb-3 m-4' style={{ padding: '10px' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                            content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                            <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
                </MDBCard>
                <MDBCard className='mb-3 m-4' style={{ padding: '10px' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                            content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                            <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
                </MDBCard>
            </Container>
                <HoverCard />
        </>
    );
}