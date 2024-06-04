'use client'
import { useState } from 'react';
import BackButton from '@/components/BackButton';

export default function NewJournalPage() {
	const [title, setTitle] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Add logic to save the new journal
		console.log('New Journal:', title);
	};

	return (
		<div>
			<h1>Add New Journal</h1>
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
				<button type="submit">Add Journal</button>
			</form>
		</div>
	);
}
