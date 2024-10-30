import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Nav from './Nav';

const About = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
        <Nav/>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#007bff' }}>About ElderLink</h1>

      <Row className="g-4">
        <Col md={6}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Mission Statement</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Connecting elderly individuals with essential services for better quality of life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Contact Information</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Email: <a href="mailto:elderlinkforelders@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>elderlinkforelders@gmail.com</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr style={{ margin: '40px 0', border: '1px solid #007bff' }} />

      <h2 style={{ textAlign: 'center', margin: '40px 0', color: '#007bff' }}>Overview of Services</h2>
      <Row className="g-4">
        <Col md={3}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Doctor Consultancy</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Access healthcare professionals for consultations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Caregiver Service</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Professional caregivers to assist with daily needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Transport Services</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Reliable transportation for medical appointments and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Entertainment Options</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Fun and engaging activities tailored for seniors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr style={{ margin: '40px 0', border: '1px solid #007bff' }} />

      <Row className="g-4">
        <Col md={6}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Privacy Policy</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Your privacy is important to us. We handle user data securely and responsibly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card style={{ border: 'none', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#343a40' }}>Future Plans</Card.Title>
              <Card.Text style={{ fontSize: '18px', lineHeight: '1.6' }}>
                We are continuously improving and planning to add more features to enhance user experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 style={{ textAlign: 'center', margin: '40px 0', color: '#007bff' }}>Join Us</h2>
      <p style={{ textAlign: 'center', fontSize: '18px', lineHeight: '1.6' }}>
        Explore ElderLink today and connect with the services you need!
      </p>
    </div>
  );
};

export default About;
