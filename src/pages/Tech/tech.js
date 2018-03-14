import React , { Component } from 'react';
import './tech.css';
import { Icon } from 'antd';
import { searchSongApi } from '../../api/api'
import { searchSong } from '../../actions/techAction';
import { connect } from 'react-redux';

class Tech extends Component {
    constructor(props){
        super(props);
        this.state={
            songList:[],
            searchVal:"",
        }
    }

    componentDidMount(){
        // this.searchSong();
    }

    searchSong(event){
        const { getSongList } = this.props;
        if(event.keyCode === 13){
            searchSongApi({
                keywords: this.state.searchVal,
            }).then((res) => {
                if(res.code === 200){
                    getSongList(res.result.songs);
                } else {
                    getSongList([]);
                }
            }) 
        }
    }

    changeSearch(event){
        this.setState({
            searchVal:event.target.value,
        })
    }

    render(){
        let { searchVal } = this.state;
        let { songList } = this.props;
        return(
            <div className = "tech">
                <div className = "tech-search">
                    <Icon type="search" className = "icon" style={{ fontSize: 18, color: '#61b25a' }}/>
                    <input type="text" placeholder="SEARCH..." value={searchVal} onChange={this.changeSearch.bind(this)} onKeyUp={this.searchSong.bind(this)} />
                </div>
                { 
                    songList.songs ? songList.songs.map((item,i)=>(
                        <div className="tech-songList" key={i}>
                            <div className = "tech-songList-img" >
                                <img src={item.artists[0].img1v1Url} alt=""/>
                            </div>
                            <div className = "tech-songList-word">
                                {item.name}-{item.album.name}
                            </div>
                        </div> 
                    )) : null  
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songList: state.songlist,
    }
}

const mapDispatchToprops = dispatch => ({
    getSongList:songs => dispatch(searchSong(songs))
})


export default connect(
    mapStateToProps,
    mapDispatchToprops,
)(Tech);