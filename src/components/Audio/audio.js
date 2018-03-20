import React , { Component} from 'react';
import { connect } from 'react-redux'
import './audio.css';

class Audio extends Component {
    
    componentDidUpdate(){
        let x = document.getElementById("myAudio"); 
        if(this.props.playSongList.information.state === false){
            x.pause()
        } else {
            x.play()
        }
    }

    render(){
        let { playSongList } = this.props
        return(
            <div className="audio">
                <audio src={playSongList.url} autoPlay="autoplay" id="myAudio"></audio>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    playSongList: state.getsong,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Audio)