import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignUpError] = useState('');
    const navigate = useNavigate();


    const handleSignIn = (data) => {
        console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success('Successfully Created');
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }

    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignIn)} >
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {
                                errors.name && <p className='text-red-600'>{errors.name.message}</p>
                            }
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: 'Email is required'
                            })} className="input input-bordered w-full max-w-xs" />
                            {
                                errors.email && <p className='text-red-600'>{errors.email.message}</p>
                            }
                        </div>
                        <div className="form-control w-full max-w-xs mb-6">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: "Password Must be 6 charters long or more" }
                            })} className="input input-bordered w-full max-w-xs" />
                            {
                                errors.password && <p className='text-red-600'>{errors.password.message}</p>
                            }
                        </div>
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                        <input className='btn btn-accent w-full' value="Register" type="submit" />

                    </form>
                    <div className='mt-5'>
                        <p>Already Have An Account <Link className='text-secondary' to="/login">Log In</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;