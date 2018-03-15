import React , { Component } from 'react';
import './tech.css';
import { Icon , Spin } from 'antd';

import { searchSong } from './techAction';
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
        
    }

    searchSong(event){
        const { getSongList } = this.props;
        if(event.keyCode === 13){
            getSongList(this.state.searchVal);
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
                <Spin spinning={songList.loading} size="large" className = "tech-spin" />
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

const mapDispatchToProps = dispatch => ({
    getSongList:keywords => dispatch(searchSong(keywords))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tech);