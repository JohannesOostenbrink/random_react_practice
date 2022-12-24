
//This is an event handler in class component
//When button is clicked the name changes 

handleClick = () => {
    this.setState({name:'John'});

}


//<button onClick = {this.handleClick}>Change Name</button>



// You can also write the function inside the onClick event like this


<button onClick = {() => {this.setState(name:John)}}>Change Name</button>
