const EditAccount = () => {
    return (
        <div className="container-fluid mt-2 px-2">
    
    
    <div className="row">
        <div className="col-md-4 px-4 mt-0">
            
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                   
                    <img className="img-account-profile rounded-circle mb-2" src="./profileImage.png" alt=""/>
                    
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                   
                    <button className="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div className="col-md-8">

        

            <div className="card mb-4">
                <div className="card-header">Profile Details</div>
                <div className="card-body">
                    <form>
                       
                                         
                        <div className="row gx-3 mb-3">
                        
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputFirstName">First name</label>
                                
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                            </div>
                           
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputLastName">Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                       
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputOrgName">Email Address</label>
                                <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your email address" />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputLocation">Phone Number</label>
                                <input className="form-control" id="inputLocation" type="text" placeholder="Enter your Phone Number" />
                            </div>
                        </div>
                       
                        <div className="mb-3">
                            <label className="small mb-1" placeholder="inputEmailAddress">Street Address</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your street address" />
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputPhone">City</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your City" />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputBirthday">Postal Code</label>
                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter zip code" />
                            </div>
                        </div>
                      
                       
                        <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>



    );
}


export default EditAccount;