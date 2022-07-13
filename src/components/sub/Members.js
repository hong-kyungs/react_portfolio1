import Layout from '../common/Layout';
import { useEffect, useState } from 'react';

function Members() {
	const initVal = {
		userid: '',
	};
	const [Val, setVal] = useState(initVal);

	const [Err, setErr] = useState({});

	const check = (value) => {
		const errs = {};
		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
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

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<div id='login'>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='h'>회원가입</legend>
						<div className='field'>
							<input
								type='text'
								name='userid'
								id='userid'
								placeholder=' '
								value={Val.userid}
								onChange={handleChange}
							/>
							<label htmlFor='userid'>USER ID*</label>
							<span className='err'>{Err.userid}</span>
						</div>
						<div className='btnset'>
							<input type='reset' value='CANCEL' />
							<input type='submit' value='SEND' />
						</div>
					</fieldset>
				</form>

				<div className='login_Img'>
					<img src={process.env.PUBLIC_URL + '/img/login.jpg'} alt='' />
				</div>
			</div>
		</Layout>
	);
}

export default Members;
