import React,  {useState, useEffect} from'react'
import axios from '../axios';
import { Link } from 'react-router-dom';
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

  const submit = async() => {
    try{
    //   const config = {
    //     // headers: {
    //     //   "Content-Type": "multipart/form-data",
    //     // }
    // }

    const {title, description, images, category_id, price, rating, quantity} = values;


    const setFormData = new FormData();
    // setFormData.append('title', title)
    // setFormData.append('description', description)
    // setFormData.append('images', images[0])
    // setFormData.append('images', images[1])
    // setFormData.append('category_id', category_id)
    // setFormData.append('price', price)
    // setFormData.append('rating', rating)
    // setFormData.append('quantity', quantity)

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

      // const response = await axios.post("/createproduct", setFormData);
      const response = await axios({
        method: 'post',
        url: "/createproduct",
        data: setFormData,
        headers: {
            'Content-Type': `multipart/form-data`,
        },
    });
      console.log(response)

      console.log(values)

      
    }
    catch(err){
        console.log(err)
    }
  } 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values)
    submit()
    setValues(initialState)
}
const uploadImage = (e) => {
  // let storeFileValue = []
  // const getvalue = {}
  // let fileEvent = Array.from(e.target.files);
  // console.log(fileEvent)
  // console.log(fileEvent)

  // for(let i = 0; i < fileEvent.length; i++){
  //   // console.log(fileEvent[i].name)
  //   storeFileValue.push(fileEvent[i])
  //   // setValues({...values, images : [fileEvent[i].name]})
  // }
 
// console.log(storeFileValue)
console.log(e.target.files)
const {files} = e.target;
console.log(files)
  setValues({...values, images : [...files]})



  // if(fileEvent.length < 2){
  //   console.log(e.target.files[0].name)
  // }else{
  //   console.log(fileEvent.item)
  //   // fileEvent.files.map((item) => console.log(item.name))
  // }
  // console.log("hello");
  // setValues({...values, images : [...e.target.files]})
}
  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }
  console.log(values)
  return (
    <>
  <div className="col-xl-12 col-lg-12 col-12 col-md-12">
  <section className="box ">
    <header className="panel_header">
      <h2 className="title float-left">Basic Info</h2>
      <div className="actions panel_actions float-right">
        <i className="box_toggle fa fa-chevron-down" />
        <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
        <i className="box_close fa fa-times" />
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
            
            <div className="form-group">
              <label className="form-label" htmlFor="field-1">Category</label>
              <span className="desc" />
              <div className="controls">
               {/* <input type="text" name ="category_id" value = {values.category_id} onChange={handleChange} className="form-control" id="field-1" /> */}

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
              <label className="form-label" htmlFor="field-1">Rating</label>
              <span className="desc" />
              <div className="controls">
                <input type="text" name="rating" value = {values.rating} onChange={handleChange} className="form-control" id="field-1" />
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
              <label className="form-label" htmlFor="field-1">Image</label>
              <span className="desc" />
              <div className="controls">
                <input type="file" name="images" multiple values={values.images} className="form-control" id="field-5" onChange={uploadImage} />
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
                <Link to="seller/dashboard"><button type="button" className="btn">Cancel</button></Link>
              </div>
            </div>
          </div></form>
      </div>
    </div></section>
</div>
    </>
  )
}