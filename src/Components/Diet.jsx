import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Diet = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Nav />
      <div style={{ textAlign: 'center' }}>
        <h1><b>DIET PLAN</b></h1>
        <div style={{ maxWidth: '100%', margin: 'auto' }}>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="m3.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src="m4.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src="m5.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className='row g-3 mt-4' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { path: 'diab', name: 'Diabetes' },
            { path: 'blood', name: 'Blood Pressure' },
            { path: 'heart', name: 'Heart Disease' },
            { path: 'osteo', name: 'Osteoporosis' },
            { path: 'arthritis', name: 'Arthritis' }
          ].map((item, index) => (
            <div key={item.path} className="col-12 col-sm-6 col-md-4" style={{ padding: '10px' }}>
              <div className="d-grid gap-2">
                <Link 
                  to={`/${item.path}`} 
                  className={`btn btn-${index % 5 === 0 ? 'warning' : index % 5 === 1 ? 'success' : index % 5 === 2 ? 'info' : index % 5 === 3 ? 'primary' : 'secondary'}`} 
                  style={{ 
                    height: '100px', 
                    fontSize: '36px', 
                    borderRadius: '8px', 
                    textAlign: 'center' 
                  }}
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diet;
