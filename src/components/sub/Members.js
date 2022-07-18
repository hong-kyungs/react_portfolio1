import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		gender: null,
		preference: null,
		store: '',
	};
	const [Val, setVal] = useState(initVal);

	const [Err, setErr] = useState({});

	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+?><]/;

		if (value.userid.length < 5) {
			errs.userid = 'Please enter at least 5 characters.';
		}
		if (
			value.pwd1 < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'The password entered is invalid. (Minimum 5 characters long incluing alphabetic, numetic and special character.';
		}
		if (value.pwd1 !== value.pwd2 || value.pwd2 < 5) {
			errs.pwd2 = 'The confirm password does not match with the password.';
		}
		if (value.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = 'Please enter at least 8 characters long including @.';
		}
		if (!Val.gender) {
			errs.gender = 'Please choose your gender.';
		}
		if (!Val.preference) {
			errs.preference = 'Please choose your preference.';
		}
		if (Val.store === '') {
			errs.store = 'please choose the nearest store';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};
	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});
		setVal({ ...Val, [name]: isCheck });
	};
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		// console.log(isSelected);
		setVal({ ...Val, [name]: isSelected });
	};
	const handleReset = () => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('Thank you for signing up.');
			history.push('/');
		}
		console.log(Err);
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<div id='login'>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='h'>회원가입</legend>
						{/* userID */}
						<div className='field'>
							<input
								type='text'
								name='userid'
								id='userid'
								placeholder=' '
								value={Val.userid}
								onChange={handleChange}
							/>
							<label htmlFor='userid'>USER ID *</label>
							<span className='err'>{Err.userid}</span>
						</div>

						{/* password */}
						<div className='field'>
							<input
								type='password'
								name='pwd1'
								id='pwd1'
								placeholder=' '
								value={Val.pwd1}
								onChange={handleChange}
							/>
							<label htmlFor='pwd1'>PASSWORD *</label>
							<span className='err'>{Err.pwd1}</span>
						</div>
						<div className='field'>
							<input
								type='password'
								name='pwd2'
								id='pwd2'
								placeholder=' '
								value={Val.pwd2}
								onChange={handleChange}
							/>
							<label htmlFor='pwd2'>CONFIRM PASSWORD *</label>
							<span className='err'>{Err.pwd2}</span>
						</div>
						{/* email */}
						<div className='field'>
							<input
								type='text'
								name='email'
								id='email'
								placeholder=' '
								value={Val.email}
								onChange={handleChange}
							/>
							<label htmlFor='email'>EMAIL *</label>
							<span className='err'>{Err.email}</span>
						</div>

						<div className='field2'>
							<div className='radio'>
								<p>GENDER *</p>
								<label htmlFor='male'>MALE</label>
								<input
									type='radio'
									id='male'
									name='gender'
									onChange={handleRadio}
								/>
								<label htmlFor='female'>FEMALE</label>
								<input
									type='radio'
									id='female'
									name='gender'
									onChange={handleRadio}
								/>
							</div>
							<span className='err'>{Err.gender}</span>
						</div>
						{/* preference */}
						<div className='field2'>
							<div className='checkbox'>
								<p>PREFERENCE *</p>
								<label htmlFor='speaker'>SPEAKER</label>
								<input
									type='checkbox'
									id='speaker'
									name='preference'
									onChange={handleCheck}
								/>

								<label htmlFor='headphone'>HEADPHONE</label>
								<input
									type='checkbox'
									id='headphone'
									name='preference'
									onChange={handleCheck}
								/>

								<label htmlFor='tv'>TV</label>
								<input
									type='checkbox'
									id='TV'
									name='preference'
									onChange={handleCheck}
								/>
							</div>
							<span className='err'>{Err.preference}</span>
						</div>

						<div className='field3'>
							<div className='select'>
								<label htmlFor='store'>NEAREST *</label>
								<select name='store' id='store' onChange={handleSelect}>
									<option value=''>Nearest Store</option>
									<option value='hanam'>Hanam</option>
									<option value='seuol'>Seoul</option>
									<option value='busan'>Busan</option>
								</select>
							</div>
							<span className='err'>{Err.store}</span>
						</div>

						<div className='btnset'>
							<input type='reset' value='CANCEL' onClick={handleReset} />
							<input
								type='submit'
								value='SEND'
								onClick={() => setSubmit(true)}
							/>
						</div>
					</fieldset>
				</form>

				<div className='login_Img'>
					<img src={process.env.PUBLIC_URL + '/img/login_sub.jpg'} alt='' />
				</div>
			</div>
		</Layout>
	);
}

export default Members;
