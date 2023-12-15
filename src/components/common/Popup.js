import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; //Framer-motion 라이브러리 - 동적 무브먼트를 자연스럽게 구현

//forwardRef로 자식 컴포넌트의 state 변경함수를 부모컴포넌 트에 역으로 전달
const Popup = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	//팝업창 생성시 스크롤 막힘
	useEffect(() => {
		Open
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	}, [Open]);

	//forwardRef안쪽에 useImperativeHandle함수를 호출, 해당 함수를 객체를 반환해서 해당 객체값을 부모컴포넌트로 전달
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='pop'
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: 1,
						scale: 1,
						transition: { duration: 0.5 },
					}}
					exit={{
						opacity: 0,
						scale: 0,
						transition: { duration: 0.5, delay: 0.5 },
					}}
				>
					<motion.div
						className='con'
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.5, delay: 0.5 },
						}}
						exit={{
							opacity: 0,
							transition: { duration: 0.5 },
						}}
					>
						{props.children}
					</motion.div>
					<motion.span
						className='close'
						onClick={() => setOpen(false)}
						initial={{ x: 100, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, delay: 0.5 },
						}}
						exit={{
							opacity: 0,
							x: 100,
							transition: { duration: 0.5 },
						}}
					>
						close
					</motion.span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Popup;
