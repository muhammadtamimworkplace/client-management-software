import React from 'react';
import { Link } from 'react-router-dom';
import signUpImg from '../../../../public/assets/signUp.avif'

const SignUp = () => {
    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
                <figure className="lg:w-1/2">
                    <img src={signUpImg} alt="Random image" className="object-cover w-full h-full" />
                </figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl font-bold mb-6">SignUp</h2>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <img src="https://www.w3.org/assets/website-2021/svg/avatar.svg" className="w-4 h-4 " ></img>
                                <input type="email" className="grow" placeholder="Name" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow" placeholder="email@example.com" />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder="Enter password" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <p>Already have an account?</p>
                        <Link to="/login" className="link link-primary">Login now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;