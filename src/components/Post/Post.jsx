import './style.css';
import formatNumbersCompact from '../../services/formatNumbersCompact';
import Comment from '../Comment/Comment';
import Timestamp from "../Timestamp/Timestamp";
import redheart from '../../assets/icons/red_heart.svg'

function Post() {

    return (
        <div className='post'>
            <img
                className='post-image'
                src='https://plus.unsplash.com/premium_photo-1725408115671-b67df9364179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
            />
            <div className='post-info'>
                <a href='https://rt.pornhub.com'>
                    <div className='post-info-user'>
                        <img
                            className='avatar'
                            src='https://lh3.googleusercontent.com/a/ACg8ocIQXNW7F0PV8swC9vN9slp4mS9-7qbldTv1WMvqIdZpXYWx1H2v=s288-c-no'
                            alt=''
                        />
                        <div className="info">
                            abobus_gay
                            <Timestamp date='2023-10-04T14:30:00'/>
                        </div>
                    </div>
                </a>

                <div className='post-description'>
                    Данил ебаный гандон
                    <br/>
                    оп ахах реакт здарова приветик гандошка ебучая
                </div>

                <div className='post-stats'>
                    <div className='post-stats-likes'>
                        <img
                            className='post-stats-likes-icon'
                            src={redheart}
                            alt=''
                        />
                        <div className='post-stats-likes-counter'>
                            {formatNumbersCompact(213213)}
                        </div>
                    </div>
                </div>

                <div className="post-info-comments-block__wrapper">
                    <div className='post-info-comments-block'>
                        <Comment
                            avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                            date={'2023-10-04T15:31:00'} text="nigga chicken weed rap" nametag="nigga"/>
                        <Comment
                            avatar="https://media.istockphoto.com/id/1126680942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82%D0%B0%D0%B5%D1%86-%D1%81-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BB%D0%B8%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=cXn34htwW8eXxR8bPofkHPx5up_RcPz6mH-ztxo4nYA="
                            date={'2023-10-04T15:34:00'} text="rice small dick anime" nametag="asian"/>
                        <Comment
                            avatar="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170"
                            date={'2023-10-04T15:56:00'} text="ахах пендосы ёбнулись я вахуе гав" nametag="dog"/>
                        <Comment
                            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/330px-Florida_Box_Turtle_Digon3.jpg"
                            date={'2023-10-04T17:20:00'} text="фотка хуйня умри" nametag="turtle"/>
                        <Comment
                            avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                            date={'2023-10-04T15:31:00'} text="nigga chicken weed rap" nametag="nigga"/>
                        <Comment
                            avatar="https://media.istockphoto.com/id/1126680942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82%D0%B0%D0%B5%D1%86-%D1%81-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BB%D0%B8%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=cXn34htwW8eXxR8bPofkHPx5up_RcPz6mH-ztxo4nYA="
                            date={'2023-10-04T15:34:00'} text="rice small dick anime" nametag="asian"/>
                        <Comment
                            avatar="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170"
                            date={'2023-10-04T15:56:00'} text="ахах пендосы ёбнулись я вахуе гав" nametag="dog"/>
                        <Comment
                            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/330px-Florida_Box_Turtle_Digon3.jpg"
                            date={'2023-10-04T17:20:00'} text="фотка хуйня умри" nametag="turtle"/>
                        <Comment
                            avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                            date={'2023-10-04T15:31:00'} text="nigga chicken weed rap" nametag="nigga"/>
                        <Comment
                            avatar="https://media.istockphoto.com/id/1126680942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82%D0%B0%D0%B5%D1%86-%D1%81-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BB%D0%B8%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=cXn34htwW8eXxR8bPofkHPx5up_RcPz6mH-ztxo4nYA="
                            date={'2023-10-04T15:34:00'} text="rice small dick anime" nametag="asian"/>
                        <Comment
                            avatar="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170"
                            date={'2023-10-04T15:56:00'} text="ахах пендосы ёбнулись я вахуе гав" nametag="dog"/>
                        <Comment
                            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/330px-Florida_Box_Turtle_Digon3.jpg"
                            date={'2023-10-04T17:20:00'} text="фотка хуйня умри" nametag="turtle"/>
                        <Comment
                            avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                            date={'2023-10-04T15:31:00'} text="nigga chicken weed rap" nametag="nigga"/>
                        <Comment
                            avatar="https://media.istockphoto.com/id/1126680942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82%D0%B0%D0%B5%D1%86-%D1%81-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BB%D0%B8%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=cXn34htwW8eXxR8bPofkHPx5up_RcPz6mH-ztxo4nYA="
                            date={'2023-10-04T15:34:00'} text="rice small dick anime" nametag="asian"/>
                        <Comment
                            avatar="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170"
                            date={'2023-10-04T15:56:00'} text="ахах пендосы ёбнулись я вахуе гав" nametag="dog"/>
                        <Comment
                            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/330px-Florida_Box_Turtle_Digon3.jpg"
                            date={'2023-10-04T17:20:00'} text="фотка хуйня умри" nametag="turtle"/>
                        <Comment
                            avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                            date={'2023-10-04T15:31:00'} text="nigga chicken weed rap" nametag="nigga"/>
                        <Comment
                            avatar="https://media.istockphoto.com/id/1126680942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82%D0%B0%D0%B5%D1%86-%D1%81-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BB%D0%B8%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=cXn34htwW8eXxR8bPofkHPx5up_RcPz6mH-ztxo4nYA="
                            date={'2023-10-04T15:34:00'} text="rice small dick anime" nametag="asian"/>
                        <Comment
                            avatar="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170"
                            date={'2023-10-04T15:56:00'} text="ахах пендосы ёбнулись я вахуе гав" nametag="dog"/>
                        <Comment
                            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/330px-Florida_Box_Turtle_Digon3.jpg"
                            date={'2023-10-04T17:20:00'} text="фотка хуйня умри" nametag="turtle"/>
                        <Comment
                            avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                            date={'2023-10-04T15:31:00'} text="nigga chicken weed rap" nametag="nigga"/>
                        <Comment
                            avatar="https://media.istockphoto.com/id/1126680942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82%D0%B0%D0%B5%D1%86-%D1%81-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BB%D0%B8%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=cXn34htwW8eXxR8bPofkHPx5up_RcPz6mH-ztxo4nYA="
                            date={'2023-10-04T15:34:00'} text="rice small dick anime" nametag="asian"/>
                        <Comment
                            avatar="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170"
                            date={'2023-10-04T15:56:00'} text="ахах пендосы ёбнулись я вахуе гав" nametag="dog"/>
                        <Comment
                            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florida_Box_Turtle_Digon3.jpg/330px-Florida_Box_Turtle_Digon3.jpg"
                            date={'2023-10-04T17:20:00'} text="фотка хуйня умри" nametag="turtle"/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
