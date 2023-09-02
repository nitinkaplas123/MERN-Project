import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { updateData } from "./context/ContextProvider";


const Edit = () => {
    
    const {upData,setUpData}=useContext(updateData)
    const navigate=useNavigate("")
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

    const { id } = useParams("")
    console.log(id)

    const getData = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        console.log(res)
        const data = await res.json()
        console.log(data)

        if (res.status === 422 || !data) {
            console.log("error");
        }
        else {
            set_Data(data)
            console.log("Get Data");
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const userUpdate = async (e) => {
        e.preventDefault()

        const { name, email, age, mobile, work, address, description } = data

        const res2 = await fetch(`/updateUser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name, email, age, mobile, work, address, description
            })
        })

        const data2 = await res2.json()
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("error")
            console.log("error");
        }
        else {
            alert("here your data is updated")
            
            console.log("Get Data");
            navigate('/')
            setUpData(data2)
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


                        <button type="submit" onClick={userUpdate}  class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Edit