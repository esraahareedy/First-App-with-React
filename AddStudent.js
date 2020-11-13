import React, {Component} from 'react'
import './Style/bootstrap.css'


class AddStudent extends Component
{
    state=
    {
        Name:null,
        Age:null,
    }
    handlesubmit = (e) =>
    {
        e.preventDefault()
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render()
    {
        return(
            <form className='student-form container' onSubmit={this.handlesubmit}>
                <input type="text" id="Name" onChange={this.handleChange}/>
                <input type="number" id="Age" onChange={this.handleChange}/>
                <input type="submit" id="Add"/>
            </form>
        )
    }
}
export default AddStudent