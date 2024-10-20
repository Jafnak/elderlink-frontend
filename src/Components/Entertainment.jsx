import React from 'react'

const Entertainment = () => {
  return (
    <div>
      <center><h1>ELDERLINK</h1>
        <img src="elders.png" alt="" /></center>
      <div className="container">

        {/* Large heading */}


        {/* Video Section - Two videos per row */}




        <div className="row g-3 mt-4">


          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Excercise and Yoga</h2>
                {/* Embedded YouTube Video */}
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/5rJPwLkXzvg?si=5Ih_dTSwRihsoECG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Nature And Travel</h2>
                {/* Embedded YouTube Video */}
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/fEErySYqItI?si=pscTEjmCkgBrEBXx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Spirituality</h2>
                {/* Embedded YouTube Video */}
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/V0WYJtC1UHU?si=IY5y88RXhqzRz050" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>






          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Relaxing Music</h2>
                {/* Embedded YouTube Video */}
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/WcXK5Iw8yAk?si=8fEET8Mb9jVPYk82" title="Relaxing Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Guided Meditation</h2>
                {/* Embedded YouTube Video */}
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/s6rXVM8VIWc?si=ttr__Yc4_7ymJMkk" title="Guided meditation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Comedy shows</h2>
                {/* Embedded YouTube Video */}
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/4C-i5XN_trY?si=4P1yqid31IKSkhBx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* Add more video cards as needed */}
      </div>
    </div>
  )
}

export default Entertainment