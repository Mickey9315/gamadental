import React, {useEffect, useState} from 'react';
import gamadent from "../img/gamadent.svg";
import {NavLink, useNavigate} from "react-router-dom";
import calling from "../img/Calling.svg";
import gamadent2 from "../img/gamadent.svg";
import menubars from '../img/menufex.svg'

const NavBar = (props) => {
    const { smenu, setsmenu } = props;
    const [screenW,setScreenW] = useState(window.innerWidth < 768)
    const navigate = useNavigate()
    const handleResize = () => {
        setScreenW(window.innerWidth < 1920);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); //

    console.log(screenW)
    return (

        <div>
            {smenu ? (
                        <div onClick={() => {setsmenu(!smenu)}}  className={'mt-[40px] select-none md:hidden sm:w-[640px] pb-[50px] w-[330px] lg:w-[800px] md:w-[768px] xl:w-[1050px] flex-col 2xl:w-[1240px] rounded-[10px] flex justify-start items-start md:px-[25px] lg:px-[25px] transition-all duration-500 sm:px-[20px] px-[30px] xl:px-[0px] h-fit bg-bg1'}>
                            <div className={'md:flex hidden justify-center items-center flex-row  lg:gap-[60px] md:gap-[40px] xl:gap-[90px]'}>
                                <img className={'xl:w-[176px] lg:w-[120px] md:w-[130px] cursor-pointer'} src={gamadent} alt=""/>
                                <div onClick={() => {setsmenu(false)}} className={'flex  lg:gap-[20px] md:gap-[20px] xl:gap-[30px] 2xl:gap-[60px] md:text-[10px] lg:text-[12px] xl:text-[16px] flex-row asd pr-12'}>
                                    <NavLink to={'/'} className={' font2 cursor-pointer'}>Anasayfa</NavLink>
                                    <NavLink to={'/services'} className={'text-darktext1 font2 cursor-pointer'}>Hizmetler</NavLink>
                                    <NavLink to={'/blogs'} className={'text-darktext1 font2 cursor-pointer'}>Blogs</NavLink>
                                    <NavLink to={'/about'} className={'text-darktext1 font2 cursor-pointer'}>Hakkımda</NavLink>
                                    <NavLink to={'/contact'} className={'text-darktext1 font2 cursor-pointer'}>İletişim</NavLink>
                                </div>
                            </div>
                            <div className={' md:flex hidden 2xl:w-[204px] lg:w-[150px] md:w-[160px] md:h-[40px] xl:w-[200px] lg:h-[40px] bg4 xl:h-[55px] cursor-pointer xl:gap-[10px] lg:gap-[5px] 2xl:gap-[16px] justify-center items-center bg-bg2 rounded-xl'}>
                                <img className={'xl:w-[24px] lg:w-[16px]'} src={calling} alt=""/>
                                <h2 className={'font2 xl:text-base lg:text-sm 2xl:text-lg flex justify-center items-center tracking-wider text-white'}>
                                    İletişime Geç
                                </h2>
                            </div>
                            <div className={'flex md:hidden flex-col justify-center items-center mt-12 w-full'}>
                                <img  className={'xl:w-[176px] md:w-[500px] lg:w-[120px] w-[220px] cursor-pointer'} src={gamadent} alt=""/>
                        {/*        <img src={menubars} className={'w-[32px]'} alt=""/>*/}
                            </div>
                            <div  className={'w-full h-full md:hidden flex justify-start items-center flex-col mt-[40px]'}>
                                <ul className={'flex xasd flex-col gap-[50px] text-2xl font2 text-text2'}>
                                    <NavLink onClick={() => {
                                        setsmenu(false)
                                    }} to={'/'} className={' font2 cursor-pointer'}>Homepage</NavLink>
                                    <NavLink onClick={() => {
                                        setsmenu(false)
                                    }} to={'/services'} className={'text-darktext1 font2 cursor-pointer'}>Services</NavLink>
                                    <NavLink onClick={() => {
                                        setsmenu(false)
                                    }} to={'/blogs'} className={'text-darktext1 font2 cursor-pointer'}>Blogs</NavLink>
                                    <NavLink onClick={() => {
                                        setsmenu(false)
                                    }} to={'/about'} className={'text-darktext1 font2 cursor-pointer'}>About</NavLink>
                                    <NavLink onClick={() => {
                                        setsmenu(false)
                                    }} to={'/contact'} className={'text-darktext1 font2 cursor-pointer'}>Contact</NavLink>
                                </ul>
                            </div>
                        </div>
                ) :
                <div onClick={screenW ? () => {setsmenu(!smenu)} : () => {console.log()}} className={`${screenW ? 'cursor-pointer' : ''} mt-[40px] sm:w-[640px] w-[330px] lg:w-[800px] md:w-[768px] xl:w-[1050px] 2xl:w-[1240px] rounded-[10px] flex justify-center items-center md:px-[25px] lg:px-[25px] transition-all duration-500 sm:px-[20px] px-[30px] xl:px-[0px] h-[91px] bg-bg1`}>
                    <div className={'md:flex hidden justify-center items-center flex-row  lg:gap-[60px] md:gap-[50px] xl:gap-[70px]'}>
                        <img onClick={() => {navigate('/')}} className={'xl:w-[176px] lg:w-[120px] md:w-[130px] cursor-pointer'} src={gamadent} alt=""/>
                        <div className={'flex lg:gap-[20px] md:gap-[20px] xl:gap-[30px] 2xl:gap-[60px] md:text-[14px] lg:text-[14px] xl:text-[16px] flex-row asd pr-12'}>
                            <NavLink onClick={() => {setsmenu(false)}} to={'/'} className={' font2 cursor-pointer'}>Homepage</NavLink>
                            <NavLink onClick={() => {setsmenu(false)}}  to={'/services'} className={'text-darktext1 font2 cursor-pointer'}>Services</NavLink>
                            <NavLink onClick={() => {setsmenu(false)}} to={'/blogs'} className={'text-darktext1 font2 cursor-pointer'}>Blogs</NavLink>
                            <NavLink onClick={() => {setsmenu(false)}} to={'/about'} className={'text-darktext1 font2 cursor-pointer'}>About</NavLink>
                            <NavLink onClick={() => {setsmenu(false)}} to={'/contact'} className={'text-darktext1 font2 cursor-pointer'}>Contact</NavLink>
                        </div>
                    </div>
                    <div className={' md:flex hidden 2xl:w-[204px] xl:ml-4 lg:w-[150px] md:w-[160px] md:h-[40px] xl:w-[200px] lg:h-[40px] hover:bg-bg6 bg4 xl:h-[55px] cursor-pointer xl:gap-[10px] lg:gap-[5px] 2xl:gap-[16px] justify-center items-center bg-bg2 rounded-xl'}>
                        <img className={'xl:w-[24px] lg:w-[16px]'} src={calling} alt=""/>
                        <h2 className={'font2 xl:text-base lg:text-sm 2xl:text-lg flex justify-center items-center tracking-wider text-white'}>
                            Contact Now
                        </h2>
                    </div>
                    <div className={'flex md:hidden justify-between sm:px-[50px] items-center w-full h-full gap-4'}>
                        <img className={'xl:w-[176px] lg:w-[120px] md:w-[130px] cursor-pointer'} src={gamadent} alt=""/>
                        <img src={menubars} className={'w-[32px]'} alt=""/>

                        <div className={'hidden flex 2xl:w-[204px] lg:w-[150px] md:w-[160px] md:h-[40px] xl:w-[200px] lg:h-[40px] bg4 xl:h-[55px] cursor-pointer xl:gap-[10px] lg:gap-[5px] 2xl:gap-[16px] justify-center items-center bg-bg2 rounded-xl'}>
                            <img className={'xl:w-[24px] lg:w-[16px]'} src={calling} alt=""/>
                            <h2 className={'font2 xl:text-base lg:text-sm 2xl:text-lg flex justify-center items-center tracking-wider text-white'}>
                                İletişime Geç
                            </h2>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default NavBar;