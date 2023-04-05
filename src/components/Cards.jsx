import React from 'react';

import { 
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "../../src/styles/style.css";

export default function Cards() {
  return (
    <MDBContainer style={{ margin:"20px auto" }}>
      <MDBRow className="justify-content-center" >
        <MDBCol lg="auto" className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center " >
          <MDBCard className="mb-3 shadow-lg shadow-4" style={{ boxShadow: "0px 4px 4px 5px #0073FF" ,marginRight:"20px" , width: "250px"}}>
            <MDBCardImage src='/images/homework-icon-black-and-white-29.jpg' alt='...' position='top' style={{ height: '100px', width: '100px' }} />
            <MDBCardBody className="text-center">
              <MDBCardText>
                5000+ <br />
                Apprenants inscrits
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-3 shadow-lg shadow-4" style={{ boxShadow: "0px 4px 4px 5px #0073FF" ,marginRight:"20px", width: "250px"}}>
            <MDBCardImage src='/images/success-icon-23196.png' alt='...' position='top' style={{ height: '100px', width: '100px' }} />
            <MDBCardBody className="text-center">
              <MDBCardText>
                95% <br />
                Taux de réussite
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-3 shadow-lg shadow-4" style={{ boxShadow: "0px 4px 4px 5px #0073FF",marginRight:"20px", width: "250px" }}>
            <MDBCardImage src='/images/online-course-icon.png' alt='...' position='top' style={{ height: '100px', width: '100px' }} />
            <MDBCardBody className="text-center">
              <MDBCardText>
                1000+ <br />
                Formations disponibles
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-3 shadow-lg shadow-4 card-margin" style={{ boxShadow: "0px 4px 4px 5px #0073FF" , width: "250px" }}>
            <MDBCardImage src='/images/training-icon.png' alt='...' position='top' style={{ height: '100px', width: '100px' }} />
            <MDBCardBody className="text-center">
              <MDBCardText>
                150+ <br />
                Formateurs expérimentés
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}



