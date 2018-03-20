import React , { Component } from 'react';
import './tech.css';
import { Icon , Spin , Slider } from 'antd';
import PlayStation from "../../components/PlayStation/playStation"
import { searchSong , changeSong } from './techAction';
import { connect } from 'react-redux';

class Tech extends Component {
    constructor(props){
        super(props);
        this.state={
            searchVal:"",
            playSongId:"",
            playSongName:"",
            playSingName:"",
            ifPlay:false,
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

    playSong(id,name,singer,state){
        const { playSong } = this.props;

        playSong({
            id:id,
            name:name,
            singer:singer,
            state:state,
        })
    }

    render(){
        let { searchVal } = this.state;
        let { songList , playSongList } = this.props;
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
                                {item.name}-{item.album.name} &nbsp;&nbsp;&nbsp;{item.artists[0].name}
                            </div>
                            <div className = "tech-songList-play">
                                {
                                    playSongList.information.id === item.id && playSongList.information.state === true ? <Icon type="pause" style={{ fontSize: 20, color: '#61b25a' }} onClick={this.playSong.bind(this,item.id,item.name,item.artists[0].name,false)}/> : <Icon type="caret-right" style={{ fontSize: 20, color: '#61b25a' }} onClick={this.playSong.bind(this,item.id,item.name,item.artists[0].name,true)}/> 
                                }
                            </div>
                        </div> 
                    )) : null  
                }
                {/* <div className="tech-songstep">
                    <div className="tech-nowtime">0.00</div>
                    <Slider min={0.00} max={3.00} step={0.01} />
                    <div className="tech-alltime">3.00</div>
                </div> */}
                <PlayStation information={playSongList} changePlay = {this.playSong.bind(this)}></PlayStation>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playSongList: state.getsong,
        songList: state.songlist,
    }
}

const mapDispatchToProps = dispatch => ({
    getSongList:keywords => dispatch(searchSong(keywords)),
    playSong:information => dispatch(changeSong(information)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tech);