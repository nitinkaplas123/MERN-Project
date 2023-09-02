import React from "react";
import { useState ,useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from './context/ContextProvider';


const Register = () => {
    
    const {udata,setUdata} = useContext(adddata);
   
    const navigate=useNavigate()
    const [data, set_Data] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        address: "",
        description: ""
    })

    const setData = (event) => {
        console.log(event.target.value);
        console.log(event.target.name)
        set_Data({
            ...data,
            [event.target.name]: event.target.value
        })
    }


    {/* On clicking the submit button the data from frotened is saving to backend in database */ }
    const addInputData = async (e) => {
        e.preventDefault()

        const { name, email, age, mobile, work, address, description } = data
        const res = await fetch("/registeruser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name, email, age, mobile, work, address, description
            })
        })

        console.log(res)
        const datas = await res.json()
        console.log(datas)

        if (res.status === 422 || !datas) {
            alert("error")
            console.log("error");
        }
        else {
            navigate('/')
            setUdata(datas)
            console.log("This is intial value :", udata);
            console.log("data added");
        }
    }

    return (
        <>
            <div className="container">
                <NavLink to={'/'}>Home</NavLink>

                <form>
                    <div className="row">
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="name" onChange={setData} value={data.name} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Age</label>
                            <input type="age" onChange={setData} value={data.age} name="age" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Work</label>
                            <input type="name" onChange={setData} value={data.work} name="work" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="email" onChange={setData} value={data.email} name="email" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Mobile</label>
                            <input type="number" onChange={setData} value={data.mobile} name="mobile" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Address</label>
                            <input type="address" onChange={setData} value={data.address} name="address" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-12 col-md-12 col-12">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea name="description" onChange={setData} value={data.description} className="form-control" id="" cols={30} rows={10}></textarea>
                        </div>


                        <button type="submit"  onClick={addInputData} class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register  