import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../axios";

export default function SellerEditProduct() {
  const initialState = {
    title: "",
    description: "",
    price: null,
    images: [],
    rating: null,
    quantity: null,
  };

  const { id } = useParams();

  const [updateProduct, setUpdateProduct] = useState(initialState);
  const [alert, setAlert] = useState({
    loading: false,
    msg: "Loading....",
  });
  const [checkSold, setCheckSold] = useState(0);
  const [remainingProduct, setRemainingProduct] = useState(0);
  const [findSeller, setSeller] = useState("");

  //get product by id

  const getProductById = async () => {
    try {
      const { data } = await axios.get(`/product/${id}`);
      const singleProduct = data.Product;
      setUpdateProduct({
        ...updateProduct,
        title: singleProduct.title,
        description: singleProduct.description,
        price: singleProduct.price,
        rating: singleProduct.rating,
        quantity: singleProduct.quantity,
      });
      // console.log(data.Product)
      console.log(updateProduct);
    } catch (err) {
      console.log(err);
    }
  };

  // update product

  const updateProductById = async () => {
    setAlert({ ...alert, loading: true});

    try {
      const resp = await axios.put(`/update/product/${id}`, updateProduct);
      if(resp.status === 200){
        setAlert({ ...alert, msg: "successfully updated", loading:true });
      }
      clearAlert();
      
    } catch (err) {
      console.log(err);
    }
  };

  const clearAlert = () => {
    setTimeout(() => {
      setAlert({ ...alert, loading: false });
    }, 3000);
  };

  {
    /*Get total product count*/
  }
  const getSellerSoldProduct = async () => {
    try {
      const resp = await axios.get("/seller/total/product/sold");
      console.log(checkSold);
      console.log(resp.data.data);
      setCheckSold(resp.data.data.Product_sold);
    } catch (error) {
      setCheckSold(0);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof updateProduct.quantity);
    updateProductById();

    console.log(updateProduct);
  };

  const uploadImage = (e) => {
    setUpdateProduct({ ...updateProduct, Images: [...e.target.files] });
  };

  const handleChange = (e) => {
    setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
    console.log(typeof e.target.value);
  };

  {
    /*Get the remaining product count*/
  }
  const getRemainingProductCount = async () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await axios.get("/seller/remaining/product/count", config);
      // console.log(resp.data.data);
      // console.log(remainingProduct);
      setRemainingProduct(resp.data.data.new_quantity);
    } catch (error) {
      setRemainingProduct(0);
      console.log(error);
    }
  };

  {
    /*find Seller*/
  }
  const findTheSeller = async () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await axios.get("/getsellerprofile", config);
      console.log(resp.data.data);
      setSeller(resp.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getSellerSoldProduct();
    findTheSeller();
    getRemainingProductCount();
    getProductById();
    // }
  }, []);

  return (
    <>
      {/* START CONTAINER */}
     
            <section className="box" style={{ width:"60%", marginLeft:"340px"}}>
              <header className="panel_header">
                <h2 className="title float-left">Edit Product</h2>
                <div className="actions panel_actions float-right">
                  <i className="box_toggle fa fa-chevron-down" />
                  <i
                    className="box_setting fa fa-cog"
                    data-toggle="modal"
                    href="#section-settings"
                  />
                  <i className="box_close fa fa-times" />
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <form onSubmit={handleSubmit}>
                    <div className="col-xl-8 col-lg-8 col-md-9 col-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="field-1">
                          Title
                        </label>
                        <span className="desc" />
                        <div className="controls">
                          <input
                            type="text"
                            name="title"
                            value={updateProduct.title}
                            className="form-control"
                            id="field-1"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="field-1">
                          Category
                        </label>
                        <span className="desc" />
                        <div className="controls">
                          {/* <input type="text" name ="category_id" value = {values.category_id} onChange={handleChange} className="form-control" id="field-1" /> */}

                          <select
                            name="category_id"
                            id="category_id"
                            onChange={handleChange}
                          >
                            <option value="Choose Categories">
                              Choose Categories
                            </option>
                            <option value="1">Fashion</option>
                            <option value="2">Electronics</option>
                            <option value="3">Health & Beauty</option>
                            <option value="4">Baby Products</option>
                            <option value="5">Phones & Tablets</option>
                            <option value="6">Food & Drinks</option>
                            <option value="7">Computing</option>
                            <option value="8">Sporting Goods</option>
                            <option value="9">Others</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="field-3">
                          Price
                        </label>
                        <span className="desc" />
                        <div className="controls">
                          <input
                            type="text"
                            name="price"
                            value={Number(updateProduct.price)}
                            className="form-control"
                            id="field-3"
                            onChange={(e) =>
                              setUpdateProduct({
                                ...updateProduct,
                                [e.target.name]: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="field-4">
                          Rating
                        </label>
                        <span className="desc" />
                        <div className="controls">
                          <input
                            type="text"
                            name="rating"
                            value={Number(updateProduct.rating)}
                            className="form-control"
                            id="field-4"
                            onChange={(e) =>
                              setUpdateProduct({
                                ...updateProduct,
                                [e.target.name]: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="field-5">
                          Quantity
                        </label>
                        <span className="desc" />
                        <div className="controls">
                          <input
                            type="text"
                            name="quantity"
                            pattern="[0-9]*"
                            value={updateProduct.quantity}
                            className="form-control"
                            id="field-5"
                            onChange={(e) =>
                              setUpdateProduct({
                                ...updateProduct,
                                [e.target.name]: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="field-1">
                          Image
                        </label>
                        <span className="desc" />
                        <div className="controls">
                          <input
                            type="file"
                            name="images[]"
                            multiple
                            value={updateProduct.images}
                            className="form-control"
                            id="field-5"
                            onChange={uploadImage}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="field-2">
                          Description
                        </label>
                        <span className="desc">
                          e.g. "Enter any size of text description here"
                        </span>
                        <div className="controls">
                          <textarea
                            name="description"
                            value={updateProduct.description}
                            className="form-control autogrow"
                            cols={5}
                            id="field-2"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-xl-8 col-lg-8 col-md-9 col-12 padding-bottom-30">
                        <div className="text-left">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                          <Link to="/seller/dashboard">
                            <button type="button" className="btn">
                              Cancel
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {alert.loading && <span>{alert.msg}</span>}
                  </form>
                </div>
              </div>
            </section>
          
      {/* END CONTENT */}
    </>
  );
}