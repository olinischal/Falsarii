const Security = () => {
  return (
    <div className="row">
        <div className="col-lg-4">            
        </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-header">Change Password</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="small mb-1" placeholder="currentPassword">
                  Current Password
                </label>
                <input
                  className="form-control"
                  id="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                />
              </div>

              <div className="mb-3">
                <label className="small mb-1" placeholder="newPassword">
                  New Password
                </label>
                <input
                  className="form-control"
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>

              <div className="mb-3">
                <label className="small mb-1" placeholder="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="form-control"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
              <button className="btn btn-primary" type="button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
