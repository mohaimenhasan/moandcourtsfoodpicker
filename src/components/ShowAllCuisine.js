import Cuisines from '../common/Cuisine.json';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Component } from 'react';
import { CarouselVal } from './Giphy';
import { IconButton, Button  } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

let api ='https://yesno.wtf/api/';

const useStyles = makeStyles((theme) => ({
    text: {
        margin: theme.spacing(1),
        maxWidth: '360px', 
        minWidth: '360px',
        marginBottom: '10px',
    },
    button: {
        margin: theme.spacing(1),
      },
      feelButton: {
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

class ShowAllCuisine extends Component{
    constructor(props){
        super(props);
        this.state = {
            cuisineVal: '',
            displayVal: 'None',
            finalVal: '',
            idx: 0,
            fixVal: 0,
            decider: true,
            image: ''
        }
        this.havePicked = this.havePicked.bind(this);
    }

    async fetchData() {
        try {
            const response = await fetch(api);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({
              image: json.image,
            });
        } catch (error) {
            console.log(error);
        }
    }

    timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    getNextVal(){
        if (this.state.idx >= Cuisines['cuisine'].length){
            this.setState({
                idx: 0
            })
        }
        this.setState({
            cuisineVal: Cuisines['cuisine'][this.state.idx],
            idx: this.state.idx+1,
        })
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    letMeDecide = async () => {
        await this.fetchData();
        this.setState({
            fixVal: 2
        })
    }

    havePicked = async () => {
        this.setState({
            displayVal: 'None',
            fixVal: 1
        })
        clearInterval(this.interval);
        this.interval = setInterval(() => this.getNextVal(), 50);
        await this.timeout(3000);
        clearInterval(this.interval);
        let val = this.getRandomArbitrary(0, Cuisines['cuisine'].length);
        if (val >= 0 && val < Cuisines['cuisine'].length){
            this.setState({
                finalVal: Cuisines['cuisine'][val],
                cuisineVal: Cuisines['cuisine'][val],
                displayVal: ''
            }) 
        }else{
            this.setState({
                cuisineVal: 'Error'
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.getNextVal(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        let classes = this.props.classes;
        if (this.state.fixVal === 0){
            return(
                <div> 
                    {CarouselVal("Picky Eater", 1)} <br/>
                    <TextField disabled inputProps={{min: 0, style: { textAlign: 'center', minHeight: '120px', fontWeight: 'bold', fontSize: '50px', color: '#333333' }}} className={classes.text} id="outlined-basic" variant="outlined" value={this.state.cuisineVal}/> <br/>
                    <IconButton className={classes.button} aria-label="play-button" onClick={this.havePicked}> <PlayCircleFilledIcon style={{width: '100px', height: '100px'}}/> </IconButton >
                </div>
            );
        }else if (this.state.fixVal === 1){
            return(
                <div>
                    <TextField disabled inputProps={{min: 0, style: { textAlign: 'center', minHeight: '120px', fontWeight: 'bold', fontSize: '50px', color: '#333333' }}} className={classes.text} id="outlined-basic" variant="outlined" value={this.state.cuisineVal}/> <br/>
                    <div style={{display: this.state.displayVal}}>
                        {CarouselVal("Clap", 3, 200)} <br/> 
                        <h3>
                            CONGRATS. How do you feel about this?
                        </h3>
                        <br/>
                        <Button variant="outlined" size="large" color="secondary" className={classes.feelButton} onClick={this.havePicked}>
                            <b> Try Again? </b>
                        </Button>
                        <Button variant="outlined" size="large" color="secondary" className={classes.feelButton} onClick={this.letMeDecide}>
                            <b> Let me Decide </b>
                        </Button>
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                    <img alt={'decider'} src={this.state.image} width={window.innerWidth*0.3} height={Math.round(window.innerWidth*0.3 * 9 / 16)}/> <br/> <br/>
                    <Button variant="outlined" size="large" color="secondary" className={classes.feelButton} onClick={this.havePicked}>
                        <b> Try Again? </b>
                    </Button>
                </div>
            );
        }
    }
}

export default withMyHook(ShowAllCuisine);