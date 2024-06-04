"use client";
// import { useRouter } from 'next/router';
import { useState } from 'react';
import BackButton from '@/components/BackButton';

export default function NewEntryPage() {
	//   const router = useRouter();
	//   const { journalId } = router.query;
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Add logic to save the new entry
		console.log('New Entry:', { title, content });
	};

	return (
		<div>
			<h1>Add New Entry to Journal</h1>
			<BackButton />
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<br />
				<label htmlFor="content">Content:</label>
				<textarea
					id="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					required
				/>
				<br />
				<button type="submit">Add Entry</button>
			</form>
		</div>
	);
}
