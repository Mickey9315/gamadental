import React, {useState} from 'react';
import dish1 from "../img/anasayfa/dish1.png";
import rightcircle from "../img/anasayfa/Arrow - Right Circle.png";
import disestetigi from "../img/anasayfa/disestetigi.png";
import dishimplant from "../img/anasayfa/dishasd.png";

import disbeyazlatma from '../img/anasayfa/disbeyazlatma.png'
import acildis from '../img/anasayfa/acildis.png'
import onleme from '../img/anasayfa/onleme.png'
import {Swiper, SwiperSlide} from "swiper/react";
import docphoto1 from "../img/anasayfa/doctors/Group 1000001017.png";
import docphoto2 from "../img/anasayfa/doctors/Group 1000001018.png";
import docphoto3 from "../img/anasayfa/doctors/Group 1000001019.png";
import docphoto4 from "../img/anasayfa/doctors/Group 1000001020.png";
import docphoto5 from "../img/anasayfa/doctors/Mask group.png";
import AccordionEmre from "./AccordionEmre";
import oyununkaderi from "../img/anasayfa/oyunkaderi.png";
import Footer from "./Footer";
import searchimg from '../img/blogs/search.png'
import articles1 from "../img/anasayfa/articles/articles1.png";
import articles2 from "../img/anasayfa/articles/articles2.png";
import articles3 from "../img/anasayfa/articles/articles3.png";
import articles4 from "../img/anasayfa/articles/articles4.png";
import articles5 from "../img/anasayfa/articles/articles5.png";
import articles6 from "../img/anasayfa/articles/articles6.png";
import articles7 from "../img/anasayfa/articles/articles7.png";
import articles8 from "../img/anasayfa/articles/articles8.png";

import blogfoto1 from '../img/blogs/Rectangle 652.png'
import blogfoto2 from '../img/blogs/Rectangle 653.png'
import blogfoto3 from '../img/blogs/Rectangle 654.png'
import blogfoto4 from '../img/blogs/Rectangle 655.png'


import downicon from '../img/blogs/Arrow - Down 2.png'

import oynatdeneme from '../img/blogs/oynatdeneme.png'
import VideoFile from "./VideoFile";
import {useNavigate} from "react-router-dom";


