import Link from 'next/link';
import '@/styles/globals.css'

export default function Home() {
  return (
    <div>
      <h1 className='lg:text-2xl'>CareJournal</h1>
      <h2>Din digitala dagbok</h2>
      <form>
        <div className="flex flex-col">
          <label htmlFor="username">Användarnamn:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Lösenord:</label>
          <input type="password" id="password" name="password" />
        </div>

        <Link href="/journals">
          <button type="submit">Logga in</button>
        </Link>
      </form>
    </div>
  );
}
