import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Member } from "../../services/api";
import MemberData from "../../types/Member";
import "./index.css";

const LoginReset = () => {
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    Member.getMembers()
      .then((data) => {
        setMembers([...data]);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  const submitForm = (searchTerm) => {
    try {
        members.filter(val => {
            if(val.emailId.includes(searchTerm) ){
                navigate("/newpassword/" + `${val.userId}`);
            }
        })
      } catch (error) {
        console.log("Email doesnot exist");
      }

  };

  return (
    <div className="container padding-bottom-3x mb-2 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="forgot">
            <h2>Forgot your password?</h2>
            <p>
              Change your password in three easy steps. This will help you to
              secure your password!
            </p>
            <ol className="list-unstyled">
              <li>
                <span className="text-primary text-medium">1. </span>Enter your
                email address below.
              </li>
              <li>
                <span className="text-primary text-medium">2. </span>Our system
                will send you a temporary link
              </li>
              <li>
                <span className="text-primary text-medium">3. </span>Use the
                link to reset your password
              </li>
            </ol>
          </div>
          <form className="card mt-4">
            <div className="card-body">
              <div className="form-group">
                <label className="email-for-pass">
                  Enter your email address{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="email-for-pass"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-info"
                onClick={() => {
                  submitForm(searchTerm);
                }}
               
              >
                Get New Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginReset;
