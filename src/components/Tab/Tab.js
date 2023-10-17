import "./Tab.css"

export default function Tab({title, num, currentPage}) {
    return (
        <li>
            <div className={`tab`}>
                <div className={`tab__number ${num === currentPage && "active"}`}>{num}</div>
                <div className="tab__content">
                    <p className="tab__content-step">STEP {num}</p>
                    <p className="tab__content-title">{title}</p>
                </div>
            </div>
        </li>
    )
}