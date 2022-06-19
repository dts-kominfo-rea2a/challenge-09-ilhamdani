// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '1em', 
                margin: '0 auto',
                background: 'lightblue', 
                padding: '16px',
                borderRadius: '20px',
                width: '100%',
                marginBottom: '20px' }}>

                <img src={this.props.photo} alt='photo' width='200px' height='200px' style={{ borderRadius: '100px'}}/>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5em',
                    width: '100%'
                }}>
                    <h6>{this.props.name}</h6>
                    {this.props.phone} <br />
                    {this.props.email}
                </div>
            </div>
        )
    }
}

export default Contact;