import Link from "next/link";

const Breadcrumbs = ({crumbs}) => {
  return (
    <nav>
        <ul className="flex flex-wrap capitalize gap-3">
            <li>
                <Link href="/" className="hover:text-secondary">Home</Link>
            </li>
            {crumbs.map((crumb, index) => (
            <li key={index}>
            {crumb.link ? (
                <Link href={crumb.link} className="hover:text-secondary">{crumb.name}</Link>
            ) : (
                <span className="text-secondary font-bold">
                {crumb.name}
                </span>
            )}
            </li>
            ))}
        </ul>      
    </nav>
  )
}

export default Breadcrumbs
