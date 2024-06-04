"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import { journals } from '@/lib/constants';

export default function CalendarPage() {
	const params = useParams();
	const { journalId } = params;

	const entries = journalId == '1' ? [
		{ id: 1, date: '2024-01-01', title: 'Entry 1' },
		{ id: 2, date: '2024-01-02', title: 'Entry 2' },
	] : [
		{ id: 3, date: '2024-01-01', title: 'Entry 3' },
		{ id: 4, date: '2024-01-02', title: 'Entry 4' },
	];

	const journal = journals && journalId && journals.find(j => j.id === Number(journalId))

	return (
		<div>
			<h1>{journal && journal.title}</h1>
			<BackButton />
			<ul>
				{entries.map(entry => (
					<li key={entry.id}>{entry.date}: {entry.title}</li>
				))}
			</ul>

			<Link href={'/new-entry'}>
				<button>Add New Entry</button>
			</Link>
		</div>
	);
}

