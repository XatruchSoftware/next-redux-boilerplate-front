import Link from 'next/link'

const TodoListItem = ({ title, body }) => (
    <li>
        <Link href={`/edit?query=${title}`} as={`/edit/${title}`}>
            <a>{title}</a>
        </Link>
        <p>{body}</p>
    </li>
)

export { TodoListItem as default }