const Blogs = () => {

    const navigate = useNavigate()
    const handleRedirect = (item) => {

        navigate(`${item}`);


        window.scrollTo(0, 0);
    };
    return (
        <div className={''}>
            <div className={'mt-[140px]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h2 className={'font1 xl:text-5xl lg:text-4xl md:text-3xl text-3xl 2xl:text-6xl'}>
                        Blogs
                    </h2>
                    <h2 className={'font4 text-sm sm:text-lg md:text-xl sm:w-[450px] w-[250px] md:w-[515px] items-center text-center mt-[20px] text-text2 '}>
                        We use only the best quality materials on the market in order to provide the best products to our patients.
                    </h2>
                    <div className={'w-[250px] sm:w-[450px] md:w-[515px] xl:w-[500px] h-[55px] bg11 mt-[40px] flex flex-row pl-[20px] py-[12px]'}>
                        <img className={'w-[24px] h-[24px]'} src={searchimg} alt=""/>
                        <h1 className={'font7 text-text3 pl-[8px]'}>
                            <input className={'w-full h-full font7 border-none outline-none'} placeholder={'Bloglarda Arat'} type="text"/>
                        </h1>

                    </div>
                </div>
                <div className={'flex justify-center items-center mt-[10px]'}>
                    <div className={'flex flex-row gap-[20px] 2xl:w-[1440px] lg:w-[1000px] md:w-[700px] w-[330px] sm:w-[600px] xl:w-[1240px]'}>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            breakpoints={{
                                350: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                }
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className={'relative w-full'}>
                                    <div className={'flex justify-center items-center mt-[50px]'}>
                                        <div className={'p-[20px] pb-[40px] bg12 relative cursor-pointer'}>
                                            <img className={'w-[370px] h-[290px]'} src={blogfoto1} alt=""/>
                                            <div className={'pl-4 '}>

                                                <div className={'w-full h-full mt-[27px] flex justify-between items-center'}>
                                                    <div className={'bg-bg2 w-fit h-[35px] px-[20px] flex justify-center items-center py-5 rounded-md'}>
                                                        <h2 className={'text-white font9 whitespace-nowrap text-lg'}>Kategori 1</h2>
                                                    </div>
                                                    <h4 className={'text-center pr-4 flex justify-center items-center'}>~Yazar Adı Soyadı</h4>
                                                </div>
                                                <h2 className={'text-xl font2 pt-3 mt-[14px]'}>
                                                    Lorem Ipsum
                                                </h2>
                                                <h3 className={'text-text2 mt-[10px] text-xl break-words'}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'relative w-full'}>
                                    <div className={'flex justify-center items-center mt-[50px]'}>
                                        <div className={'p-[20px] pb-[40px] bg12 relative cursor-pointer'}>
                                            <img className={'w-[370px] h-[290px]'} src={blogfoto2} alt=""/>
                                            <div className={'pl-4 '}>

                                                <div className={'w-full h-full mt-[27px] flex justify-between items-center'}>
                                                    <div className={'bg-bg2 w-fit h-[35px] px-[20px] flex justify-center items-center py-5 rounded-md'}>
                                                        <h2 className={'text-white whitespace-nowrap font9 text-lg'}>Kategori 2</h2>
                                                    </div>
                                                    <h4 className={'text-center pr-4 flex justify-center items-center'}>~Yazar Adı Soyadı</h4>
                                                </div>
                                                <h2 className={'text-xl font2 pt-3 mt-[14px]'}>
                                                    Lorem Ipsum
                                                </h2>
                                                <h3 className={'text-text2 mt-[10px] text-xl break-words'}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'relative w-full'}>
                                    <div className={'flex justify-center items-center mt-[50px]'}>
                                        <div className={'p-[20px] pb-[40px] bg12 relative cursor-pointer'}>
                                            <img className={'w-[370px] h-[290px]'} src={blogfoto3} alt=""/>
                                            <div className={'pl-4 '}>

                                                <div className={'w-full h-full mt-[27px] flex justify-between items-center'}>
                                                    <div className={'bg-bg2 w-fit h-[35px] px-[20px] flex justify-center items-center py-5 rounded-md'}>
                                                        <h2 className={'text-white whitespace-nowrap font9 text-lg'}>Kategori 3</h2>
                                                    </div>
                                                    <h4 className={'text-center pr-4 flex justify-center items-center'}>~Yazar Adı Soyadı</h4>
                                                </div>
                                                <h2 className={'text-xl font2 pt-3 mt-[14px]'}>
                                                    Lorem Ipsum
                                                </h2>
                                                <h3 className={'text-text2 mt-[10px] text-xl break-words'}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'relative w-full'}>
                                    <div className={'flex justify-center items-center mt-[50px]'}>
                                        <div className={'p-[20px] pb-[40px] bg12 relative cursor-pointer'}>
                                            <img className={'w-[370px] h-[290px]'} src={blogfoto4} alt=""/>
                                            <div className={'pl-4 '}>

                                                <div className={'w-full h-full mt-[27px] flex justify-between items-center'}>
                                                    <div className={'bg-bg2 w-fit h-[35px] px-[20px] flex justify-center items-center py-5 rounded-md'}>
                                                        <h2 className={'text-white font9 text-lg'}>Kategori 1</h2>
                                                    </div>
                                                    <h4 className={'text-center pr-4 flex justify-center items-center'}>~Yazar Adı Soyadı</h4>
                                                </div>
                                                <h2 className={'text-xl font2 pt-3 mt-[14px]'}>
                                                    Lorem Ipsum
                                                </h2>
                                                <h3 className={'text-text2 mt-[10px] text-xl break-words'}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'relative w-full'}>
                                    <div className={'flex justify-center items-center mt-[50px]'}>
                                        <div className={'p-[20px] pb-[40px] bg12 relative cursor-pointer'}>
                                            <img className={'w-[370px] h-[290px]'} src={articles1} alt=""/>
                                            <div className={'pl-4 '}>

                                                <div className={'w-full h-full mt-[27px] flex justify-between items-center'}>
                                                    <div className={'bg-bg2 w-fit h-[35px] px-[20px] flex justify-center items-center py-5 rounded-md'}>
                                                        <h2 className={'text-white font9 text-lg'}>Kategori 1</h2>
                                                    </div>
                                                    <h4 className={'text-center pr-4 flex justify-center items-center'}>~Yazar Adı Soyadı</h4>
                                                </div>
                                                <h2 className={'text-xl font2 pt-3 mt-[14px]'}>
                                                    Lorem Ipsum
                                                </h2>
                                                <h3 className={'text-text2 mt-[10px] text-xl break-words'}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            <div className={'mt-[50px] w-full h-full justify-center items-center'}>
                <div className={'flex justify-center items-center'}>
                    <div className={'flex cursor-pointer flex-col md:flex-row 2xl:w-[2160px] items-center gap-[50px]  justify-around md:gap-[250px]'}>
                        <h2 className={'font1 sm:text-3xl text-2xl md:text-4xl'}>
                            Articles
                        </h2>
                        <div className={'w-[200px] h-[60px] flex justify-center items-center flex-row border-[1px] rounded-[5px] border-text3'}>
                            <h2 className={'font2'}>Sırala: En Son</h2>
                            <img className={'pl-3'} src={downicon} alt=""/>
                        </div>
                        {/*<h2 className={'font4 text-base w-[515px] mt-[20px] text-text2 '}>*/}
                        {/*    We use only the best quality materials on the market in order to provide the best products to our patients.                        */}
                        {/*</h2>*/}
                    </div>
                </div>
                <div className={'flex flex-col mt-[71px] justify-center items-center  gap-[60px]'}>
                    <div className={'grid xl:grid-cols-3 lg:w-[850px] xl:w-fit grid-cols-1 lg:grid-cols-3  md:grid-cols-2 2xl:grid-cols-4 gap-[50px]'}>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img className={'xl:w-[265px]'} src={articles1} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 1</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg !text-[#98BCD6] right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles2} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 2</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles3} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 3</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles4} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 4</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles5} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 5</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles6} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 6</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles7} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 7</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                        <div className={'bg8 p-[20px] lg:pb-[60px] xl:pb-[40px] relative cursor-pointer'}>
                            <img src={articles8} alt=""/>
                            <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                <h2 className={'text-white font4 text-base'}>Kategori 8</h2>
                            </div>
                            <h2 className={'text-xl font2 mt-[14px]'}>
                                Care of your Teeth
                            </h2>
                            <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                        </div>
                    </div>
                    <div onClick={() => {handleRedirect('/blogs')}} className={'w-full h-full flex justify-center items-center'}>
                        <div className={'bg-bg2 hover:bg-bg6 cursor-pointer mt-[17px] w-fit h-[35px] px-[30px] py-[30px] flex justify-center items-center rounded-md'}>
                            <h2 className={'text-white font2 text-base'}>Check out more</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mt-[200px]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h2 className={'font1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl w-[300px] sm:w-fit  text-center lg:text-justify 2xl:text-4xl '}>
                        To Meet You
                        We can't wait
                    </h2>
                    <h2 className={'font4 text-lg md:text-xl w-[330px] sm:w-[515px] mt-[20px] text-text2 text-center'}>
                        We use only the best quality materials on the market in order to provide the best products to our patients.,
                    </h2>
                    <div className={'mt-[30px] sm:w-[500px] w-[320px]'}>
                        <VideoFile/>
                    </div>
                </div>
            </div>
            <div className={'mt-[140px] w-full h-full flex-col flex justify-center items-center'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h2 className={'font1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl w-[300px] sm:w-fit  text-center lg:text-justify 2xl:text-4xl'}>
                        Frequently Asked Questions
                    </h2>
                    <h2 className={'font4 text-lg md:text-xl w-[310px] sm:w-[515px] mt-[20px] text-text2 text-center'}>
                        We use only the best quality materials on the market in order to provide the best products to our patients.,
                    </h2>
                </div>
                <AccordionEmre/>
            </div>
            <div className={'mt-[90px] flex justify-center items-center'}>
                <div className={'lg:w-[900px] md:w-[700px] w-[330px] xl:w-[1064px] h-fit pb-10 md:h-[392px] bg-[#374857] rounded-[30px]  xl:gap-[50px] flex justify-center items-center flex-col md:flex-row'}>
                    <div className={'break-words flex flex-col 2xl:text-4xl xl:text-3xl md:text-2xl text-xl p-8 lg:text-4xl'}>
                        <h2 className={'font1 md:w-[300px] lg:w-[500px]  flex flex-col text-white'}>
                            We Rewrite the Rules of the Game with Gamadent!
                        </h2>
                        <h3 className={'font3 text-xl mt-[20px] text-white md:w-[300px] lg:w-[500px] !break-words'}>
                            We use only the best quality materials on the market in order to provide the best products to our patients.                                    </h3>
                        <div onClick={() => {handleRedirect('/contact')}} className={'bg-bg2 hover:bg-bg7 cursor-pointer cursor-pointer w-[200px] h-[50px] mt-[20px] md:mt-[40px] px-[0px] flex justify-center items-center py-[20px] rounded-lg'}>
                            <h2 className={'text-white font2 text-[16px]'}>Contact Info</h2>
                        </div>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}></div>
                    <img src={oyununkaderi} alt=""/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blogs;