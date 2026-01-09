export default function TimelineItem({ children, icon, color = 'var(--clr-accent)', bgColor = 'transparent', to }) {
    let IconElement;
    if (typeof icon === 'string') {
        IconElement = <img src={icon} alt="icon" />;
    } else {
        IconElement = icon;
    }

    if (!to) {
        return (
            <li className="timeline-item" style={{ '--clr': color, '--bg-clr': bgColor }}>
                <div className="timeline-icon">
                    {IconElement}
                </div>
                <div className="new-comment">
                    {children}
                </div>
            </li>
        )
    }

    return (
        <li className="timeline-item" style={{ '--clr': color, '--bg-clr': bgColor }}>
            <a href={to} target="_blank" rel="noreferrer">
                <div className="timeline-icon">
                    {IconElement}
                </div>
                <div className="new-comment">
                    {children}
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '0.5rem',
                    color: 'var(--clr-accent)'
                }}>
                    <svg className="goto-icon" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                        <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
                        <path d="m11.828 9.586-3.95 3.95a1 1 0 1 1-1.414-1.415l3.95-3.95H6.828a1 1 0 0 1 0-2h6a.997.997 0 0 1 1 1v6a1 1 0 1 1-2 0z" />
                    </svg>
                </div>
            </a>
        </li>
    )
}

const TimeStamp = ({ stamp }) => {
    return <div className="stamp">{stamp}</div>
}


export { TimeStamp }