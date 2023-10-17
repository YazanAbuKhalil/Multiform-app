export default function Button({backgroundColor="#fff", color="#000" ,type, onClick=null, children}) {
    const btnStyle = {
        width: "100px",
        padding: "15px",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: backgroundColor,
        color: color,
        border: "none"
    }

    return (
        <button style={btnStyle} type={type} onClick={onClick}>
            {children}
        </button>
    )
}