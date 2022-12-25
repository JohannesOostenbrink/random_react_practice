// // This search Box is aimed at matching the search filed to the UI by filtering through a list 
// // of 'whatever' and present the UI with that which matches the searchfield

// // What do we need first? 

// <input
// className = 'search-box'
// type = 'search'
// placeholer = 'search monsters'
// >

// {/* // Great this is the basic set up for a search box. Now lets add some 
// functionality that will be added inside the input
// essentially this is an event handler  */}


// onChange = {(event) => {
//     const filteredMonsters = this.State.monster.filter((monster) => {
//     return monster.name.includes(event.target.value)
// })}}

// {/*// Now we have to set the UI to this new filteredMonsters
// We filtered through the monsters but we haven't actually set the new state */}

// this.setState(() => {
//     return {monsters: filteredMonsters}
// })

// {/* Now we have to let everything inserted in the searchfield be small caps. otherwise it wont always work
// includes is not case sensitive  /*<}

// onChange = {(event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     const filteredMonsters = this.State.monster.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchString)
// })}}

// Now we have the problem that the UI once you remove the searchstring it 
//doesn't restore to its initial state. Thats becuase the filtered monsters 
//is in the return statement creating a new state. Instead this should be a function we call on when we need it

// render() {
//     const filteredMonsters = this.State.monster.filter((monster) => {
//          return monster.name.toLocaleLowerCase().includes(this.state.searchField)})
//          // now the problem is that we dont have access to searchString as search string is part of the event onChange
//          // We can resolve this by adding searchString as part of our state in constructor with an empty ''
//     return(

        //now we can adjust our functionality as follows 

//         onChange = {(event) => {
//             const searchString = event.target.value.toLocaleLowerCase
//             this.setState(() => {
//                 return {searchString}
//             })
//         }}

//     )
// }

// so essentially what we've done here is we added a searchField/ string to the constructor state so that it lives within our state
// then we created a function filteredMonsters which is called when the searchField is utilized 
// it lives in our render but not in our UI return because otherwise filtered monsters will be our new state 
// then we added functionality to our input search with an event
// this onChange event compares the value in the searchfield and sets it as state
// Filtered monsters will display what is written in the searchfield and searchfield value will be set to state 