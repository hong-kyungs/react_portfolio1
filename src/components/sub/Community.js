import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);

	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'BANG OLUFSEN6',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
			{
				title: 'BANG OLUFSEN5',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet.',
			},
			{
				title: 'BANG OLUFSEN4',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
			{
				title: 'BANG OLUFSEN3',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet.',
			},
			{
				title: 'BANG OLUFSEN2',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
			{
				title: 'BANG OLUFSEN51',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
		];
		const data = localStorage.getItem('post');
		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	//폼요소 초기화 함수
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
		if (inputEdit.current) {
			inputEdit.current.value = '';
			textareaEdit.current.value = '';
		}
	};

	//글 저장함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...Posts,
		]);
		resetForm();
	};

	//글 삭제함수
	const deletePost = (index) => {
		console.log(index);
		setPosts(Posts.filter((_, idx) => idx !== index));
	};

	//글 수정모두 변경함수
	const enableUpdate = (index) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	//글 출력모드 변경함수
	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	//실제 글 수정함수
	const updatePost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetForm();
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		console.log(Posts);
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<p>Feel free to contact us anytime!</p>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />

				<textarea
					cols='30'
					rows='5'
					placeholder='본문을 입력하세요.'
					ref={textarea}></textarea>
				<br />

				<div className='btnSet'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={createPost}>WRITE</button>
				</div>
			</div>

			<div className='showBox'>
				<p>reviews</p>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								<div className='showBox_inner'>
									<div className='editTxt'>
										<input
											type='text'
											defaultValue={post.title}
											ref={inputEdit}
										/>
										<br />

										<textarea
											cols='30'
											rows='4'
											defaultValue={post.content}
											ref={textareaEdit}></textarea>
										<br />
									</div>

									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button onClick={() => updatePost(idx)}>UPDATE</button>
									</div>
								</div>
							) : (
								<div className='showBox_inner'>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>
									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</div>
								</div>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
