import React from 'react';
import articles1 from "../img/anasayfa/articles/articles1.png";
import {Swiper, SwiperSlide} from "swiper/react";
import docphoto1 from "../img/anasayfa/doctors/Group 1000001017.png";
import docphoto2 from "../img/anasayfa/doctors/Group 1000001018.png";
import docphoto3 from "../img/anasayfa/doctors/Group 1000001019.png";
import docphoto4 from "../img/anasayfa/doctors/Group 1000001020.png";
import docphoto5 from "../img/anasayfa/doctors/Mask group.png";

import aboutdoc1 from '../img/hakkimda/doct1.png'

import uzmanlar1 from '../img/hakkimda/uzmanlar1.png'
import uzmanlar2 from '../img/hakkimda/uzmanlar2.png'
import uzmanlar3 from '../img/hakkimda/uzmanlar3.png'

import teknelojifoto from '../img/hakkimda/teknelojifoto.png'
import dish1 from "../img/anasayfa/dish1.png";
import rightcircle from "../img/anasayfa/Arrow - Right Circle.png";
import disestetigi from "../img/anasayfa/disestetigi.png";
import dishimplant from "../img/anasayfa/dishasd.png";
import oynatdeneme from "../img/blogs/oynatdeneme.png";
import Footer from "./Footer";
import VideoFile from "./VideoFile";

