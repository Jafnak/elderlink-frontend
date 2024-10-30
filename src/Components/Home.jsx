import React from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const sendAlertToGuardian = () => {
        // Navigate to the Alert component
        navigate('/alertmsg');
    };

    return (
        <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
            <Nav />
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Welcome Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4" style={{ color: '#007bff' }}>Welcome to ElderLink</h1>
                    <p className="lead">Your trusted partner in connecting elderly individuals with essential services.</p>
                </div>

                {/* Emergency Alert Button */}
                <div className="text-center mb-4">
                    <button
                        type='button'
                        className='btn btn-danger btn-lg'
                        style={{ height: '100px', width: '300px', fontSize: '24px', borderRadius: '10px' }}
                        onClick={sendAlertToGuardian}
                    >
                        EMERGENCY ALERT
                    </button>
                </div>

                {/* Featured Services Section */}
                <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Our Services</h2>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                            <img className="card-img-top" src="doct.png" alt="Doctor Consultancy" height={250} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Doctor Consultancy</h5>
                                <p className="card-text">Connect with healthcare professionals for consultations and advice.</p>
                                <a href="/doctorview" className="btn btn-primary" style={{ borderRadius: '5px' }}>Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                            <img className="card-img-top" src="service1.jpg" alt="Care Takers" height={250} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Care Takers</h5>
                                <p className="card-text">Professional caregivers to assist with daily tasks and healthcare needs.</p>
                                <a href="/caretakerview" className="btn btn-primary" style={{ borderRadius: '5px' }}>Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                            <img className="card-img-top" src="transport.png" alt="Transportation" height={250} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Transportation</h5>
                                <p className="card-text">Reliable transportation services for medical appointments and errands.</p>
                                <a href="/driverview" className="btn btn-primary" style={{ borderRadius: '5px' }}>Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                            <img className="card-img-top" src="entertain.png" alt="Entertainment" height={250} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Entertainment</h5>
                                <p className="card-text">Engaging activities and resources to keep our elderly users entertained.</p>
                                <a href="/enter" className="btn btn-primary" style={{ borderRadius: '5px' }}>Click Here</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Services Section */}
                <div className="mt-5">
                    <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Why Choose Us?</h2>
                    <p className="text-center" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        ElderLink offers a comprehensive range of services tailored to meet the unique needs of elderly individuals.
                        Our goal is to ensure their safety, well-being, and engagement in the community.
                    </p>
                    <hr style={{ border: '1px solid #007bff', margin: '20px 0' }} />
                </div>

                {/* Testimonials Section */}
                <div className="mt-5">
                    <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Testimonials</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <p className="card-text">"ElderLink has been a lifesaver for my family. The caregivers are compassionate and attentive."</p>
                                    <h6 className="card-title" style={{ fontWeight: 'bold' }}>- Jane D.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <p className="card-text">"I feel safe knowing I can reach a doctor quickly through ElderLink."</p>
                                    <h6 className="card-title" style={{ fontWeight: 'bold' }}>- Robert S.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ border: '1px solid #007bff', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <p className="card-text">"The entertainment options keep my mom engaged and happy!"</p>
                                    <h6 className="card-title" style={{ fontWeight: 'bold' }}>- Sarah K.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="text-center mt-5">
                    <p style={{ fontSize: '16px' }}>&copy; {new Date().getFullYear()} ElderLink. All rights reserved.</p>
                    <p>
                        Contact us: 
                        <a 
                            href="mailto:elderlinkforelders@gmail.com" 
                            style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            elderlinkforelders@gmail.com
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default Home;
