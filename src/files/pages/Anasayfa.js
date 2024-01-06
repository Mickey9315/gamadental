import React, {useEffect} from 'react';
import ellipse from '../img/ellipse.svg'
import dishes from '../img/dish.svg'
import dentist from '../img/edntist.svg'
import phone from '../img/phone.svg'
import ornekfoto from '../img/ornekfoto.png'
import plusone from '../img/plusone.png'
import gamadent2 from '../img/gamadent.svg'
import dish1 from '../img/anasayfa/dish1.svg'
import dish2 from '../img/anasayfa/dish2.svg'
import dish3 from '../img/anasayfa/dish3.svg'
import disestetigi from '../img/anasayfa/disestetigi.png'
import dishimplant from '../img/anasayfa/dishasd.png'
import rightcircle from '../img/anasayfa/Arrow - Right Circle.png'

import photo1 from '../img/anasayfa/photo1.png'
import photo2 from '../img/anasayfa/photo2.png'

import phone2 from '../img/anasayfa/Iconly/Light-Outline/Call.svg'
import Testasd from "./test";

import Rectangle631 from '../img/anasayfa/Rectangle 631.png'
import shieldicon from '../img/anasayfa/shield.svg'

import docphoto1 from '../img/anasayfa/doctors/Group 1000001017.png'
import docphoto2 from '../img/anasayfa/doctors/Group 1000001018.png'
import docphoto3 from '../img/anasayfa/doctors/Group 1000001019.png'
import docphoto4 from '../img/anasayfa/doctors/Group 1000001020.png'
import docphoto5 from '../img/anasayfa/doctors/Mask group.png'


import profilfoto1 from '../img/anasayfa/profilphoto/photo1.png'
import profilfoto2 from '../img/anasayfa/profilphoto/photo2.png'
import profilfoto3 from '../img/anasayfa/profilphoto/photo3.png'
import profilfoto4 from '../img/anasayfa/profilphoto/photo4.png'
import stars from '../img/anasayfa/profilphoto/star.png'
import disfotosu from '../img/anasayfa/disfotosu.png'

import articles1 from '../img/anasayfa/articles/articles1.png'
import articles2 from '../img/anasayfa/articles/articles2.png'
import articles3 from '../img/anasayfa/articles/articles3.png'
import articles4 from '../img/anasayfa/articles/articles4.png'
import articles5 from '../img/anasayfa/articles/articles5.png'
import articles6 from '../img/anasayfa/articles/articles6.png'
import articles7 from '../img/anasayfa/articles/articles7.png'
import articles8 from '../img/anasayfa/articles/articles8.png'

import oyununkaderi from '../img/anasayfa/oyunkaderi.png'


import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import AccordionEmre from "./AccordionEmre";
import {NavLink, useNavigate} from "react-router-dom";

import facebook from '../img/anasayfa/social media/facebook.png'
import instagram from '../img/anasayfa/social media/instagram.png'
import linkedin from '../img/anasayfa/social media/linkedin.png'
import twitter from '../img/anasayfa/social media/twitter.png'
import youtube from '../img/anasayfa/social media/youtube.png'
import Footer from "./Footer";
import whatsapp from "../img/whatsapp-svgrepo-com (1).svg";


