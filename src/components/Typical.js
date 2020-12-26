import { Component } from 'react';
import Typical from 'react-typical';
import Restaurant from '../static/restaurant.svg';
import Hamburger from '../static/hamburger.svg';
import Fries from '../static/fries.svg';
import Hotdog from '../static/hotdog.svg';

export default class TextTypical extends Component{

    render(){
        return(
            <div class="title">
                <Typical
                    steps={
                        [
                            'Food Picker', 2000,
                            '', 2000
                        ]}
                    loop={Infinity}
                    wrapper="p"
                />
                <div style={{display: 'inline', justifyContent:'space-between'}}>
                    <img src={Restaurant} alt="Restaurant" width='50' />
                    <img style={{paddingLeft: '20px'}} src={Hamburger} alt="Hamburger" width='50' />
                    <img style={{paddingLeft: '20px'}} src={Fries} alt="Fries" width='50' />
                    <img style={{paddingLeft: '20px'}} src={Hotdog} alt="Hotdog" width='50' />
                </div>
                
                <Typical
                    steps={
                        [
                            'Random GIF Generator', 2000,
                            '', 2000
                        ]}
                    loop={Infinity}
                    wrapper="p"
                />
                
            </div>
        );
    }
}