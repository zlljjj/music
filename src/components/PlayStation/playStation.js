import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import './playStation.css';
import { Icon } from 'antd';

class PlayStation extends PureComponent {
    render(){
        const { information, changePlay } = this.props;
        return(
            <div >
                {
                    information.information.name !== "" ? 
                        <div className = "playStation">
                            <div className = "play-name">
                                {information.information.name} &nbsp;&nbsp;{information.information.singer}
                            </div>
                            <div className = "play-operation">
                                <Icon type="step-backward" style={{ fontSize: 20, color: '#61b25a' , cursor: 'pointer'}} />
                                {
                                    information.information.state === true ? <Icon type="pause" style={{ fontSize: 20, color: '#61b25a' , cursor: 'pointer'}} onClick={changePlay.bind(this,information.information.id,information.information.name,information.information.singer,false)} /> : <Icon type="caret-right" style={{ fontSize: 20, color: '#61b25a' , cursor: 'pointer'}} onClick={changePlay.bind(this,information.information.id,information.information.name,information.information.singer,true)} />
                                }
                                <Icon type="step-forward" style={{ fontSize: 20, color: '#61b25a' , cursor: 'pointer'}}/>
                            </div> 
                        </div>
                    :null
                }
            </div>
        )     
    }
}

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch => ({

})

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(PlayStation)