// import {useEffect, useState, useContext} from "react"
// import axios from '../axios';
// import "./buyerOrders.css";
// import "./cart-mini-1.jpg"
// import {Link, useParams} from "react-router-dom";
// import {Carousel} from "react-bootstrap";
// import {context} from "../context/ContextUse";
// import React from "react";
//
//
// export default function GetProdById(){
//     const { user } = useContext(context);
//     console.log(user)
//     const [input, setInput ] = useState({})
//     const [modalProduct, setModalProduct] = useState([])
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const formatAmount = (number) => {
//         return number.toLocaleString()
//     }
//
//     const fetchedData = async () => {
//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };
//
//         try {
//             const result = await axios.get(`/product/${id}`);
//             console.log(result);
//             setProduct(result.data.Product);
//
//         } catch (error) {
//             if (error.response.status === 500) {
//                 console.log(error)
//             }
//         }
//     }
//   // const navigate = useNavigate();
//
//   useEffect(() => {
//     fetchedData();
//     // eslint-disable-next-line
//   }, []);
//
//     console.log("HI",id)
//     console.log("HI",product)
//
//     return(
//         <div>
//             <div className="content-section">
//                 <div className="container">
//                     {!alert.show && (
//                         <div className={`alert alert-${alert.color}`}>
//                             {" "}
//                             {alert.message}
//                         </div>
//                     )}
//                     <div className="row">
//                         <div className="col-md-8 page-content">
//                             <div className="inner-wrapper">
//                                 <div className="property-images-slider">
//                                     <div id="details-slider" className="flexslider">
//                                         <Link to="" className="yellow-btn" style={{textDecoration:"none"}}>
//                                             ₦{formatAmount(product.price)}
//                                         </Link>
//                                         <ul
//                                             className="image-wrapper"
//                                             style={{ marginTop: "10px",paddingLeft:"0" }}
//                                         >
//                                             <Carousel>
//                                                 {product?.images.map((photo) =>(
//                                                     <Carousel.Item >
//                                                         <img src= {photo.url} key={photo.id} alt="gallery" className="d-block w-100"/>
//                                                     </Carousel.Item>
//                                                 ))}
//                                             </Carousel>
//
//                                         </ul>
//                                     </div>
//
//                                     <div id="details-carousel" className="flexslider">
//                                         <ul className="slides">
//                                             {product?.images.map((image) => (
//                                                 <li>
//
//                                                     <img src={image.url} alt="detpiLink" />
//
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="property-desc">
//                                     <h2>{product?.title}</h2>
//
//                                     <p className="first-paragraph">{product?.description}</p>
//
//
//
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="col-md-4 blog-sidebar">
//                             <div className="sidebar-widget author-profile">
//
//                                 <div className="desc-box">
//
//                                     {user ? (
//                                         <div>
//
//                                             <p className="person-email" style={{ color: 'black' }}>
//                                                 <i className="fa fa-envelope"></i>{" "}
//                                                 {user.email}
//                                             </p>
//                                             { user.phone_number }
//                                                 <Link to={`/chat/${product?.ID}`} className="gray-btn">
//                                                     Chat
//                                                 </Link>)
//                                         </div>
//                                     ):<div style={{justifyContent:"center", display:"flex"}}>
//                                         <Link to='/login' className="gray-btn" style={{ backgroundColor:"#1976d2", color:"white", fontWeight:"400"}}><i className="fas fa-phone-alt"></i>  Contact agent</Link>
//                                     </div>}
//
//                                 </div>
//                             </div>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }