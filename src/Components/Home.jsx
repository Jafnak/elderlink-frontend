import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {



    return (
        <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img class="card-img-top" src="service1.jpg" alt="Card image cap" height={250} />
                                    <div class="card-body">
                                        <h5 class="card-title">Care Takers</h5>
                                        <p class="card-text">Caretakers in the ElderLink app help elderly users with daily tasks and healthcare, offering support and companionship to improve their well-being</p>
                                        <a href="/caretakerview" class="btn btn-primary">Click Here</a>

                                    </div>
                                </div>

                            </div>
                            <br></br>
                            <div className="col col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img class="card-img-top" src="transport.png" alt="Card image cap" height={250} />
                                    <div class="card-body">
                                        <h5 class="card-title">Transportation</h5>
                                        <p class="card-text">ElderLink's emergency support connects elderly users to help instantly during urgent situations, ensuring they get the assistance they need quickly. </p>
                                        <a href="/driverview" class="btn btn-primary">Click Here</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img class="card-img-top" src="edu.jpg" alt="Card image cap" height={250} />
                                    <div class="card-body">
                                        <h5 class="card-title">Education Support</h5>
                                        <p class="card-text">ElderLink's education support offers elderly users easy access to learning resources, tutorials, and guidance on various topics, helping them stay informed and engaged.</p>
                                        <a href="#" class="btn btn-primary">Click Here</a>
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

export default Home