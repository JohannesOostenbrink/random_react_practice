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

