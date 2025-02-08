import './style.css'
import Timestamp from "../Timestamp/Timestamp";

function Comment(props) {
    return (
        <div className='comments-block__comment'>

            <img className="profile-pic"
                 src={props.avatar}
                 alt=""/>
            <div className="comment-info">
                <div className="comment-info__common">
                    <div className="comment-info__nametag">
                        {props.nametag}
                    </div>

                    <Timestamp date={props.date}/>
                </div>

                <div className="comment-info_text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Comment