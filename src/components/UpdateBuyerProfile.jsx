import React, { useContext, useState,useEffect} from "react";
import Navbar from "./Navbar";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {useAppContext} from "../context/ContextUse"
//import context from "react-bootstrap/esm/AccordionContext";

export default  function UpdateBuyerProfile() {
    //console.log("i am here")
  const { user, getUser } = useAppContext();
//   const [field, setField] = useState(user);
  const [field, setField] = useState({
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: ""
  });
 // const [currentUser, setCurrentUser] = useState(null)
  const [selectedFile, setSelectedFile] = useState();
  const [imgUrl, setImgUrl] = useState("")
  
  const navigate = useNavigate();

  const getBuyerInfo = async () => {
    try {
      const resp = await axios("getbuyerprofile")
      console.log(resp.data)
      setField(resp.data.data)
    } catch (error) {
      console.log(error.data)
    }
  }

  function handleEdit(e) {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setImgUrl(URL.createObjectURL(event.target.files[0]))
    handleSubmission(event,event.target.files[0])
  };

  const handleSubmission = (e,prop) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("profile_picture", prop);
    const config = {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(selectedFile)
    axios
      .put("/uploadbuyerpic", formData, config)
      .then((result) => {
        getUser();
        navigate("/buyer/profile");
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };
  const defaultImgUrl =
    //"https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png";
    "https://i.ibb.co/5jwDfyF/Photo-on-24-11-2021-at-20-45.jpg";
  useEffect(() => {
    getBuyerInfo()
    // Update the document title using the browser API
    if (user && user.image) {
      setImgUrl(defaultImgUrl)
    }else{
      setImgUrl(defaultImgUrl)
    }
    
    // eslint-disable-next-line
  }, []);
  const post = (user) => {
    const config = {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    axios
      .put("updatebuyerprofile", user, config)
      .then(function (response) {
        // console.log(field);
        // getUser();
        navigate("/buyer/profile");
        // setField(user);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
console.log(field)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(field);
    post(field);
  };
  
  return (
    <div>
      <Navbar />
      <div className=" bg-white m-2">
        <div className="row p-3">
          <div className="col-md-3 border-right mb-1">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                width="150"
                height="150"
                className="rounded-circle mt-5"
                src={imgUrl === "" ? defaultImgUrl : imgUrl} 
                alt={field.first_name}
              />
              <form
                className="row align-items-center text-center"
                // onSubmit={handleSubmission}
              >
                <label htmlFor="picture" style={{cursor: "pointer"}}>Upload Image</label>
                <input
                  style={{ display: "none" }}
                  id="picture"
                  type="file"
                  name="profile_picture"
                  onChange={changeHandler}
                />
                {/* <div className="mt-5 text-center">
                 <button className="btn btn-primary " type="submit">
                    Save Profile Pic
                  </button>
                  </div> */}
              </form>
              <span className="font-weight-bold">
             {/* {field.first_name} {field.last_name} */}
              </span>
              {/* <span className="text-black-50">{field.email}</span> */}
            </div>
          </div>

          <div className="col-md-9">
            <form
              method="post"
              className="col border-right"
              onSubmit={onSubmit}
            >
              <div className="p-3 py-5">
                <div></div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Update Profile</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      value={field.first_name}
                      onChange={handleEdit}
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      onChange={handleEdit}
                      className="form-control"
                      value={field.last_name}
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Phone number</label>
                    <input
                      type="text"
                      name="phone_number"
                      onChange={handleEdit}
                      className="form-control"
                      value={field.phone_number}
                      placeholder="Enter phone number"
                    />
                  </div>
                  {/* <div className="col-md-12">
                    <label className="labels">Home number</label>
                    <input
                      type="text"
                      name="phone2"
                      onChange={handleEdit}
                      className="form-control"
                      value={field.phone2}
                      placeholder="enter phone number"
                    />
                  </div> */}

                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleEdit}
                      className="form-control"
                      value={field.email}
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={handleEdit}
                      className="form-control"
                      value={field.address}
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
                <div className="row mt-3"></div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary " type="submit">
                    Save Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}