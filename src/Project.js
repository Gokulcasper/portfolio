import React from "react";
import "./Project.css";
import blog from './img/Blog.png';
import hotel from './img/Hotel.png';
import ecommerce from './img/ecommerce.png';
import car from './img/car.png';
import coffee from './img/coffee.png';
import watch from './img/watch.png';


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
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="/" className="project__btn">View Details</a>
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
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="/" className="project__btn">View Details</a>
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
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="/" className="project__btn">View Details</a>
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
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="/" className="project__btn">View Details</a>
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
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="/" className="project__btn">View Details</a>
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
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="/" className="project__btn">View Details</a>
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
