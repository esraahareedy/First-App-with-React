import React, {Component} from 'react'
import './Style/home.css'
import './Style/bootstrap.css'

class Home extends Component
{
    render()
    {
        return(
            <div class="main">
                <div class="container flex h-100">
                    <div class="main-text">
                        <h1>
                            Promote Your App with SoftLand
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        </p>
                        <button type="button" class="btn btn-lg btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
