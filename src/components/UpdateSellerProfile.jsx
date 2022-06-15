import React, { useContext, useState,useEffect} from "react";
import SellerTopBar from "./SellerTopBar";
import SellerContainer from "./SellerContainer";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {useAppContext} from "../context/ContextUse";
import "./sellerProfile.css";
//import context from "react-bootstrap/esm/AccordionContext";

export default  function UpdateSellerProfile() {
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
  const [selectedFile, setSelectedFile] = useState({image: ""});
  const [imgUrl, setImgUrl] = useState("")
  
  const navigate = useNavigate();

  const getSellerInfo = async () => {
    try {
      const resp = await axios("getsellerprofile")
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

  const changeHandler = (e) => {
    console.log(e.target.files[0])
    setSelectedFile({[e.target.name]: e.target.files[0] });
    setImgUrl(URL.createObjectURL(e.target.files[0]))
    // handleSubmission(event,event.target.files[0])
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("profile_picture", selectedFile.image);
    const config = {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(selectedFile)
    axios
      .put("/uploadsellerpic", formData, config)
      .then((result) => {
        getUser();
        navigate("/seller/profile");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };
  const defaultImgUrl =
    "https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png";
    //"/assets/img/no-pic-ava.jpeg";

  useEffect(() => {
    getSellerInfo()
  }, []);

  useEffect(() => {   
     // Update the document title using the browser API
   
    if (!user.image) {
      setImgUrl(defaultImgUrl)
    }else{
      setImgUrl(user.image)
    }
  }, [user])
  const post = (user) => {
    const config = {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    axios
      .put("updatesellerprofile", user, config)
      .then(function (response) {
        // console.log(field);
        // getUser();
        navigate("/seller/profile");
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
    <div className="">
    <SellerTopBar/>
    <SellerContainer/>
 <div className="bg-white m-2">
   <div className="profile row p-3">
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
                onSubmit={handleSubmission}
              >
                <label htmlFor="picture" style={{cursor: "pointer"}}>Upload Image</label>
                <input
                  style={{ display: "none" }}
                  id="picture"
                  type="file"
                  name="image"
                  // value={selectedFile.image}
                  onChange={changeHandler}
                />
                <div className="mt-5 text-center">
                 <button 
                 style={{ background: `#fcb700`, border: "none" }}
                 className="btn btn-dark " type="submit">
                    save profile pic
                  </button>
                  </div>
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
                  <button 
                  style={{ background: `#fcb700`, border: "none" }}
                  className="btn btn-dark " type="submit">
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