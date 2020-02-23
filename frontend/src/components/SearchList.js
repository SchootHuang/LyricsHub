import React from 'react';
import '../static/css/SearchList.css';
import listimg from '../static/images/listimg.png'
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';


class MyComponentClass extends React.Component {
    render() {
        return (
            <div class="mainDetails">
                <div id="headshot">
                    <img src={this.props.src} />
                </div>
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="songs">{this.props.songs}</div>
                </div>
                <div class="clear"></div>
            </div>
        )
    }
}

class SearchList extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="ui tabular menu">
                    <a className="item active">Artists</a>
                    <a className="item">Songs</a>
                    <Link className="item" to="/second">Next</Link>
                </div>

                <div id="list-screen">
                    <div id="artists">
                        <Scrollbars style={{ height: 1000, width: 600 }}>
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                            <MyComponentClass name='Taylor Swift' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/TaylorSwiftApr09.jpg' />
                            <MyComponentClass name='Ed Sheeran' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/440px-Ed_Sheeran_2013.jpg' />
                            <MyComponentClass name='Justin Bieber' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg' />
                            <MyComponentClass name='Maroon5' songs='song1, song2, song3, song4, song5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Maroon_5_performing_in_Sydney.jpg/600px-Maroon_5_performing_in_Sydney.jpg' />
                        </Scrollbars>
                    </div>
                    <div className="list-img">
                    </div>
                </div>

            </div >

        )
    }
}
export default SearchList;