//This is an example of mapping through an object with an array of monsters

this.state = {
    monsters [
        monster1 {
            name:Hans
        },
        monster2 {
            name: Hannah 
        },

        monster3 {
            name: Leeham
        },
    ]
}

render() {
    return(
        <div className = 'Monsters'>
        {this.state.monsters.map(monster) => {
            return <h1>{monster.name}</h1>;
        }}
        
        </div>
    )
}