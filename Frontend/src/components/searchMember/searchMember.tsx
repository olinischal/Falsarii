import { useEffect, useState } from "react";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { sendEmail } from "../../services/authenticate-service";



const SearchMember = (props) => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("firstName");
  const [searchMembers, setSearchMembers] = useState<MemberData[]>([]);
  const [keyword, setKeyword] = useState("all");
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState("");
  const [emailText, setEmailText] = useState("");
  const [emailList, setEmailList] = useState<string[]>([]);

  useEffect(() => {
    console.log(keyword);
    Member.searchMember(keyword)
      .then((data) => {
        setSearchMembers([...data]);
      })
      .catch((err) => {
        setIsError(true);
      });

    console.log("This is " + keyword + " new Keyword");
  }, [keyword]);

  const handleClose = () => {
    try {
      sendEmail(subject, emailText, emailList).then(() => {
        console.log("Email Sent");
      });
    } catch (error) {
      console.log("ERROR");
    }
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const sendEmailToMembers = () => {
    const emailArray = searchMembers.map(function (el) {
      return el.emailId;
    });
    setEmailList(emailArray);
    console.log("Hello I came here");

    handleShow();
  };

  const closeForm=() =>{setShow(false)};
  const handleDelete = (id) => {
    try {
      Member.deleteMember(id).then(() => {
        navigate("/members");
        window.location.reload();
      });
    } catch (error) {
      console.log("Error...");
    }
  };
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <h3>List of Members</h3>
      <div>
        <input
          type="text"
          id="keyword"
          onChange={(e) => {
            if (e.target.value === "") {
              setKeyword("all");
            } else {
              setKeyword(e.target.value);
            }
          }}
          placeholder="Search Members"
        />
        <br />
        <br />
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => sendEmailToMembers()}
        >
          Send Email To All
        </button>
        <div>
          <Modal show={show} onHide={closeForm} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Send Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <form id="contact-form" role="form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_subject">Subject *</label>{" "}
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Please enter the subject *"
                          data-error="Subject is required."
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {" "}
                        <label htmlFor="form_email">Emails *</label>{" "}
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          defaultValue={emailList}
                          className="form-control"
                          placeholder="The selected emails show here *"
                          data-error="Valid emails are required."
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {" "}
                        <label htmlFor="form_message">Message *</label>{" "}
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Write your message here."
                          rows={4}
                          data-error="Please, leave us a message."
                          onChange={(e) => {
                            setEmailText(e.target.value);
                          }}
                        ></textarea>{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeForm}>
                Close
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Send Email
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {searchMembers.map((val, key) => {
          return (
            <div key={key}>
              <hr />
              <div>
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>First Name</th>
                      <th>Maiden Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                      <th>Graduation Date</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={val.userId}>
                      <td>{val.fname}</td>
                      <td>{val.maidenName}</td>
                      <td>{val.lname}</td>
                      <td>{val.phoneNum}</td>
                      <td>{val.middleName}</td>
                      <td>{val.emailId}</td>
                      <td>
                        <Link
                          className="btn btn-info"
                          to={"/update/" + `${val.userId}`}
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={(e) => {
                            handleDelete(val.userId);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMember;




/*
const SearchMember = (props) => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("firstName");
  const [searchMembers, setSearchMembers] = useState<MemberData[]>([]);
  const [keyword, setKeyword] = useState("all");
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState("");
  const [emailText, setEmailText] = useState("");
  const [emailList, setEmailList] = useState<string[]>([]);
  const [email, setMemberList] = useState([]);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);


  const columns: GridColDef[] = [
    {
      field: "fname",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lname",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "phoneNum",
      headerName: "Phone num",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "emailId",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "edit",
      headerName: "",
      sortable: false,
      width: 130,
      renderCell: () => {
        return (
          <Button variant="warning">
            Edit
          </Button>
        );
      }
    },
  
    {
      field: "delete",
      headerName: "",
      sortable: false,
      width: 130,
      renderCell: () => {
        return (<div>{selectionModel &&
          <Button variant="danger" onClick={(e) => {handleDelete(selectionModel);}}>
            Delete
          </Button>
        }</div>
        );
      }
    },
    
  ];

  var rows = [
    ...searchMembers
  ];

  useEffect(() => {
    console.log(keyword);
    Member.searchMember(keyword)
      .then((data) => {
        setSearchMembers([...data]);
        rows = [...searchMembers];
       
      })
      .catch((err) => {
        setIsError(true);
      });

    console.log("This is " + keyword + " new Keyword");
  }, [keyword]);
  const handleClose = () => {
    try {
      sendEmail(subject, emailText, emailList).then(() => {
        console.log("Email Sent");
      });
    } catch (error) {
      console.log("ERROR");
    }
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const sendEmailToMembers = () => {
    const emailArray = selectionModel.map(function (el) {
      return el.toString();
    });
    setEmailList(emailArray);
    console.log(emailArray);
    handleShow();
  };

  const closeForm = () => {
    setShow(false);
  };
  const handleDelete = (id) => {
    console.log(id);
    
  };
  return (
    <div style={{ padding: "100px" }}>
      <h3>List of Members</h3>
      <div>
        <input
          type="text"
          id="keyword"
          onChange={(e) => {
            if (e.target.value === "") {
              setKeyword("all");
            } else {
              setKeyword(e.target.value);
            }
          }}
          placeholder="Search Members"
        />
        <br />
        <br />
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => sendEmailToMembers()}
        >
          Send Email To All
        </button>
        <div>
          <Modal show={show} onHide={closeForm} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Send Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <form id="contact-form" role="form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_subject">Subject *</label>{" "}
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Please enter the subject *"
                          data-error="Subject is required."
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {" "}
                        <label htmlFor="form_email">Emails *</label>{" "}
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          defaultValue={emailList}
                          className="form-control"
                          placeholder="The selected emails show here *"
                          data-error="Valid emails are required."
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {" "}
                        <label htmlFor="form_message">Message *</label>{" "}
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Write your message here."
                          rows={4}
                          data-error="Please, leave us a message."
                          onChange={(e) => {
                            setEmailText(e.target.value);
                          }}
                        ></textarea>{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeForm}>
                Close
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Send Email
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.emailId}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(newSelection) => {
              setSelectionModel(newSelection);
          }}
          selectionModel={selectionModel}
          />
        </div>
        {    console.log(selectionModel)
          
        }
      </div>
    </div>
  );
};

export default SearchMember;
*/
