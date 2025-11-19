import { Outlet } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

import { Helmet } from "react-helmet";

const footerlink = (text) => {
    return (
        <>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 pb-1">{text}</p>
        </>
    )
}


const Layout = () => {

    const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const [showBurger, setShowburger] = useState(false);


    const themeswitcher = () => {
        setTheme(!theme);
        localStorage.setItem('Theme', theme);
    }

    const burgerToggle = () => {
        setShowburger(!showBurger);
    }

    return (
        <>
            <Helmet>
                <meta name="theme-color" content={`${theme ? '#27272a' : '#f4f4f5'}`}></meta>
            </Helmet>
            <div className={`${theme ? 'dark' : ''} min-h-screen`} >
                <nav className="fixed w-full">
                    <div className="p-2 pb-3 flex justify-between dark:text-white bg-zinc-200/30 dark:bg-zinc-900/30 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-500">
                        <div>
                            <p className="font-extrabold text-3xl mt-1">InvestPro</p>
                        </div>

                        <div className="hidden md:block ">
                            <div className="mt-3 flex justify-around space-x-5">
                                <Link to={"/"}>
                                    <div className="hover:text-zinc-500 dark:hover:text-zinc-400">Home</div>
                                </Link>
                                <Link to={"/investment"}>
                                    <div className="hover:text-zinc-500 dark:hover:text-zinc-400">Investments</div>
                                </Link>
                                <Link to={"/research"}>
                                    <div className="hover:text-zinc-500 dark:hover:text-zinc-400">Research</div>
                                </Link>
                                <Link to={"/dashboard"}>
                                    <div className="hover:text-zinc-500 dark:hover:text-zinc-400">dashboard</div>
                                </Link>
                                <Link to={"/portfolio"}>
                                    <div className="hover:text-zinc-500 dark:hover:text-zinc-400">portfolio</div>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ms-auto space-x-3 flex">
                                <Link to={"/login"}>
                                    <div className="mt-3 hover:text-zinc-500 dark:hover:text-zinc-400" >Sign in</div>
                                </Link>
                                <Link to={"/register"}>
                                    <div className="mt-2 py-1 px-3 rounded-xl bg-zinc-800 text-white text-nowrap hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">Get started</div>
                                </Link>
                                <button className="mt-2 p-1 px-2 dark:text-zinc-200 rounded-2xl hover:text-zinc-400 dark:hover:text-zinc-400" onClick={() => { themeswitcher() }}>{theme ? <IoSunnyOutline /> : <IoMoonOutline />}</button>
                            </div>
                        </div>

                        <div className="block md:hidden text-2xl mt-2" onClick={() => burgerToggle()}>
                            <RxHamburgerMenu />
                        </div>
                    </div>

                    <div className={`${showBurger ? '' : 'hidden'} md:hidden text-center px-5 space-y-3 py-3 z-50 dark:text-white bg-zinc-100/30 dark:bg-zinc-800/30 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-500`}>
                        <div className="hover:text-zinc-500 dark:hover:text-zinc-400">
                            <Link>Home</Link>
                        </div>
                        <div className="hover:text-zinc-500 dark:hover:text-zinc-400">
                            <Link to={"/investment"}>Investments</Link>
                        </div>
                        <div className="pb-3 border-b border-zinc-200 dark:border-zinc-500 hover:text-zinc-500 dark:hover:text-zinc-400">
                            <Link>Research</Link>
                        </div>

                        <div className="border-b border-zinc-200 dark:border-zinc-500 pb-3">
                            <Link to={"/dashboard"}>
                                <div className="hover:text-zinc-500 dark:hover:text-zinc-400">dashboard</div>
                            </Link>
                            <Link to={"/portfolio"}>
                                <div className="hover:text-zinc-500 dark:hover:text-zinc-400">portfolio</div>
                            </Link>
                        </div>

                        <div>
                            <button className="mt-2 p-1 px-2 dark:text-zinc-200 rounded-2xl hover:text-zinc-400 dark:hover:text-zinc-400 text-nowrap" onClick={() => { themeswitcher() }}>{theme ? <IoSunnyOutline /> : <IoMoonOutline />}</button>
                        </div>

                        <div>
                            <Link to={"/login"}>
                                <div className="hover:text-zinc-500 dark:hover:text-zinc-400" >Sign in</div>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link to={"/register"}>
                                <div className="py-1 px-3 rounded-xl bg-zinc-800 text-white text-nowrap hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 w-40">Get started</div>
                            </Link>
                        </div>
                    </div>

                </nav>

                <div className="min-h-screen dark:bg-zinc-800 dark:text-white bg-zinc-100 pt-20">
                    <Outlet></Outlet>
                </div>

                <footer className="border-t border-zinc-400 dark:border-zinc-500" >
                    <div className="p-2 py-10 pb-5 flex justify-between dark:text-white bg-zinc-100 dark:bg-zinc-800 z-100">
                        <div className="xl:mx-40 grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <p className="text-zinc-900 dark:text-zinc-100 text-2xl">Stay Updated</p>
                                <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-3">Get the latest market insights, investment tips, and platform updates delevered to your inbox</div>
                            </div>
                            <div className="flex">
                                <div className="sm:col-span-4">
                                    <div className="mt-2">
                                        <input id="email" type="email" name="email" placeholder="Enter your email adress..." autoComplete="email" className="block w-full sm:65 rounded-lg bg-zinc-200 dark:bg-zinc-900 px-3 p-1 text-base focus:outline-2 focus:-outline-offset-1 focus:outline-zinc-300 dark:focus:outline-zinc-600 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 sm:text-sm/6" />
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <Link to={"/register"}>
                                        <div className="py-1.5 md:ms-2 text-sm px-3 rounded-md bg-zinc-800 text-white text-center text-nowrap hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 w-full sm:w-28 flex"><span className="pt-1 me-2"> <CiMail /></span> Subscribe</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outline-1 outline-zinc-400 dark:outline-zinc-500 mx-5 xl:mx-50"></div>

                    <div className="p-4 dark:text-white bg-zinc-100 dark:bg-zinc-800">
                        <div className="xl:mx-40">
                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

                                <div>
                                    <p className="text-2xl pb-3">InvestPro</p>
                                    <p className="text-sm text-zinc-400 dark:text-zinc-500">Empowering investors with AI-driven insights, professional-grade tools, and personalized guidance to build wealth and achieve financial goals</p>
                                    <div className="grid grid-cols-4">
                                        <p className="bg-zinc-100 dark:bg-zinc-800 outline-1 outline-zinc-400 dark:outline-zinc-500 size-6 rounded-md p-1 m-2"><FiFacebook /></p>
                                        <p className="bg-zinc-100 dark:bg-zinc-800 outline-1  outline-zinc-400 dark:outline-zinc-500 size-6 rounded-md p-1 m-2"><FiTwitter /></p>
                                        <p className="bg-zinc-100 dark:bg-zinc-800 outline-1 outline-zinc-400 dark:outline-zinc-500 size-6 rounded-md p-1 m-2"><FiLinkedin /></p>
                                        <p className="bg-zinc-100 dark:bg-zinc-800 outline-1 outline-zinc-400 dark:outline-zinc-500 size-6 rounded-md p-1 m-2"><FiInstagram /></p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-zinc-900 dark:text-zinc-100 pb-3">Platform</p>
                                    {footerlink('Investment Options')}
                                    {footerlink('Portfolio Management')}
                                    {footerlink('Research Tools')}
                                    {footerlink('Mobile App')}
                                    {footerlink('Api Access')}
                                </div>

                                <div>
                                    <p className="text-zinc-900 dark:text-zinc-100 pb-3">Resources</p>
                                    {footerlink('Education Center')}
                                    {footerlink('Market Insights')}
                                    {footerlink('Investment Guide')}
                                    {footerlink('Webinars')}
                                    {footerlink('Blog')}
                                </div>

                                <div>
                                    <p className="text-zinc-900 dark:text-zinc-100 pb-3">Support</p>
                                    {footerlink('Help Canter')}
                                    {footerlink('Contact Us')}
                                    {footerlink('Live Chat')}
                                    {footerlink('System Status')}
                                    {footerlink('Security')}
                                </div>

                                <div>
                                    <p className="text-zinc-900 dark:text-zinc-100 pb-3">Company</p>
                                    {footerlink('About Us')}
                                    {footerlink('Careers')}
                                    {footerlink('Press')}
                                    {footerlink('Partners')}
                                    {footerlink('Investors')}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="outline-1 outline-zinc-400 dark:outline-zinc-500 mx-5 xl:mx-50"></div>

                    <div className="p-4 bg-zinc-100 dark:bg-zinc-800">
                        <div className="xl:mx-40">
                            <div className="flex justify-between">
                                <p className="text-xs text-zinc-400 dark:text-zinc-500">© 2024 InvestPro. All rights reserved. Privacy Policy Terms of Service Cookies</p>
                                <p className="text-xs text-zinc-400 dark:text-zinc-500">SIPC Member | SEC Registerd</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    )
}

export default Layout