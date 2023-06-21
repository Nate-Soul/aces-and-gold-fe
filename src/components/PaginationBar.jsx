import Link from "next/link"


const PaginationBar = () => {
  return (
    <div className="flex items-center justify-between mt-12">
      <nav>
        <ul className="flex items-center">
            <li className="page-item">
                <Link href="#" className="page-link rounded-s-3xl">
                    <span className="bi bi-chevron-left"></span>
                </Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link active">1</Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link">2</Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link">3</Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link">4</Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link">5</Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link rounded-e-3xl">
                    <span className="bi bi-chevron-right"></span>
                </Link>
            </li>
        </ul>
      </nav>
      <p className="text-gray-600 text-sm">Showing <span>0</span> to <span>5</span> of <span>2000</span> Results</p>
    </div>
  )
}

export default PaginationBar