const Anasayfa = (props) => {
    const { phonen } = props;
    const navigate = useNavigate()
    console.log(phonen)
    const handleRedirect = (item) => {

        navigate(`${item}`);


        window.scrollTo(0, 0);
    };
    return (
        <div className={'text-7xl w-full h-full flex flex-col gap-[120px]'}>
            <div className={'flex flex-col 2xl:flex-row lg:flex-row md:flex-col xl:gap-0 lg:gap-[50px] justify-center items-center md:mt-[120px] mt-[120px] lg:mt-[120px] '}>
               <div className={'break-words flex flex-col 2xl:text-6xl xl:text-5xl  md:text-5xl sm:text-5xl text-3xl lg:text-4xl'}>
                   <h2 className={'font1 flex flex-col xl:justify-start items-center xl:items-start'}>
                  <span className={''}>
                       Gentle Physicians
                  </span>
                       <span>
                       Fast And Effective Results!
                  </span>

                   </h2>
                   <div className={'w-full flex justify-center xl:justify-start items-start'}>
                       <span className={'font4 flex justify-center items-center text-sm w-[330px] sm:w-[530px] md:w-[530px] mt-[30px] sm:text-base  md:text-lg lg:w-[400px] 2xl:w-[670px] xl:w-[530px] !break-words'}>
                       We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
                   </span>
                   </div>
                   <div className={'flex md:flex-col flex-col lg:flex-row gap-[24px] justify-start items-center mt-[20px]'}>
                       <div onClick={() => {navigate('/contact')}} className={'bg-bg2 hover:bg-bg6 cursor-pointer lg:w-[200px] sm:w-[210px] xl:w-[250px] lg:h-[50px] h-[60px] md:h-[60px]  xl:h-[50px] px-[15px] flex justify-center items-center xl:py-[20px] lg:py-[15px] 2xl:py-[30px] rounded-xl'}>
                           <h2 className={'text-white font2 text-[20px] sm:p-0 px-[10px] sm:text-[12px] xl:text-[16px]'}>Create an Appointment Now</h2>
                       </div>
                       <a target={"_blank"} href={`tel:${phonen}`} className={'flex flex-row gap-[15px] cursor-pointer'}>
                           <div className={'xl:w-[55px]  md:h-[70px] h-[70px] w-[70px] md:w-[70px] xl:h-[55px] lg:w-[40px] lg:h-[40px] flex justify-center items-center  border-[#1376F8] border-2 rounded-xl'}>
                               <div className={'flex justify-center items-center lg:p-[4px] md:p-2 xl:p-0 xl:w-[45px] lg:w-[50px] lg:h-[35px] md:w-[60px] w-[50px] h-[50px] md:h-[60px] xl:h-[45px] bg1'}>
                                   <img className={''} src={phone} alt=""/>
                               </div>
                           </div>
                           <div className={'flex flex-col xl:text-lg md:mb-0 mb-12 lg:text-sm text-xl md:text-2xl'}>
                               <h3 className={'text-bg2 font-semibold'}>Appointment Line</h3>

                               <h3 className={'text-black  font-semibold'}>0900-78601</h3>

                           </div>
                       </a>
                   </div>
                   <div className={'xl:w-[374px] sm:w-[430px] lg:w-[300px] w-[330px] h-[200px] md:w-[374px] sm:h-[170px] xl:h-[125px] md:h-[115px] lg:h-[115px] relative gap-[8px] p-[20px] md:mt-[40px] lg:mt-[60px]  flex justify-start items-start flex-col bg2'}>
                       <div className={'flex flex-row gap-2 cursor-pointer'}>
                           <img className={'xl:w-[41px] w-[65px] h-[65px] lg:w-[30px] md:w-[35px] md:h-[35px] lg:h-[30px] xl:h-[41px]'} src={ornekfoto} alt=""/>
                           <div className={'flex flex-col justify-center'}>
                               <h1 className={'xl:text-[16px] text-[20px] lg:text-[13px] md:text-[13px] leading-4 font2'}>Example Name</h1>
                               <h2 className={'xl:text-[16px] text-[16px] lg:text-[10px] md:text-[10px] leading-6 font4'}>Specialist Dr...</h2>
                           </div>
                       </div>
                       <div className={'font4 lg:text-xs text-lg xl:text-sm md:text-sm'}>
                           Top Quailty dental treatment done by field experts, Highly Recommended for everyone
                       </div>
                       <img className={'top-5 w-[70px] md:w-fit  right-5 absolute'} src={plusone} alt=""/>
                   </div>
               </div>
               <div className={'relative 2xl:m-0   lg:m-0 mt-[50px] mr-16 sm:mt-[50px] md:mt-[50px] md:mr-0 sm:mr-24'}>
                   <img className={'z-20 relative 2xl:w-[550px] xl:w-[450px] lg:w-[300px] md:w-[400px] w-[320px]'} src={dentist} alt=""/>
                   <img src={dishes} className={'absolute z-20 top-6 left-[20px]'} alt=""/>
                   <img className={'rounded-[200px] absolute z-10 top-0 left-[40px] xsd'} src={ellipse} alt=""/>
               </div>
           </div>
            <div className={'flex justify-center items-center '}>
                <div className={'bg3 w-screen rounded-lg flex md:flex-row flex-col px-[35px]  py-[50px] gap-[30px] justify-center items-center md:h-[550px] lg:h-[450px]'}>
                    <div className={'2xl:w-[400px]   xl:w-[330px] lg:w-[250px] md:w-[200px] py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col'}>
                        <img className={'xl:w-[60px] lg:w-[50px]'} src={dish1} alt=""/>
                        <h1 className={'font2 text-black lg:text-xl md:text-2xl text-center text-2xl xl:text-2xl'}>
                            Root Canal Treatment
                        </h1>
                        <h1 className={'font4 text-text2 md:h-[170px] px-4 lg:h-32 2xl:text-lg text-base text-center '}>
                            Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                        </h1>
                        <div onClick={() => {handleRedirect('/services')}} className={'flex cursor-pointer  md:flex-col lg:flex-row gap-[12px] justify-center items-center'}>
                            <h2 className={'text-lg font4 underline'}>Other Services</h2>
                            <img src={rightcircle} alt=""/>
                        </div>
                    </div>
                    <div className={'2xl:w-[400px]  xl:w-[330px] lg:w-[250px] md:w-[200px] py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col'}>
                        <img className={'xl:w-[60px] lg:w-[50px]'} src={dish1} alt=""/>
                        <h1 className={'font2 text-black lg:text-xl md:text-2xl text-2xl text-center xl:text-2xl'}>
                            Tooth Aesthetics
                        </h1>
                        <h1 className={'font4 text-text2 md:h-[170px] px-4 lg:h-32 2xl:text-lg text-base text-center '}>
                            Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.
                        </h1>
                        <div onClick={() => {handleRedirect('/services')}} className={'flex cursor-pointer  md:flex-col lg:flex-row gap-[12px] justify-center items-center'}>
                            <h2 className={'text-lg font4 underline'}>Other Services</h2>
                            <img src={rightcircle} alt=""/>
                        </div>
                    </div>
                    <div className={'2xl:w-[400px]  xl:w-[330px] lg:w-[250px] md:w-[200px] py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col'}>
                        <img className={'xl:w-[60px] lg:w-[50px]'} src={dish2} alt=""/>
                        <h1 className={'font2 text-black lg:text-xl md:text-2xl text-2xl text-center xl:text-2xl'}>
                            Dental Implant
                        </h1>
                        <h1 className={'font4 text-text2 md:h-[170px] px-4 lg:h-32 2xl:text-lg text-base text-center '}>
                            A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.
                        </h1>
                        <div onClick={() => {handleRedirect('/services')}} className={'flex cursor-pointer  md:flex-col lg:flex-row gap-[12px] justify-center items-center'}>
                            <h2 className={'text-lg font4 underline'}>Other Services</h2>
                            <img src={rightcircle} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
            <div className={''}>
                <div className={'flex flex-col md:flex-row justify-center items-center md:items-center lg:items-start xl:gap-[60px] lg:gap-[60px] md:gap-[60px] 2xl:gap-[130px]'}>
                    <div className={'flex flex-col 2xl:w-[800px]  xl:w-[500px] lg:w-[450px] md:w-[350px] sm:w-[350px] w-[330px]'}>
                        <h1 className={' whitespace-pre-wrap 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl md:text-2xl font6 break-words'}>
                            We Welcome New Patients and Can't Wait to Meet You!
                        </h1>
                        <h2 className={'font4 text-[#3C4959] mt-12 text-lg 2xl:text-xl whitespace-pre-wrap break-words'}>
                            We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
                        </h2>
                        <div className={'sm:w-[350px] w-[320px]  h-[55px] overflow-hidden relative mt-[40px] extra1 flex justify-start items-center pl-[20px]'}>
                            <img src={phone2} alt=""/>
                            <h2 className={'text-text3 font4 text-base pl-[10px]'}>
                                <input className={'w-full h-full m-4 border-none outline-none'} placeholder={'Phone Number'} type="text"/>
                            </h2>
                            <div className={'w-24 h-full cursor-pointer hover:bg-bg6 right-0 absolute bg-bg2 flex justify-center items-center'}>
                                <h2 className={'text-lg text-white '}>SEND</h2>
                            </div>
                        </div>
                    </div>
                    <div className={'relative xl:w-[442px] lg:w-[300px] md:w-[250px] md:mt-0 sm:m-0 ml-8 mt-[50px] w-[250px]'}>
                        <img className={'absolute right-12 top-7'} src={photo1} alt=""/>
                        <img src={photo2} alt=""/>
                    </div>
                </div>
            </div>
            <div className={'mt-[120px] flex justify-center items-center'}>
                <div className={'md:w-fit w-full md:h-[500px] lg:h-[600px] bg5 py-[55px] justify-center items-center  flex flex-col md:flex-row md:gap-[25px] lg:gap-[0] '}>
                    <img className={'md:pl-[80px] 2xl:w-full xl:h-auto xl:w-[500px] lg:w-[450px]  md:w-[350px] md:h-[300px] lg:h-[370px] w-[200px]'} src={Rectangle631} alt=""/>
                    <div className={'flex flex-col lg:pl-[50px] md:pl-[10px] lg:mt-4 xl:pl-[88px] w-full h-full justify-center items-center md:items-start 2xl:items-start md:m-0 mt-4'}>
                        <h1 className={'font6 xl:text-4xl lg:text-2xl md:text-2xl text-2xl w-[300px] 2xl:text-5xl xl:w-[600px] md:w-[380px] lg:w-[400px] 2xl:w-[800px]'}>
                            Why Choose Gamadent for All Your Dental Treatments?
                        </h1>
                        <h2 className={'text-text2 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg text-lg w-[300px] mt-[20px] tracking-tighter leading-0 md:leading-9 lg:w-[300px] md:w-[300px] xl:w-[500px] 2xl:w-[650px]'}>
                            We use only the best quality materials on the market in order to provide the best products to our patients.
                        </h2>
                        <div className={'flex flex-col gap-[15px] text-text2 mt-[20px] xl:text-lg sm:text-sm  lg:text-sm text-base 2xl:text-xl'}>
                            <div className={'flex flex-row items-center gap-2'}>
                                <img className={'lg:w-7 xl:w-8'} src={shieldicon} alt=""/>
                                <h3 className={'font2'}>Expert Dental Team</h3>
                            </div>
                            <div className={'flex flex-row items-center gap-2'}>
                                <img className={'lg:w-7 xl:w-8'} src={shieldicon} alt=""/>
                                <h3 className={'font2'}>Latest Dental Technologies</h3>
                            </div>
                            <div className={'flex flex-row items-center gap-2'}>
                                <img className={'lg:w-7 xl:w-8'} src={shieldicon} alt=""/>
                                <h3 className={'font2'}>Competitive Prices for All Our Treatments</h3>
                            </div>
                            <div className={'flex flex-row items-center gap-2'}>
                                <img className={'lg:w-7 xl:w-8'} src={shieldicon} alt=""/>
                                <h3 className={'font2'}>Fast and Easy Intervention</h3>
                            </div>
                            <div className={'bg-bg2 hover:bg-bg6 cursor-pointer lg:w-[200px]  sm:w-[200px] sm:h-[40px] xl:w-[250px] lg:h-[40px] h-[50px] xl:h-[55px] px-[10px] mt-[15px] flex justify-center items-center lg:py-[25px] xl:py-[30px] rounded-xl'}>
                                <a target={"_blank"} href={`https://api.whatsapp.com/send/?phone=9${phonen}&text&type=phone_number&app_absent=0`} className={'text-white font2 lg:text-[14px] xl:text-[16px]'}>Contact Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'mt-[50px] mb-[50px] flex justify-center items-center w-full h-full'}>
                <div className={'flex flex-col md:flex-row justify-center items-start md:gap-[40px] xl:gap-[70px] 2xl:gap-[130px]'}>
                    <div className={'flex flex-col justify-center md:items-start items-center w-full'}>
                        <h1 className={'xl:text-5xl text-4xl 2xl:text-6xl font6 2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:text-left text-center md:w-[400px] w-[330px]   whitespace-pre-wrap 2xl:text-5xl  break-words'}>
                            Leave Your Worries Behind and Enjoy a Healthier, Flawless Smile
                        </h1>
                        <h2 className={'font4 text-[#3C4959] mt-12 md:text-left text-center xl:text-xl lg:text-lg text-sm md:text-base w-[330px] md:w-[350px] xl:w-[500px] lg:w-[400px] 2xl:w-[600px] lea whitespace-pre-wrap break-words'}>
                            We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
                        </h2>
                        <div className={'bg-bg2 lg:w-[200px] cursor-pointer hover:bg-bg6 sm:w-[200px] sm:h-[40px] xl:w-[250px] lg:h-[40px] h-[50px] xl:h-[55px] px-[15px] mt-[25px] flex justify-center items-center lg:py-[25px] xl:py-[30px] rounded-xl'}>
                            <h2 target={"_blank"} href={`https://api.whatsapp.com/send/?phone=9${phonen}&text&type=phone_number&app_absent=0`} className={'text-white font2 text-base whitespace-nowrap px-14 lg:text-[14px] xl:text-[16px]'}>
                                Contact Now
                            </h2>
                        </div>
                    </div>
                    <div className={'relative flex justify-center items-center w-full h-full md:mt-0 mt-[80px]'}>
                        <img className={'absolute md:right-6 right-16 top-7 md:top-6 xl:w-[410px] xl:h-[326px] lg:w-[350px] lg:h-[250px] md:w-[250px] w-[250px]'} src={disfotosu} alt=""/>
                        <img className={'xl:w-[410px] xl:h-[326px] lg:w-[350px] lg:h-[250px] md:w-[250px] w-[250px]'} src={photo2} alt=""/>
                    </div>
                </div>
            </div>
            <div className={'mt-[0px] md:mt-[100px] flex justify-center items-center rounded-[0px]'}>
                <div className={'w-full sm:h-[700px] bg5 rounded-[0px] flex justify-start items-center pt-[60px] flex-col'}>
                   <div className={'flex justify-center items-center flex-col'}>
                       <div className={'flex flex-col justify-center items-center'}>
                           <h2 className={'font1 xl:text-5xl text-4xl 2xl:text-6xl w-[200px] sm:w-fit text-center md:text-5xl lg:text-6xl'}>
                               Meet Our Expert Team
                           </h2>
                           <h2 className={'font4 text-lg xl:text-xl md:text-md w-[330px] md:w-[400px] lg:w-[515px] mt-[50px] text-text2 text-center'}>
                               We use only the best quality materials on the market in order to provide the best products to our patients.                        </h2>

                       </div>
                       <div className={'mt-[80px]'}>
                           <div className={'flex justify-center items-center'}>
                               <div className={'flex flex-row gap-[20px] xl:w-[1100px] lg:w-[900px] md:w-[700px] w-[350px] 2xl:w-[1440px]'}>
                                   <Swiper
                                       spaceBetween={60}
                                       slidesPerView={4}
                                       breakpoints={{
                                           350: {
                                               slidesPerView: 1,
                                           },
                                           1024: {
                                               slidesPerView: 4,
                                           },
                                           768: {
                                               slidesPerView: 2,
                                           }
                                       }}
                                       onSlideChange={() => console.log('slide change')}
                                       onSwiper={(swiper) => console.log(swiper)}
                                   >
                                       <SwiperSlide>
                                           <div className={'relative w-full '}>
                                               <img className={''} src={docphoto1} alt=""/>
                                               <div className={'absolute  flex flex-col bg6  lg:h-[50px] lg:w-[170px] md:h-[80px] md:w-[270px] h-[80px] w-[270px] xl:w-[12rem] 2xl:w-[16rem] pl-5 py-1 xl:h-[4rem] 2xl:h-[5rem] bottom-[16px] left-[16px]'}>
                                                   <h2 className={'2xl:text-2xl xl:text-xl lg:text-lg md:text-xl text-xl text-white'}>Lorem Ipsum</h2>
                                                   <h2 className={'2xl:text-xl xl:text-lg lg:text-sm md:text-lg text-lg -mt-1 text-white'}>Orthodontist.</h2>
                                               </div>
                                           </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                           <div className={'relative w-full '}>
                                               <img className={''} src={docphoto1} alt=""/>
                                               <div className={'absolute  flex flex-col bg6  lg:h-[50px] lg:w-[170px] md:h-[80px] md:w-[270px] h-[80px] w-[270px] xl:w-[12rem] 2xl:w-[16rem] pl-5 py-1 xl:h-[4rem] 2xl:h-[5rem] bottom-[16px] left-[16px]'}>
                                                   <h2 className={'2xl:text-2xl xl:text-xl lg:text-lg md:text-xl text-xl text-white'}>Lorem Ipsum</h2>
                                                   <h2 className={'2xl:text-xl xl:text-lg lg:text-sm md:text-lg text-lg -mt-1 text-white'}>Orthodontist.</h2>
                                               </div>
                                           </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                           <div className={'relative w-full '}>
                                               <img className={''} src={docphoto1} alt=""/>
                                               <div className={'absolute  flex flex-col bg6  lg:h-[50px] lg:w-[170px] md:h-[80px] md:w-[270px] h-[80px] w-[270px] xl:w-[12rem] 2xl:w-[16rem] pl-5 py-1 xl:h-[4rem] 2xl:h-[5rem] bottom-[16px] left-[16px]'}>
                                                   <h2 className={'2xl:text-2xl xl:text-xl lg:text-lg md:text-xl text-xl text-white'}>Lorem Ipsum</h2>
                                                   <h2 className={'2xl:text-xl xl:text-lg lg:text-sm md:text-lg text-lg -mt-1 text-white'}>Orthodontist.</h2>
                                               </div>
                                           </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                           <div className={'relative w-full '}>
                                               <img className={''} src={docphoto1} alt=""/>
                                               <div className={'absolute  flex flex-col bg6  lg:h-[50px] lg:w-[170px] md:h-[80px] md:w-[270px] h-[80px] w-[270px] xl:w-[12rem] 2xl:w-[16rem] pl-5 py-1 xl:h-[4rem] 2xl:h-[5rem] bottom-[16px] left-[16px]'}>
                                                   <h2 className={'2xl:text-2xl xl:text-xl lg:text-lg md:text-xl text-xl text-white'}>Lorem Ipsum</h2>
                                                   <h2 className={'2xl:text-xl xl:text-lg lg:text-sm md:text-lg text-lg -mt-1 text-white'}>Orthodontist.</h2>
                                               </div>
                                           </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                           <div className={'relative w-full '}>
                                               <img className={''} src={docphoto1} alt=""/>
                                               <div className={'absolute  flex flex-col bg6  lg:h-[50px] lg:w-[170px] md:h-[80px] md:w-[270px] h-[80px] w-[270px] xl:w-[12rem] 2xl:w-[16rem] pl-5 py-1 xl:h-[4rem] 2xl:h-[5rem] bottom-[16px] left-[16px]'}>
                                                   <h2 className={'2xl:text-2xl xl:text-xl lg:text-lg md:text-xl text-xl text-white'}>Lorem Ipsum</h2>
                                                   <h2 className={'2xl:text-xl xl:text-lg lg:text-sm md:text-lg text-lg -mt-1 text-white'}>Orthodontist.</h2>
                                               </div>
                                           </div>
                                       </SwiperSlide>

                                   </Swiper>
                               </div>
                           </div>
                       </div>
                   </div>

                </div>
            </div>
            <div className={' flex justify-center items-center'}>
                <div className={'w-full h-[700px]   flex justify-start items-center pt-[20px] flex-col'}>
                    <div className={'flex justify-center items-center flex-col'}>
                        <div className={'flex flex-col justify-center items-center'}>
                            <h2 className={'font1 xl:text-5xl text-4xl 2xl:text-6xl  sm:w-fit text-center md:text-5xl lg:text-6xl'}>
                                Our Happy Clients
                            </h2>
                            <h2 className={'font4 text-lg xl:text-xl md:text-md w-[330px] md:w-[400px] lg:w-[515px] mt-[50px] text-text2 text-center'}>
                                We use only the best quality materials on the market in order to provide the best products to our patients.                        </h2>

                        </div>
                        <div className={'mt-[60px]'}>
                            <div className={'flex justify-center items-center w-full'}>
                                <div className={'flex flex-row xl:w-[1200px] 2xl:w-[1540px] md:w-[700px] lg:w-[1000px] w-[350px]'}>
                                    <Swiper
                                        spaceBetween={0}
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
                                            <div className={'relative cursor-pointer m-7 pt-[25px] px-[30px] 2xl:w-[430px] xl:w-[350px] flex justify-start items-start flex-col h-fit bg7'}>
                                               <div className={'flex flex-row items-center'}>
                                                   <img src={profilfoto1} alt=""/>
                                                   <div className={'flex pl-3 gap-2 flex-col justify-start '}>
                                                       <h2 className={'text-2xl font2'}>Thomas Daniel</h2>
                                                       <img className={'w-24'} src={stars} alt=""/>
                                                   </div>
                                               </div>
                                                <h3 className={'text-xl font4 text-text2 pt-[19px] pb-[30px]'}>
                                                    Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={'relative cursor-pointer m-7 pt-[25px] px-[30px] 2xl:w-[430px] xl:w-[350px] flex justify-start items-start flex-col h-fit bg7'}>
                                                <div className={'flex flex-row items-center'}>
                                                    <img src={profilfoto2} alt=""/>
                                                    <div className={'flex pl-3 gap-2 flex-col justify-start '}>
                                                        <h2 className={'text-2xl font2'}>Alena Alex</h2>
                                                        <img className={'w-24'} src={stars} alt=""/>
                                                    </div>
                                                </div>
                                                <h3 className={'text-xl font4 text-text2 pt-[19px] pb-[30px]'}>
                                                    Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={'relative cursor-pointer m-7 pt-[25px] px-[30px] 2xl:w-[430px] xl:w-[350px] flex justify-start items-start flex-col h-fit bg7'}>
                                                <div className={'flex flex-row items-center'}>
                                                    <img src={profilfoto3} alt=""/>
                                                    <div className={'flex pl-3 gap-2 flex-col justify-start '}>
                                                        <h2 className={'text-2xl font2'}>Thomas Edison</h2>
                                                        <img className={'w-24'} src={stars} alt=""/>
                                                    </div>
                                                </div>
                                                <h3 className={'text-xl font4 text-text2 pt-[19px] pb-[30px]'}>
                                                    Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={'relative cursor-pointer m-7 pt-[25px] px-[30px] 2xl:w-[430px] xl:w-[350px] flex justify-start items-start flex-col h-fit bg7'}>
                                                <div className={'flex flex-row items-center'}>
                                                    <img src={profilfoto4} alt=""/>
                                                    <div className={'flex pl-3 gap-2 flex-col justify-start '}>
                                                        <h2 className={'text-2xl font2'}>Jack Smith</h2>
                                                        <img className={'w-24'} src={stars} alt=""/>
                                                    </div>
                                                </div>
                                                <h3 className={'text-xl font4 text-text2 pt-[19px] pb-[30px]'}>
                                                    Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className={'mt-[140px] w-full h-full justify-center items-center'}>
                            <div className={'flex flex-col sm:w-fit w-[330px] items-center md:items-start xl:ml-16 lg:ml-12 md:ml-24 2xl:ml-24 justify-center'}>
                                <h2 className={'font1 xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl  2xl:text-6xl'}>
                                    News & Articles
                                </h2>
                                <h2 className={'font4 xl:text-lg text-md text-lg 2xl:text-xl w-[250px] sm:text-start text-center md:w-[515px] mt-[20px] text-text2 '}>
                                    We use only the best quality materials on the market in order to provide the best products to our patients.                        </h2>
                            </div>

                            <div className={'flex flex-col mt-[71px] justify-center items-center  gap-[60px]'}>
                                <div className={'grid xl:grid-cols-3 lg:w-[850px] sm:w-[600px] w-[330px] xl:w-fit grid-cols-1 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 gap-[50px]'}>
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative '}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles1} alt=""/>
                                        </div>
                                        <div className={'bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md'}>
                                            <h2 className={'text-white font4 text-base'}>Kategori 1</h2>
                                        </div>
                                        <h2 className={'text-xl font2 mt-[14px]'}>
                                            Care of your Teeth
                                        </h2>
                                        <h3 className={'text-text2 mt-[10px] text-lg xl:text-xl w-[250px]'}>
                                            Lorem ipsum dolor sit amet consectetur.
                                        </h3>
                                        <h4 className={'absolute text-lg right-4 bottom-3'}>~Yazar Adı Soyadı</h4>
                                    </div>
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles2} alt=""/>
                                        </div>
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
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles3} alt=""/>
                                        </div>
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
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles4} alt=""/>
                                        </div>
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
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles5} alt=""/>
                                        </div>
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
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles6} alt=""/>
                                        </div>
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
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles7} alt=""/>
                                        </div>
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
                                    <div className={'bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative'}>
                                        <div className={'w-full h-fit flex justify-center items-center'}>
                                            <img className={'xl:w-[265px]'} src={articles8} alt=""/>
                                        </div>
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

                                <div className={'w-full h-full flex justify-center items-center'}>
                                    <div onClick={() => {handleRedirect('/blogs')}} className={'cursor-pointer hover:bg-bg6 bg-bg2 mt-[17px] w-fit h-[35px] px-[30px] py-[30px] flex justify-center items-center rounded-md'}>
                                        <h2 className={'text-white font2 text-base'}>Check out more</h2>
                                    </div>
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
                        <div className={'mt-[90px]'}>
                            <div className={'lg:w-[900px] md:w-[700px] w-[350px] xl:w-[1064px] h-fit pb-10 md:h-[392px] bg-[#374857] rounded-[30px]  xl:gap-[50px] flex justify-center items-center flex-col md:flex-row'}>
                                <div className={'break-words flex flex-col 2xl:text-4xl xl:text-3xl md:text-2xl text-xl p-8 lg:text-4xl'}>
                                    <h2 className={'font1 md:w-[300px] lg:w-[500px]  flex flex-col text-white'}>
                                        With Gamadent, we're rewriting the rules of the game!
                                    </h2>
                                    <h3 className={'font3 text-xl mt-[20px] text-white md:w-[300px] lg:w-[500px] !break-words'}>
                                        We use only the best quality materials on the market in order to provide the best products to our patients.                                    </h3>
                                        <div onClick={() => {handleRedirect('/contact')}} className={'bg-bg2 hover:bg-bg7 cursor-pointer w-[200px] h-[50px] mt-[20px] md:mt-[40px] px-[0px] flex justify-center items-center py-[20px] rounded-lg'}>
                                            <h2 className={'text-white font2 w-fit text-[16px]'}>Contact Information</h2>
                                        </div>
                                </div>
                                <div className={'flex flex-col items-center justify-center'}></div>
                                <img src={oyununkaderi} alt=""/>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anasayfa;