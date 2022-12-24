// When you do onClick setState, the UI changes to new state but
//the console.log still remains with the previous state. This is becuase of the way React
// does its re-render asynchronously meaning 
// When a re-render is done asynchronously, it means that the update to the component's rendered output is not done immediately when the state or props change, but is instead scheduled to be done at a later time.
// re-render is done asunchronously to improve the performance of the application
// When a re-render is done asynchronously, it means that the update to the component's rendered output is not done immediately when the state or props change, but is instead scheduled to be done at a later time.

//-------------------------------------

//TO have console.log update immediately, one can do a function with a call back 
//That look may look like this example in class components 

onClick = {() => {
    this.setState(()=>{return{
        name: {'john'}
}})
}, () => {console.log(this.state)}}

//This is the preferred way of writing setState in class Components 