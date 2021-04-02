import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Question extends Component{
    state = {
        people: {'Jenny':'','Jackie':'','Sydney':'','Lisa':'','Robert':'','Mark':'','Tom':''}
    };
    constructor(){
        super();
        this.createQuestion.bind(this);
        this.processChoice.bind(this);
    }
    processChoice= (clickedPerson) =>{
        if (clickedPerson===this.props.value){
            this.props.answer = true;
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    createQuestion(){
        let quizoptions = [this.props.value];
        let listofnames = Object.keys(this.state.people)
        let currentName = listofnames.indexOf(this.props.value);
        if (currentName > -1) {
            listofnames.splice(currentName, 1);
        }
        for (let i=0; i < 4; i++) {
                let randomPerson = listofnames[Math.floor(Math.random()*listofnames.length)];
                quizoptions.push(randomPerson);
                let usedName = listofnames.indexOf(randomPerson)
                if (usedName > -1) {
                    listofnames.splice(usedName, 1);
                }
            }
        quizoptions = this.shuffle(quizoptions)
        return(
            <div class="card w-75">
            <img class="card-img-top" src={this.props.img} alt="Card image cap"></img>
            <div class="card-body btn-group-vertical">
                <h5 class="card-title">Who is this?</h5>
                {quizoptions.map(option => <button onclick={(option)=> this.props.onAnswer(option,this.props.id)} className= "btn btn-outline-info" data-toggle="buttons" autocomplete="off" key = {option}>{option}</button>)}
            </div>
            </div>);} 

    render(){
        return(this.createQuestion());
    }

}
export default Question;