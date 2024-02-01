import React from "react";
import courseAPI from "./CourseAPI";

const Courses = () => {
    return (
        <div className="course-body">
            <div id="wrapper" className="wrapper-content">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">Book Exchange</a>
                        </li>
                        <li>
                            <a href="#">All Course</a>
                        </li>
                        <li>
                            <a href="#">Registered Course</a>
                        </li>
                        <li>
                            <a href="#">Find Course</a>
                        </li>
                    </ul>
                </div>
                {/* Card */}
                <div className="container">
                    <div className="row">
                        {
                            courseAPI.map((x) => {
                                return (

                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={x.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{x.title}</h5>
                                                <h5 className="card-title">{x.creditHours}</h5>
                                                <h5 className="card-title">{x.instructor}</h5>
                                                <a href="#" className="btn btn-primary">
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;
