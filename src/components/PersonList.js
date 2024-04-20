import React, {Component} from "react";
import Person from "./Person";

class PersonList extends Component {

    constructor() {
        super()
        this.state = {
            persons: [
                {
                    id: 1,
                    name: "Dixit Jain",
                    age: 26
                },{
                    id: 2,
                    name: "Mayanka Jain",
                    age: 27
                },{
                    id: 3,
                    name: "Ashish Jain",
                    age: 22
                }
            ]
        }
    }

render() {
    console.log(`${this.state.persons.values}`)
    const personList = this.state.persons.map(item => <Person key={item.id} person={item}/>)
    return (
        <div>{personList}</div>
    )
}

}


export default PersonList;