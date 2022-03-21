import { Stack } from "react-bootstrap";

const Events = () => {

    return (
        <>
        <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">All Events</h2>
                                </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                                <div className="card-body p-4">
                                    
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Football</h5></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/adb5bd/495057" alt="..." />
                                <div className="card-body p-4">
                                    
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Basketball</h5></a>
                                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
                                <div className="card-body p-4">
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Class of 2014 Reunion</h5></a>
                                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                              
                            </div>
                        </div>
                    </div>
         
                    
                </div>
            </section>
        </>

    );
}

export default Events;