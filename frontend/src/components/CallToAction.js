import React from 'react';
import { MdPhoneIphone as MdApple, MdAndroid } from 'react-icons/md';

function CallToAction() {
  const sectionStyle = {
    padding: '80px 0',
    
  }
  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const paragraphStyle = {
    color: '#666',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '20px',
  };

  const buttonIconStyle = {
    marginRight: '10px',
    fontSize: '24px', // Adjust icon size
  };

  const buttonTextStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1 style={headingStyle}>Download Our App for all Platforms</h1>
            <p style={paragraphStyle}>
              It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned.
            </p>							
          </div>
        </div>
        <div style={buttonContainerStyle}>	
          <div className="download-button" style={buttonStyle}>		
            <div style={{ marginRight: '20px', backgroundColor: '#fff', padding: '10px', borderRadius: '8px' }}>
              <MdApple size={30} color="#333" style={buttonIconStyle} />
              <div>
                <a href="#" style={buttonTextStyle}>
                  <span>Available</span> <br />
                  on App Store
                </a>
              </div>
            </div>
            <div style={{ marginRight: '20px', backgroundColor: '#fff', padding: '10px', borderRadius: '8px' }}>
              <MdAndroid size={30} color="#333" style={buttonIconStyle} />
              <div>
                <a href="#" style={buttonTextStyle}>
                  <span>Available</span> <br />
                  on Play Store
                </a>
              </div>
            </div>
          </div>						
        </div>
      </div>	
    </section>
  );
}

export default CallToAction;
