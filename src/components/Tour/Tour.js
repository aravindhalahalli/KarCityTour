import React, { Component } from 'react';
import './Tour.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowClose, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'

export default class Tour extends Component {
    state = {
        showInfo:false
    };
    handleInfo = ()=>{
        this.setState({
            showInfo:!this.state.showInfo
        });
    }
    render() {
        const { city, img, name, info } = this.props.tour;
        return <article className="tour">
            <div className="img-container">
                <img
                    width="200"
                    src={img}
                    alt="Img of bot"
                />
                <span className="close-btn">
                    <FontAwesomeIcon icon={faWindowClose} />
                </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info{" "}
                    <span onClick = {this.handleInfo}>
                        <FontAwesomeIcon icon={faCaretSquareDown} />
                    </span>
                </h5>
                {this.state.showInfo && <p>{info}</p>}
                
            </div>
        </article>
    }
}
