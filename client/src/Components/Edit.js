import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Edit=()=>{
    const setData=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name)
        set_Data({
            ...data,
           [event.target.name]:event.target.value
          })
    }
    
    const [data,set_Data]=useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        description:""
    })

      return (
        <>
        <div className="container">
            <NavLink to={'/'}>Home</NavLink>

            <form>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="email" onChange={setData} value={data.name} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="age" onChange={setData} value={data.age} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="email" onChange={setData} value={data.work} name="work" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" onChange={setData} value={data.email} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="password" onChange={setData} value={data.mobile} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="address"  onChange={setData} value={data.address} name="address" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                         <textarea name="description" onChange={setData} value={data.description} className="form-control" id="" cols={30} rows={10}></textarea>
                    </div>

                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </>
      )
}
export default Edit