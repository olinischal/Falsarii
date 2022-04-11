const EditNAFA = () => {
    return (
        <div className="container-fluid mt-2 px-2">
            <div className="row">
            <div className="col-md-4 px-4 mt-0">

            </div>
            <div className="col-md-8">

        

            <div className="card mb-4">
                <div className="card-header">NAFA Details</div>
                <div className="card-body">
                    <form>
                       
                                         
                        <div className="row gx-3 mb-3">
                        
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputFirstName">High School</label>
                                
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter High school name" />
                            </div>
                           
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputLastName">University</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter University name" />
                            </div>
                        </div>
                       
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputOrgName">Preferred Name</label>
                                <input className="form-control" id="inputOrgName" type="text" placeholder="Enter Name" />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputLocation">Miaden Name</label>
                                <input className="form-control" id="inputLocation" type="text" placeholder="Enter Name" />
                            </div>
                        </div>
                       
                        <div className="mb-3">
                            <label className="small mb-1" placeholder="inputEmailAddress">Interests</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter Interest" />
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputPhone">Alumni of the Year</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter Alumni" />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputBirthday">Friend of the Year</label>
                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter Friend Name" />
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

export default EditNAFA;