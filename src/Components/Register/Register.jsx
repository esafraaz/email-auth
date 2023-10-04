import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [inputEmail, setInputEmail] = useState(null)
    const [passwordStatus, setPasswordStatus] = useState(null)
    const [emailStatus, setEmailStatus] = useState(null)
	const handleSubmit = (e) => {
        
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
        setInputEmail(email)
        setPasswordStatus('')
        if(!inputEmail){
            setEmailStatus('Please Enter an Email ')

        }
        if(!inputEmail.test(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
            setEmailStatus('Email is not valid')
        }
        if(!password.test(/[A-Z]/)){
            setEmailStatus('Password Should be contain a Upper Case Letter.')
        }

		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up
			console.log(userCredential.user);
			// ...
		})
		.catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage)
		});
		console.log(email, password);
	};
	
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Register Now!!</h1>
						<p className="py-6">War Na!!!</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form className="card-body" onSubmit={handleSubmit}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
									name="email"
									required
								/>
							</div>
                            {
                                emailStatus ? <p>{emailStatus}</p> : ''
                            }
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									name="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
                            {
                                passwordStatus && <p>{passwordStatus}</p>
                            }
							<div className="form-control mt-6">
								<button type="submit" className="btn btn-primary">
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
