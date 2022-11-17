import React from 'react';
import img from '../../../assets/images/appointment.png';

const Message = () => {
    return (
        <div className="hero"
            style={{
                background: `url(${img})`,
                backgroundSize: 'cover'
            }}
        >
            <div className="card w-1/3 shadow-2xl">
                <div className="card-body py-14 ">
                    <div className="form-control">
                        <input type="text" placeholder="Email address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <textarea className='input-bordered border-2 px-2' placeholder='Your Message' name="" id="" cols="3o" rows="5"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;