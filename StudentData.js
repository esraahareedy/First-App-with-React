import React, { Component } from 'react'

class StudentData extends Component
{
    handleData = this.props.data.map(Student => {
        return Student.Age > 4? (
            <div key={Math.random}>
                <h2>Name:{Student.Name}</h2>
                <h2>Age:{Student.Age}</h2>
                <hr/>
            </div>
        ) : null
    })
    render()
    {
        return(
            <div>
                {this.handleData}
            </div>
        )
    }
}
export default StudentData