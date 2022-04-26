// import React, { Component } from 'react';


// class Counter_test extends Component {

//     state = {
//         count: 0,
//         tags : ['tag1','tag2','tag3','tag 4']
//     };
    
//     styles= {
//         fontSize:'15px',
//         fontWeight: 'bold',

//     };

//     //conditional method

//     renderTags(){
//         if(this.state.tags.length === 0) return <p>There are no tags</p>
        
//         return(
//             <ul>
//                 {this.state.tags.map(tag => <li key={tag}>This is a { tag }</li> )}
//             </ul>
//         ); 
//     }

//     //EventHandling

//     handleClick = () => {

//         this.setState({count : this.state.count += 1})

//     }

//     //  General render Element

//         render() {
            
//         return (
//         <div className='container'>
//             <h1>CountApp</h1>
//             <span style={this.styles} className={this.changeBadgeClasses()}>{this.formatCount()}</span><br />
//             <button onClick={this.handleClick} className='btn btn-default'>Increment</button>

//             {/* list element below */}

//            {this.renderTags()}

//             </div>);
//             }

//     changeBadgeClasses() {
//         let classes = 'badge m-2 ';
//         classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
//         return classes;
//     }

//     formatCount(){
//         const {count} = this.state;

//         return count === 0 ? 'Zero' : count; 
//     }

   
// }
 
// export default Counter_test;