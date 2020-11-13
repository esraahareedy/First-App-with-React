import React, {Component} from 'react'
import './Style/student.css'
import './Style/bootstrap.css'

import StudentData from './StudentData'
import AddStudent from './AddStudent'

class Student extends Component
{
    state = {
        data:[
            {Name:'Yara Ahmed',Age:6},
            {Name:'Khadega Emad',Age:5},
            {Name:'Boody Ahmed',Age:4},
            {Name:'Amar Emad',Age:3}
        ]
    }
    render()
    {
        return(
                <div className="student container">
                    <div className="student-text">
                        <h1>Student List</h1>
                        <StudentData data={this.state.data}/>
                        <AddStudent/>
                    </div>
                </div>
        )
    }
}
export default Student;
