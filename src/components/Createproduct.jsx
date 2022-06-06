import React,  {useState, useEffect} from'react'
import axios from '../axios';

export default function Createproduct() {

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
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
    }
      const response = await axios.post("/createproduct", values, config);
      console.log(response)
    }
    catch(err){
        console.log(err)
    }
  } 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values)
    submit()
    setValues(initialState)
   
}
const uploadImage = (e) => {
  setValues({...values, Images : [...e.target.files]})
}

  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }
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
              <label className="form-label" htmlFor="field-1">Image</label>
              <span className="desc" />
              <div className="controls">
                <input type="file" name="images[]" multiple values={values.images} className="form-control" id="field-5" onChange={uploadImage} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="field-1">Category id</label>
              <span className="desc" />
              <div className="controls">
                <input type="text" name = "category_id" value = {values.category_id} onChange={handleChange} className="form-control" id="field-1" />
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
              <label className="form-label" htmlFor="field-6">Description</label>
              <span className="desc">e.g. "Enter any size of text description here"</span>
              <div className="controls">
                <textarea  name="description" className="form-control autogrow" onChange={handleChange}  cols={5} id="field-6" value={values.description} />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-9 col-12 padding-bottom-30">
              <div className="text-left">
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn">Cancel</button>
              </div>
            </div>
          </div></form>
      </div>
    </div></section>
</div>

    
    </>
  )

}
