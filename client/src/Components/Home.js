import React from "react";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mb-2">
                    <button className="btn btn-primary">Add Data</button>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>nitinkaplas123</td>
                            <td>nitinkaplas@gmail.com</td>
                            <td>SDE1</td>
                            <td>8837700899</td>
                            <td className="d-flex justify-content-between" >
                                <button className="btn btn-success"><i class="fas fa-yin-yang"></i></button>
                                <button className="btn btn-primary"><i class="fa-solid fa-pen-nib"></i></button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>nitinkaplas123</td>
                            <td>nitinkaplas@gmail.com</td>
                            <td>SDE1</td>
                            <td>8837700899</td>
                            <td className="d-flex justify-content-between" >
                                <button className="btn btn-success"><i class="fas fa-yin-yang"></i></button>
                                <button className="btn btn-primary"><i class="fa-solid fa-pen-nib"></i></button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home