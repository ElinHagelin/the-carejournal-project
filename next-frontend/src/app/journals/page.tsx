import Link from 'next/link';
import { journals } from '@/lib/constants';


export default function JournalsPage() {

	return (
		<div>
			<h1>Mina Böcker</h1>
			<ul>
				{journals.map(journal => (
					<li key={journal.id}>
						<Link href={`/calendar/${journal.id}`}>
							{journal.title}
						</Link>
					</li>
				))}
			</ul>
			<Link href="/new-journal">
				<button>Lägg till en ny bok</button>
			</Link>
			<Link href="/">
				<button>Logga ut</button>
			</Link>
		</div>
	);
}
