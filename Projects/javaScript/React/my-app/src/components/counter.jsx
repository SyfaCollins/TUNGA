import React, { Component } from 'react';


class Counter extends Component {

    
    styles= {
        fontSize:'15px',
        fontWeight: 'bold',

    };

    

    

    //  General render Element

        render() {
            
        return (
        <div className='container'>
            

            <div>
            {this.props.children}
            <span style={this.styles} className={this.changeBadgeClasses()}>{this.formatCount()}</span>
            </div>

           
            <button 
            onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-default btn-sm'>+</button>


            <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2">
                -
            </button>

            {/* list element below */}

           {/* {this.renderTags()} */}

            </div>);
            }

    changeBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;

        return count === 0 ? 'Zero' : count; 
    }

   
}
 
export default Counter;