import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleRedirect = (item) => {

        navigate(`${item}`);


        window.scrollTo(0, 0);
    };
    return (
        <div className={'mt-[140px] flex justify-center items-center'}>
            <div className={'w-[1440px] h-full'}>
                <div className={'flex justify-center items-center'}>
                    <h2 className={'font1 text-5xl sm:text-6xl'}>About Us</h2>
                </div>
                <div className={'mt-[70px] w-full flex justify-center items-center md:flex-col flex-col lg:flex-row 2xl:flex-row gap-[80px]'}>
                    <div className={'flex flex-col '}>
                        <div className={'mt-[15px] w-fit text-3xl sm:text-4xl font1'}>Our Mission</div>
                        <h2 className={'text-lg  2xl:w-[800px] xl:w-[500px] lg:w-[500px] md:w-[700px] sm:w-[500px] w-[310px] mt-[20px] text-text2 font10'}>
                            Lorem ipsum dolor sit amet consectetur. Vel aliquam velit nisi posuere etiam porttitor nulla. Enim amet facilisis facilisis ornare odio. Consectetur lectus purus sem sit quis. Habitant mauris interdum tellus massa dictum nunc. Volutpat blandit neque pharetra sagittis urna convallis eget. Elementum commodo nisl quam diam. Diam mi sagittis faucibus mollis nulla sit pretium nunc lectus. Porttitor interdum aliquam egestas interdum nascetur praesent.
                        </h2>
                        <h2 className={'text-2xl  2xl:w-[800px] xl:w-[500px] lg:w-[500px]  md:w-[700px] sm:w-[500px] w-[320px] mt-[32px] font8'}>
                            More than anything else, we love creating happy, healthy smiles.
                        </h2>
                        <h2 className={'text-lg  2xl:w-[800px] xl:w-[500px] lg:w-[500px]  md:w-[700px] sm:w-[500px] w-[310px] mt-[44px] text-text2 font10'}>
                            Lorem ipsum dolor sit amet consectetur. Eleifend purus a sed pretium id non. Tellus luctus amet volutpat in. Turpis facilisi purus tincidunt turpis nunc egestas. Consectetur sed eu fames facilisis vestibulum risus egestas. Sed duis eget blandit commodo dictumst aliquet. Quam euismod donec viverra odio eget risus diam commodo nibh. Vitae hendrerit augue tristique viverra dui amet malesuada. Elementum cursus mi et luctus a faucibus venenatis ac non. Eu tortor sollicitudin orci parturient sit cursus nunc at. Velit rhoncus felis lectus tortor.

                        </h2>
                    </div>
                    <img className={'xl:w-[453px] md:w-[300px] w-[300px]'} src={aboutdoc1} alt=""/>
                </div>
                <div className={'mt-[120px] flex flex-col justify-center items-center'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <h2 className={'font1 text-3xl sm:text-4xl w-[330px] lg:text-4xl xl:text-5xl md:text-5xl md:w-[500px] lg:w-fit text-center'}>
                            Get to Know Our Experts Closer
                        </h2>
                        <h2 className={'font4 text-lg md:text-xl w-[310px] sm:w-[400px] md:w-[515px] mt-[40px] text-text2 text-center'}>
                            We use only the best quality materials on the market in order to provide the best products to our patients.
                        </h2>

                    </div>
                    <div className={'mt-[120px] gap-[70px] flex flex-col justify-center items-center'}>
                        <div className={'flex md:flex-col flex-col justify-center items-center lg:flex-row gap-[30px]'} >
                            <img className={'md:w-[600px] lg:w-[306px]'} src={uzmanlar1} alt=""/>
                            <div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start'}>
                                <div className={'flex sm:flex-row flex-col gap-[16px] items-center'}>
                                    <h2 className={'font6 !2xl:text-xl text-2xl md:text-4xl'}>Prof.Dr. Name Surname</h2>
                                    <h3 className={'font4 2xl:text-sm text-base md:text-2xl'}>(General & Cosmetic Service Specialization)</h3>
                                </div>
                                <div className={'font11 2xl:text-[18px] md:text-[20px] mt-4 lg:w-[600px] sm:w-[500px] w-[330px] md:w-[650px] xl:w-[757px] text-text2'}>
                                    Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.
                                </div>
                                <div onClick={() => {handleRedirect('/contact')}} className={'hover:bg-bg6 bg-bg2 w-fit mt-[35px] h-[35px] sm:p-[40px] p-[25px] lg:p-[25px] flex justify-center items-center rounded-md cursor-pointer cursor-pointer'}>
                                    <h2 className={'text-white font9 sm:text-3xl lg:text-lg'}>Make an Appointment</h2>
                                </div>
                            </div>
                        </div>
                        <hr className={'w-full'}/>
                        <div className={'flex md:flex-col flex-col justify-center items-center lg:flex-row gap-[30px]'} >
                            <img className={'md:w-[600px] lg:w-[306px]'} src={uzmanlar2} alt=""/>
                            <div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start'}>
                                <div className={'flex sm:flex-row flex-col gap-[16px] items-center'}>
                                    <h2 className={'font6 !2xl:text-xl text-2xl md:text-4xl'}>Prof.Dr. Name Surname</h2>
                                    <h3 className={'font4 2xl:text-sm text-base md:text-2xl'}>(Specialization in implant dentistry)</h3>
                                </div>
                                <div className={'font11 2xl:text-[18px] md:text-[20px] mt-4 lg:w-[600px] sm:w-[500px] w-[330px] md:w-[650px] xl:w-[757px] text-text2'}>
                                    Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.
                                </div>
                                <div onClick={() => {handleRedirect('/contact')}} className={'bg-bg2 hover:bg-bg6 w-fit mt-[35px] h-[35px] sm:p-[40px] p-[25px] lg:p-[25px] flex justify-center items-center rounded-md cursor-pointer cursor-pointer'}>
                                    <h2 className={'text-white font9 sm:text-3xl lg:text-lg'}>Make an Appointment</h2>
                                </div>
                            </div>
                        </div>
                        <hr className={'w-full'}/>
                        <div className={'flex md:flex-col flex-col justify-center items-center lg:flex-row gap-[30px]'} >
                            <img className={'md:w-[600px] lg:w-[306px]'} src={uzmanlar3} alt=""/>
                            <div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start'}>
                                <div className={'flex sm:flex-row flex-col gap-[16px] items-center'}>
                                    <h2 className={'font6 !2xl:text-xl text-2xl md:text-4xl'}>Prof.Dr. Name Surname</h2>
                                    <h3 className={'font4 2xl:text-sm text-base md:text-2xl'}>(Specialization in Implant Dentistry)</h3>
                                </div>
                                <div className={'font11 2xl:text-[18px] md:text-[20px] mt-4 lg:w-[600px] sm:w-[500px] w-[330px] md:w-[650px] xl:w-[757px] text-text2'}>
                                    Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.
                                </div>
                                <div onClick={() => {handleRedirect('/contact')}} className={'bg-bg2 hover:bg-bg6 w-fit mt-[35px] h-[35px] sm:p-[40px] p-[25px] lg:p-[25px] flex justify-center items-center rounded-md cursor-pointer cursor-pointer'}>
                                    <h2 className={'text-white font9 sm:text-3xl lg:text-lg'}>Make an Appointment</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'mt-[120px] flex flex-col justify-center items-center'}>
                        <div className={'flex flex-col justify-center items-center'}>
                            <h2 className={'font1 lg:text-4xl xl:text-5xl text-center sm:w-fit w-[300px] text-3xl sm:text-4xl'}>
                                We Follow Technology Closely
                            </h2>
                            <h2 className={'font4 text-lg md:text-xl w-[310px] sm:w-[400px] md:w-[515px] mt-[40px] text-text2 text-center'}>
                                We use only the best quality materials on the market in order to provide the best products to our patients.
                            </h2>

                        </div>
                        <div className={'mt-[100px] w-full flex justify-center items-center flex-col lg:flex-row gap-[20px]'}>
                            <img className={'w-[310px] md:w-full'} src={teknelojifoto} alt=""/>
                            <div className={'flex flex-col justify-start items-center'}>
                                <div className={'sm:w-fit w-[310px] text-center  text-xl font2'}>The Future of Dentistry is Digital:</div>
                                <h2 className={'text-lg lg:w-[450px] w-[320px] sm:w-[500px] xl:w-[650px] flex flex-col gap-[25px] mt-[15px]  text-text2 font10 text'}>
                                    Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients.
                                    <h2>
                                        In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace.
                                    </h2>
                                    <h2>
                                        Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth
                                    </h2>
                                </h2>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={'mt-[120px]'}>
                    <div className={'flex justify-center items-center '}>
                        <div className={'bg-text2 w-fit px-[5vw] rounded-lg flex md:flex-row flex-col   py-[50px] gap-[30px] justify-center items-center md:h-[550px] lg:h-[450px]'}>
                            <div className={'2xl:w-[400px]  xl:w-[330px] lg:w-[250px] md:w-[200px] py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col'}>
                                <img className={'xl:w-[60px] lg:w-[50px]'} src={dish1} alt=""/>
                                <h1 className={'font2 text-black lg:text-xl md:text-2xl text-center text-2xl xl:text-2xl'}>
                                    Root Canal Treatment
                                </h1>
                                <h1 className={'font4 text-text2 px-4 md:h-[170px] lg:h-32 2xl:text-lg text-base text-center '}>
                                    Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                                </h1>
                                <div onClick={() => {handleRedirect('/services')}} className={'flex cursor-pointer  md:flex-col lg:flex-row gap-[12px] justify-center items-center'}>
                                    <h2 className={'text-lg font4 underline'}>Diğer Hizmetler</h2>
                                    <img src={rightcircle} alt=""/>
                                </div>
                            </div>
                            <div className={'2xl:w-[400px]  xl:w-[330px] lg:w-[250px] md:w-[200px] py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col'}>
                                <img className={'xl:w-[60px] lg:w-[50px]'} src={dish1} alt=""/>
                                <h1 className={'font2 text-black lg:text-xl md:text-2xl text-2xl text-center xl:text-2xl'}>
                                    Root Canal Treatment
                                </h1>
                                <h1 className={'font4 text-text2 px-4 md:h-[170px] lg:h-32 2xl:text-lg text-base text-center '}>
                                    Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                                </h1>
                                <div onClick={() => {handleRedirect('/services')}} className={'flex cursor-pointer  md:flex-col lg:flex-row gap-[12px] justify-center items-center'}>
                                    <h2 className={'text-lg font4 underline'}>Diğer Hizmetler</h2>
                                    <img src={rightcircle} alt=""/>
                                </div>
                            </div>
                            <div className={'2xl:w-[400px] xl:w-[330px] lg:w-[250px] md:w-[200px] py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col'}>
                                <img className={'xl:w-[60px] lg:w-[50px]'} src={dish1} alt=""/>
                                <h1 className={'font2 text-black lg:text-xl md:text-2xl text-2xl text-center xl:text-2xl'}>
                                    Root Canal Treatment
                                </h1>
                                <h1 className={'font4 text-text2 px-4 md:h-[170px] lg:h-32 2xl:text-lg text-base text-center '}>
                                    Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.
                                </h1>
                                <div onClick={() => {handleRedirect('/services')}} className={'flex cursor-pointer  md:flex-col lg:flex-row gap-[12px] justify-center items-center'}>
                                    <h2 className={'text-lg font4 underline'}>Diğer Hizmetler</h2>
                                    <img src={rightcircle} alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'mt-[120px]'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <h2 className={'font1 text-3xl sm:text-5xl w-[350px] sm:w-[500px] text-center'}>
                            To Meet You We can't wait
                        </h2>
                        <h2 className={'font4 text-lg md:text-xl w-[310px] sm:w-[400px] md:w-[515px] mt-[40px] text-text2 text-center'}>
                            We use only the best quality materials on the market in order to provide the best products to our patients.
                        </h2>
                        <div className={'mt-[30px] sm:w-[500px] w-[320px]'}>
                            {/*<img src={oynatdeneme} alt=""/>*/}
                            <VideoFile/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </div>
    );
};

export default About;