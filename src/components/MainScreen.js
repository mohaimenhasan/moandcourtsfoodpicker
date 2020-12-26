import { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Decrypter from "./Decrypter";
import TextTypical from "./Typical";
import {CarouselVal} from './Giphy';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      maxWidth: '260px', 
      maxHeight: '120px', 
      minWidth: '260px', 
      minHeight: '120px'
    },
  }));

function withMyHook(Component){
    return function WrappedComponent(props){
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}

class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            welcome: true,
            food: false,
            gif: false
        }
    }

    changeToFood = () => {
        this.setState({
            welcome: false,
            food: true,
            gif: false
        })
    }

    changeToGIF = () => {
        this.setState({
            welcome: false,
            food: false,
            gif: true
        })
    }

    changeToMain = () => {
        this.setState({
            welcome: true,
            food: false,
            gif: false
        })
    }

    render(){
        let classes = this.props.classes;
        if (this.state.welcome){
            return(
                <div className="card">
                    <h1 class="welcome">
                        Mohaimen and Courtney
                    </h1>
                    {CarouselVal("I love you", 1)}
                    <TextTypical/>
                    <Button variant="outlined" size="large" color="primary" className={classes.button} onClick={this.changeToFood}>
                        <b> Help me Pick Food </b>
                    </Button>
                    <Button variant="outlined" size="large" color="secondary" className={classes.button} onClick={this.changeToGIF}>
                        <b> Feeling pretty GIPHY </b>
                    </Button>
                </div>
            );
        }
        else if (this.state.food){
            return(
                <div className="card">
                    <Decrypter/>
                    <Button variant="outlined" size="large" color="primary" className={classes.button} onClick={this.changeToMain}>
                        <b> Go Back to Main </b>
                    </Button>
                    <Button variant="outlined" size="large" color="secondary" className={classes.button} onClick={this.changeToGIF}>
                        <b> Feeling pretty GIPHY </b>
                    </Button>
                </div>
            )
        }
        else if (this.state.gif){
            return(
                <div className="card">

                </div>
            )
        }
    }
}

MainScreen = withMyHook(MainScreen);
export default MainScreen;