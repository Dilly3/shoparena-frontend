import React,  {useState, useEffect} from'react'
import axios from '../axios';
import { Link } from 'react-router-dom';
import SellerTopBar from './SellerTopBar';
import SellerContainer from './SellerContainer';
import "./sellerProfile.css";

export default function Createproducts() {
  const initialState = {
    title: "",
    description : "",
    images: [],
    category_id: 0,
    price: 0,
    rating: 0,
    quantity: 0
  }
  const [values, setValues] = useState(initialState)
  const [success, setSuccess] = useState(false);
  {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 7000);
    }
  }

  const submit = async() => {
    try{
   

    const {title, description, images, category_id, price, rating, quantity} = values;


    const setFormData = new FormData();
   

    for(let key in values) {
      if(key === "images") {
        for(let image of values[key]) {
          setFormData.append("images", image)
        }
      } else {
        setFormData.append(key, values[key])
      }
    }
    for (const value of setFormData.values()) {
      console.log(JSON.stringify(value));
    }

      const response = await axios({
        method: 'post',
        url: "/createproduct",
        data: setFormData,
        headers: {
            'Content-Type': `multipart/form-data`,
        },
    });
      console.log(response)
      setSuccess(true)

      
    }
    catch(err){
        console.log(err)
    }
  } 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    submit()
    setValues(initialState)
}
const uploadImage = (e) => {
 
console.log(e.target.files)
const {files} = e.target;
console.log(files)
  setValues({...values, images : [...files]})


}
  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }
  console.log(values)
  return (
    <>
      <SellerTopBar/>
      <SellerContainer/>
  <div className="create col-xl-12 col-lg-12 col-12 col-md-12">
  <section className="box ">
    <header className="panel_header">
      <h2 className="title float-left">Basic Info</h2>
      <div className="actions panel_actions float-right">
      <Link to="/seller/dashboard"><i className="box_toggle fa fa-chevron-down" />
        <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
        <i className="box_close fa fa-times" /></Link>
      </div>
    </header>
    <div className="content-body">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="col-xl-8 col-lg-8 col-md-9 col-12">
            <div className="form-group">
              <label className="form-label" htmlFor="field-1">Title</label>
              <span className="desc" />
              <div className="controls">
                <input type="text" name="title" value= {values.title}  onChange={handleChange} className="form-control" id="field-1" />
              </div>
            </div>
            {success && (
                  <div class="alert toggle3" role="alert">
                    {"product added successfully"}
                  </div>
                )}
            <div className="form-group">
              <label className="form-label" htmlFor="field-1">Category</label>
              <span className="desc" />
              <div className="controls">
            <select name="category_id" id="category_id" onChange={handleChange} >
            <option value="Choose Categories">Choose Categories</option>
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
              <label className="form-label" htmlFor="field-1">Price</label>
              <span className="desc" />
              <div className="controls">
                <input type="text" name = "price" value = {values.price} onChange={handleChange} className="form-control" id="field-1" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="field-1">Quantity</label>
              <span className="desc" />
              <div className="controls">
                <input type="text"name ="quantity" value = {values.quantity} onChange={handleChange} className="form-control" id="field-1" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="field-1">Upload Images</label>
              <span className="desc" />
              <div className="controls">
                <input type="file" name="images" multiple values={values.images} className="form-control" id="field-5" onChange={uploadImage} required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="field-6">Description</label>
              <span className="desc">e.g. "Enter any size of text description here"</span>
              <div className="controls">
                <textarea  name="description" className="form-control autogrow" onChange={handleChange}  cols={5} id="field-6" value={values.description} />
              </div>
            </div>
            
            <div className="col-xl-8 col-lg-8 col-md-9 col-12 padding-bottom-30">
              <div className="text-left">
                <button type="submit" className="btn btn-primary" style={{ color:"black"}}>Add Product</button>
                <Link to="/seller/dashboard"><button type="button" className="btn">Cancel</button></Link>
              </div>
            </div>
          </div></form>
      </div>
    </div></section>
</div>
    </>
  )
}

