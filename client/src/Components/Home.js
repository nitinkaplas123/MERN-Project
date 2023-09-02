import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { adddata, dltData, updateData } from "./context/ContextProvider";
const Home = () => {

    const { udata, setUdata } = useContext(adddata);
    const { upData, setUpData } = useContext(updateData)
    const { deleteData, setDeleteData } = useContext(dltData)

    const [getUserData, setUserData] = useState([])

    const getData = async (e) => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })


        console.log(res)
        const datas = await res.json()
        console.log(datas)

        if (res.status === 422 || !getUserData) {
            console.log("error");
        }
        else {
            setUserData(datas)
            console.log("Get Data");
        }
    }


    useEffect(() => {
        getData();
    }, [])

    const deleteUser = async (id) => {
        const res2 = await fetch(`/deleteUser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const delData = await res2.json()
        console.log(delData);

        if (res2.status === 422 || !delData) {
            console.log("error");
        } else {
            console.log("user deleted successfully");
            getData()
            setDeleteData(delData)
        }
    }


    return (
        <>
            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </>
                    :
                    ""
            }

            {
                upData ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{upData.name}</strong>  Updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </>
                    :
                    ""
            }

            {
                deleteData ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{deleteData.name}</strong>  user deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </>
                    :
                    ""
            }




            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mb-2">
                        <NavLink to='/register' className="btn btn-primary">Add Data</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">ID</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getUserData.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className="d-flex justify-content-between" >
                                                    <NavLink to={`/view/${element._id}`}> <button className="btn btn-success"><i class="fas fa-yin-yang"></i></button></NavLink>
                                                    <NavLink to={`/edit/${element._id}`}> <button className="btn btn-primary"><i class="fa-solid fa-pen-nib"></i></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteUser(element._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home