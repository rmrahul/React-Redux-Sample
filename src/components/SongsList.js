import React , { Component } from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongsList extends Component{

    renderList = () => {
        return (
            this.props.songs.map(s => {
                return (
                    <div className="item" key={s.title}>
                        <div className="right floated content">
                            <button className="ui button primary" onClick={()=> this.props.selectSong(s)}>
                                Select
                            </button>
                        </div>
                        <div className="content">{s.title}</div>
                    </div>
                );
            })
        )
    }

    render(){
        console.log(this.props.songs);

        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        songs : state.songs
    }
}


export default connect(mapStateToProps, { selectSong })(SongsList);

