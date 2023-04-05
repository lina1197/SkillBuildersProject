import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import "../../src/styles/style.css";


export default function Footer() {
  return (
    
    <MDBFooter  className='text-center footer' color='black' style={{ background: 'radial-gradient(100% 313.72% at 100% 100%, rgba(143, 0, 255, 0.4) 0%, rgba(0, 115, 255, 0.4) 100%)' }}>

      <MDBContainer  className='p-4' >
        

        <section style={{ padding: '0', margin:'0'}} className=''>
          <MDBRow style={{ padding: '0', margin:'0'} } className='justify-content-center align-items-center'>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 d-flex justify-content-center' >
               <section className=''>
          <img src="/images/logo-project.png" alt="" />
                  <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center flex-column align-items-center '>
              <MDBCol style={{ margin:'10px 0px'} }><h5 >Restez connectez avec nous!</h5></MDBCol>

              <MDBCol md='25' >
                <MDBInput contrast type='email' placeholder='Adresse' className='mb-4'  />
              </MDBCol>

              <MDBCol >
                <button type='submit' className='btn btn-outline-light mb-4'>
  Submit
</button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

          
        </section>
            </MDBCol>

            <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol  lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
           

          </MDBRow>
        </section>
 <hr style={{  padding: '0',border: "none", height: "2px", backgroundColor: "#fff", width: "100%"}} />
      
<section  className=""><div  className="container">

  <div className="row justify-content-center">
    <div className="col-md-12 col-lg-12 d-flex justify-content-center flex-md-row flex-column align-items-center">
      <p className="mb-3 mb-md-0 me-md-3 text-center text-md-start" style={{ marginRight: '1rem' }}>Inscrivez vous maintenant!.</p>
      <button className="btn btn-rounded btn-light text-primary text-sm-center" style={{ padding: '3px', margin:'0'}}>S'INSCRIRE</button>
    </div>
  </div>
</div>

</section>

<hr style={{ padding: '0',border: "none", height: "2px", backgroundColor: "#fff", width: "100%"}} />

      </MDBContainer>

      <div style={{ margin:'0px'}}  className='text-center p-3' >
        Copyright © 2023.SkillBuilders.All rights reserved.
      </div>
    </MDBFooter>
  )
}