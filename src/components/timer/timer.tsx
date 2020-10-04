import React, { Component } from 'react';
import { View, Text, TextStyle, ViewStyle } from 'react-native';
import { max } from 'react-native-reanimated';
import styles from './timer.styles';

interface ITimer {
    onEnd: (timeSpent: number) => void,
    maxTime: number,
    timerStyle?: TextStyle,
    style?: ViewStyle
}

class Timer extends Component<ITimer> {
    interval: ReturnType<typeof setInterval> | null;

    constructor(props: ITimer){
        super(props);
        this.interval = null;
    }
    state = {
        time: 0, // second
    };

    /**
     * Start the tiemr
     */
    start = () => {
        
        const maxTime = this.props.maxTime;
        this.interval = setInterval(() => {
            const { time } = this.state;
            this.setState({time: time + 1});
            if(maxTime === time + 1){
                this.props.onEnd(maxTime);
                this.stop();
            }
        }, 1000);
    }

    /**
     * Stop the timer
     */
    stop = () => {
        if(this.interval)
            clearInterval(this.interval);
    }

    /**
     * Reset the time
     */
    reset = () => {
        this.stop();
        this.setState({time: 0});
    }

    /**
     * Convert the given number string
     * If number lower than 10 put '0' to start
     */
    timeToString = (number: number): string => {
        if(number < 10) return `0${number}`;
        return number.toString();
    }

    render(){
        const { time } = this.state;
        const minute = this.timeToString(Math.floor(time / 60));
        const second = this.timeToString(time % 60);
        return(
            <View style={this.props.style}>
                <Text style={[styles.timer, this.props.timerStyle]}>{minute}:{second}</Text>
            </View>
        );
    }
}

export default Timer;