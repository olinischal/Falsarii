import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Member } from "../../services/api";
import MemberData from "../../types/Member";



const UpdateMember = () => {

    const [member, setMember] = useState<MemberData[]>([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
    let { id }  = useParams();


    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, phoneNumber, email, password };
        Member.updateMember(parseInt(String(id)),employee)
        .then(() => {
            navigate("/members");
            window.location.reload();
          })
        .catch(error=>{
            console.log("Something went wrong here.", error);
        })
    }

    useEffect(()=> {
        Member.getAMember(parseInt(String(id)))
            .then(member => {
                setFirstName(member.firstName);
                setLastName(member.lastName);
                setPhoneNumber(member.phoneNumber);
                setEmail(member.email);
                setPassword(member.password);
            })
            .catch(error=>{
                console.log("Something went wrong.", error);
            })
    }, [])
    return (
        <div className="container">
            <h3>Update Member</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder= {firstName}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={lastName}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={phoneNumber}
                    />

                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={email}
                    />

                </div>

                <div>
                    <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to={"/members"}>Back to List</Link>
        </div>
    );
}

export default UpdateMember;