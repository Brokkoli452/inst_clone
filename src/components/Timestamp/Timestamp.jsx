import './style.css'
import formatPostDate from "../../services/formatPostDate";

function Timestamp(props) {
    const date = formatPostDate(new Date(props.date));

    return (
        <div className='timestamp'>{date}</div>
    )
}

export default Timestamp