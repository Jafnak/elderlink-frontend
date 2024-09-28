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
            <h2 className="card-title">Relaxing Music</h2>
            {/* Embedded YouTube Video */}
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/your-video-id-1"
              title="Relaxing Music"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Guided Meditation</h2>
            {/* Embedded YouTube Video */}
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/your-video-id-2"
              title="Guided Meditation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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