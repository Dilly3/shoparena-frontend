// import {Link, useParams} from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
// import { Carousel } from 'react-bootstrap';
// // import AuthContext from "../context/authContext";
//
// import React, {useNavigate} from 'react';
//
// import axios from 'axios';
// console.log("hello ");
// export default function GetProd() {
//     // const { user } = useContext(AuthContext);
//     const { id } = useParams();
//     const defaultImgUrl = "https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png";
//     console.log("hello 1");
//     const [product, setProduct] = useState(null);
//     const [alert, setAlert] = useState({
//         message: "",
//         color: "",
//         status: "",
//         show: Boolean,
//     });
//     console.log("hello 2");
//     const fetchedData = async () => {
//         console.log("hello 3");
//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };
//         console.log("hello 4");
//         try {
//             console.log("hello 5");
//             const result = await axios.get(
//                 `/product/${id}`,
//                 config
//             );
//             console.log("hello 6");
//             console.log("checking result", result)
//             setProduct(result.data.data.product);
//             console.log(result.data.data.product);
//         } catch (error) {
//             console.log("hello 7");
//             console.log(error);
//         }
//     };
//     const navigate = useNavigate();
//     const onSave = async () => {
//         try {
//             const result = await axios.get(`/product/${product.ID}/bookmark`);
//             setAlert({
//                 message: "Saved successfully",
//                 color: "success",
//                 status: result,
//                 show: false,
//             });
//
//             setTimeout(() => {
//                 setAlert({
//                     message: "",
//                     color: "",
//                     status: "",
//                     show: true,
//                 });
//             }, 2000);
//             console.log(result);
//         } catch (error) {
//             if (error.response.data.errors[0] === "unauthorized") {
//                 navigate("/login");
//             }
//             setAlert({
//                 message: error.response.data.errors[0],
//                 color: "danger",
//                 status: error.result,
//                 show: false,
//             });
//
//             setTimeout(() => {
//                 setAlert({
//                     message: "",
//                     color: "",
//                     status: "",
//                     show: true,
//                 });
//             }, 2000);
//         }
//     };
//
//     useEffect(() => {
//         fetchedData();
//         // eslint-disable-next-line
//     }, []);
//
//     if (product === null) {
//         return <></>;
//     } else {
//         return (
//             <>
//                 <div className="content-section">
//                     <div className="container">
//                         {!alert.show && (
//                             <div className={`alert alert-${alert.color}`}>
//                                 {" "}
//                                 {alert.message}
//                             </div>
//                         )}
//                         <div className="row">
//                             <div className="col-md-8 page-content">
//                                 <div className="inner-wrapper">
//                                     <div className="property-images-slider">
//                                         <div id="details-slider" className="flexslider">
//                                             <Link to="" className="yellow-btn" style={{textDecoration:"none"}}>
//                                                 ₦{Number(product.price).toLocaleString()}/yr
//                                             </Link>
//                                             <Link to="" className="status" style={{textDecoration:"none"}}>
//                                                 {product.apartment_status === true ? (<p style={{color:"white", fontSize:"16px"}}>Available</p>  ): (<p style={{color:"white"}}> Not Available</p>)}
//                                             </Link>
//                                             {user && user.role.title.toLowerCase() === "tenant" ? ( <Link
//                                                 to="#"
//                                                 className="fa fa-bookmark bookmark"
//                                                 style={{
//                                                     float: "right",
//                                                     color: "black",
//                                                     fontSize: "20px",
//                                                     padding:"10px"
//                                                 }}
//                                                 onClick={onSave}
//                                             ></Link>) : <p></p>}
//                                             <ul
//                                                 className="image-wrapper"
//                                                 style={{ marginTop: "10px",paddingLeft:"0" }}
//                                             >
//                                                 <Carousel>
//                                                     {product.images.map((photo) =>(
//                                                         <Carousel.Item >
//                                                             <img src= {photo.url} key={photo.id} alt="gallery" className="d-block w-100"/>
//                                                         </Carousel.Item>
//                                                     ))}
//                                                 </Carousel>
//                                                 {/* <li> */}
//                                                 {/* {product.images.map((image) => ( */}
//                                                 {/* <div className="image-wrapper">
//                               <img src={product.images[0].url} alt="gallery" />
//                             </div> */}
//                                                 {/* ))} */}
//                                                 {/* </li> */}
//                                             </ul>
//                                         </div>
//
//                                         <div id="details-carousel" className="flexslider">
//                                             <ul className="slides">
//                                                 {product.images.map((image) => (
//                                                     <li>
//
//                                                         <img src={image.url} alt="detpiLink" />
//
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="property-desc">
//                                         <h2>{product.title}</h2>
//                                         <ul className="slide-item-features item-features">
//                                             <li>
//                                                 <span className="fa fa-wardrobe">{product.furnished === true ? (<li >Furnished: Yes</li>  ): (<li>Furnished: No</li>)}</span>
//
//                                             </li>
//                                             <li><span className="fas fa-map-marker-alt"></span>{product.location} State</li>
//                                             <li><span className="fa fa-bed"></span>
//                                                 {product.no_of_rooms} Rooms
//                                             </li>
//                                         </ul>
//                                         <p className="first-paragraph">{product.description}</p>
//
//                                         <div className="additional-features">
//                                             <h3>Exterior Features</h3>
//                                             <ul className="features">
//                                                 {product.exterior.map((ext) => (
//                                                     <li className="single-feature"><i className="fa fa-check-circle"></i>{ext.name}</li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                         <div className="additional-features">
//                                             <h3>Interior Features</h3>
//                                             <ul className="features">
//                                                 {product.interior.map((int) => (
//                                                     <li className="single-feature">
//                                                         <i className="fa fa-check-circle"></i>
//                                                         {int.name}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="col-md-4 blog-sidebar">
//                                 <div className="sidebar-widget author-profile">
//                                     <h4 className="widget-title"><b>Listed by</b></h4>
//                                     <div className="image-box">
//                                         <img
//                                             src={product.User.image ? product.User.image : defaultImgUrl}
//                                             style={{height:"300px"}}
//                                             alt="agent"
//                                         />
//                                     </div>
//                                     <div className="desc-box">
//                                         <h4>
//                                             {product.User.first_name +
//                                                 " " +
//                                                 product.User.last_name}
//                                         </h4>
//
//                                     {/*    {user && user.role.title ? (*/}
//                                     {/*        <div>*/}
//                                     {/*            <p className="person-number" style={{ color: 'black' }}>*/}
//                                     {/*                <i className="fa fa-phone"></i> {product.User.phone}*/}
//                                     {/*            </p>*/}
//                                     {/*            <p className="person-email" style={{ color: 'black' }}>*/}
//                                     {/*                <i className="fa fa-envelope"></i>{" "}*/}
//                                     {/*                {product.User.email}*/}
//                                     {/*            </p>*/}
//                                     {/*            { product.User.phone_2 === "" ? (<p className="person-fax" style={{ color: 'black' }}>*/}
//                                     {/*                <i className="fa fa-print"></i> {product.User.phone_2}*/}
//                                     {/*            </p>) : (<p></p>)}*/}
//                                     {/*            {user.role.title === "tenant"? (*/}
//                                     {/*                <Link to={`/chat/${product.ID}`} className="gray-btn">*/}
//                                     {/*                    Chat*/}
//                                     {/*                </Link>) :<p></p>}*/}
//                                     {/*        </div>*/}
//                                     {/*    ):<div style={{justifyContent:"center", display:"flex"}}>*/}
//                                     {/*        <Link to='/login' className="gray-btn" style={{ backgroundColor:"#1976d2", color:"white", fontWeight:"400"}}><i className="fas fa-phone-alt"></i>  Contact agent</Link>*/}
//                                     {/*    </div>}*/}
//
//                                     {/*</div>*/}
//                                 </div>
//                             </div>
//
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }
