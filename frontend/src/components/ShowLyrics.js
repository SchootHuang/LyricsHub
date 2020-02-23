import React from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import taylor from '../static/images/taylor.png';
import '../static/css/ShowLyrics.css';


class ShowLyrics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eius optio temporibus molestiae blanditiis dicta illum facere impedit voluptate aliquid, amet vitae ipsum dolorem fugit? Earum voluptas, eveniet qui, maxime, sint porro accusamus dignissimos iste incidunt a nulla animi at molestias nesciunt suscipit molestiae obcaecati voluptatibus veniam voluptatum eligendi? Officiis optio atque porro nisi error cumque repellendus sunt praesentium distinctio temporibus obcaecati unde quos voluptates reiciendis alias beatae, ipsam tempore totam amet pariatur enim laudantium molestias! Aspernatur, reprehenderit! Quas repellendus numquam omnis explicabo maxime ratione debitis consequatur enim labore itaque quisquam porro, odit amet quam neque qui? Fugiat consequuntur ducimus eaque quia aut accusantium aliquid omnis tempora neque nesciunt eius maiores laboriosam obcaecati ut, minus incidunt quam deserunt. Consequatur veritatis, quidem tenetur commodi, blanditiis minus officia numquam voluptates quaerat nesciunt modi in voluptatem quas beatae minima nam. Itaque, minus! Omnis, perspiciatis quae provident possimus quas vero esse totam dolorum maiores, assumenda porro doloremque ad voluptatum sapiente tempore molestiae veritatis ea deserunt facilis, nulla culpa nam ipsa! Sed unde facere, laborum molestiae itaque libero amet  ")
        }
    }
    render() {
        return (
            <div className="frame">
                <div className="lyrics">
                    <div className="bt">
                        <div className="link"><Link to="second">{"<"} Back    </Link></div>
                        <div className="link"><Link to="/">  Next {">"}</Link></div>
                    </div>
                    <div className="container">
                        <Scrollbars style={{ width: 700, height: 500 }}>
                            <div className="content">
                                {this.state.value}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
                <div className="lyrics-screen">
                    <div className="inner-div">
                        <div>
                            <img src={taylor} />
                            <span className="artist">Taylor Swift</span>
                        </div>
                        <div className="song-name">
                            Teenage Lovesong
                    </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default ShowLyrics;