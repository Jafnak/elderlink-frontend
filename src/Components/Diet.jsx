import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Diet = () => {
  return (
    <div>


            <div className="diet-container">
                <Nav/>
                <div className="diet-row">
                    <h1 style={{ textAlign: 'center' }}><b>DIET PLAN</b></h1>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="diet-row g-5">

                            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="m3.jpg" class="d-block w-100" alt="..." height="500px" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="m4.jpg" class="d-block w-100" alt="..." height="500px"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="m5.jpg" class="d-block w-100" alt="..." height="500px"/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className='row g-3'>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <Link to="/diab" class="btn btn-warning"  style={{ height: '100px', fontSize: '36px' }}>DIEBETES</Link>

                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                <Link to="/blood" class=" btn btn-success"  style={{ height: '100px', fontSize: '36px' }}>BLOOD PRESSURE</Link>

                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <Link to="/heart" class=" btn btn-info"  style={{ height: '100px', fontSize: '36px' }}>HEART DISEASE</Link>

                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <Link to= "/osteo" class="btn btn-primary" style={{ height: '100px', fontSize: '36px' }}>OSTEOPOROSIS</Link>

                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <Link to='/arthritis' class="btn btn-secondary" style={{ height: '100px', fontSize: '36px' }}>ARTHRITIS</Link>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Diet