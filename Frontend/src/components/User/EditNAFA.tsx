const EditNAFA = () => {
    return (

        <div>
            <div className="card mb-4" style={{fontSize:'20px', height:'100%'}}  >
                <div className="card-header">Education Details</div>
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
                       
                        <div className="mb-3">
                            <label className="small mb-1" placeholder="inputEmailAddress">Interests</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter Interest" />
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputPhone">Alumni of the Year</label><br/>
                                <input className="form-control" id="year" type="text" placeholder="Enter Alumni" />
                            </div>

                            
                            <div className="col-md-6">
                                <label className="small mb-1" placeholder="inputBirthday">Friend of the Year</label>
                                
                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter Friend Name" />
                            </div>
                        </div>
                        <button className="btn btn-warning" type="button">Save changes</button>
                    </form>
                </div>
            </div>
       </div>



    );
}

export default EditNAFA;