import React from "react";
import "./Project.css";
import blog from './img/Blog.png';
import hotel from './img/Hotel.png';
import ecommerce from './img/ecommerce.png';
import car from './img/car.png';
import coffee from './img/coffee.png';
import watch from './img/watch.png';
import {
    FaGithub,
} from "react-icons/fa";


function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className="container">
                <div className="row__project row__flex">

                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={blog} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Blog Application</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://raj-blog-mern.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/mern-blog-app" className="project__btn"><FaGithub /> For Client</a>
                                    <a href="https://github.com/Gokulcasper/Blog-api" className="project__btn"><FaGithub /> For Server</a>
                                </div>



                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={hotel} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Hotel Booking</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://raj-hotel-booking.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/Client" className="project__btn"><FaGithub /> For Client</a>
                                    <a href="https://github.com/Gokulcasper/Hotel-Booking" className="project__btn"><FaGithub /> For Server</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={ecommerce} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Ecommerce</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://online-shoes-shop-e-commerce.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/Ecommerce" className="project__btn"><FaGithub /> View GitHub</a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-down">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={car} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Car ShowRoom</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://gokul-car-showroom.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/Car-Sell" className="project__btn"><FaGithub /> View GitHub</a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-down">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={coffee} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Coffee Shop</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://gokul-coffee-shop.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/Coffee-Shop" className="project__btn"><FaGithub /> View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-down">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={watch} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Watch Store</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://raj-blog-mern.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/Watch-store" className="project__btn"><FaGithub /> View GitHub</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className="view__more pointer btn">View more</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
