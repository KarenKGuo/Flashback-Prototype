import React, { Component } from 'react';
import Question from './questions';

class Quiz extends Component{
    state = {
        asks: ['Who is this?'],
        people: {'Jenny':{},'Jackie':{},'Sydney':{},'Lisa':{},'Robert':{},'Mark':{},'Tom':{}},
        count: 0,
        questions: [{id: 0, value:'Jenny', img:'https://media3.s-nbcnews.com/i/newscms/2021_07/2233721/171120-smile-stock-njs-333p_8584129ff92611cc2938990b1405b0ce.jpg', answer: true}, 
                    {id: 1, value:'Sydney', img:'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80', answer: true},
                    {id: 2, value:'Robert',img:'https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg', answer:true},
                    {id: 3, value:'Lisa', img:'https://media3.s-nbcnews.com/i/newscms/2021_07/2233721/171120-smile-stock-njs-333p_8584129ff92611cc2938990b1405b0ce.jpg', answer: true}, 
                    {id: 4, value:'Tom', img:'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80', answer: true}]
    };

    updateCount = (choice, questionId) =>{
        if (choice===this.state.questions[questionId].value){
            this.setState({questions: this.state.questions[questionId].answer=true})
        }
    }

    showCorrect=()=>{
        for(let question in this.state.questions){
            if(question.answer===true){
                this.setState({count:this.state.count+1})
            }
        }
    }

    render(){
        return(
            <div>
            <h1>{this.state.count}{this.state.questions[0].value}</h1>
            <div class="card-deck">
                {this.state.questions.map(question => <Question key={question.id} value={question.value} img ={question.img} onAnswer = {this.updateCount}/>)}
            </div>
            <button onclick ={this.showCorrect} className ='btn btn-info btn-lg'>See Correct Answer</button>
            </div>


            );
    }  
}
export default Quiz;
