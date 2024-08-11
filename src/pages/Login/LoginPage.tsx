import { Link } from "react-router-dom";
import loginImage from "../../assets/images/loginImage.png";
const LoginPage = () => {
    return (<div>
        <div className="hero min-h-screen bg-white">
            <div className="hero-content bg-white flex-col lg:flex-row md:w-[70%] w-full rounded-[1em]  h-full md:h-auto lg:h-[35em] shadow-2xl my-10">
                <div className="!w-full bg-[#EFF3FF] h-full flex items-center justify-center rounded-[1em]">
                    <img src={loginImage} className=" w-[17em] md:w-[30em]" alt="loginImage" />
                </div>
                <div className="card w-full max-w-sm shrink-0   ">
                    <div className="card-body">
                       
                        <h1 className="text-[30px] font-bold text-center capitalize mb-[1em] text-primary">LOGIN</h1>
                        <form className="flex flex-col gap-[2em]" >
                            <div className="from-control">
                                <label className="input input-bordered flex items-center gap-2 bg-[#EFF3FF] !outline-[#d0ddff]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow text-gray-500" placeholder="Email" />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="input input-bordered flex items-center gap-2 bg-[#EFF3FF] !outline-[#d0ddff]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="password" placeholder="Password" className="grow text-gray-500" />
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                        <p className="text-gray-500 text-[12px] text-center mt-5">Don't have an account? <Link to={'/sign-up'} >Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default LoginPage;