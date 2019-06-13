import Link from 'next/link'

const Layout = ({ title, children }) => (
    <div>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link prefetch href="/create">
                <a>Add Todo</a>
            </Link>
        </nav>
        <h1>{title}</h1>
        {children}
    </div>
)

export { Layout as default }