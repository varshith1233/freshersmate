import React from 'react'
function Carousel2() {
  return (
    <div>
        
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade " >
    <div className="carousel-indicators" >
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" style={{height:'39rem',marginBottom:'30px'}}>
      <div className="carousel-item active">
        <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block" style={{height:'32rem'}}>
          <h5>Welcome to Freshermate</h5>
          <p>Blogs,previous papers,materials.</p>
          <button type="button" className="btn btn-danger mx-1">Clubs</button>
          <button type="button" className="btn btn-primary mx-1">Previous papers</button>
          <button type="button" className="btn btn-success mx-1">materials</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block" style={{height:'32rem'}}>
          <h5>First Engneering clubs blog</h5>
          <p>Blogs,previous papers,materials.</p>
          <button type="button" className="btn btn-danger mx-1">Clubs</button>
          <button type="button" className="btn btn-primary mx-1">Previous papers</button>
          <button type="button" className="btn btn-success mx-1">materials</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block"  style={{height:'32rem'}}>
          <h5>Welcome to Freshermate</h5>
          <p>Blogs,previous papers,materials..</p>
          <button type="button" className="btn btn-danger mx-1">Clubs</button>
          <button type="button" className="btn btn-primary mx-1">Previous papers</button>
          <button type="button" className="btn btn-success mx-1">materials</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


    </div>
  )
}

export default Carousel2