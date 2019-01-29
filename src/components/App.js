import React, { Component } from 'react';
import '../styles/App.css';
import data from '../cardData';
import Card from './Card';
import headshot from '../imgs/self.jpg';
import sand from '../imgs/sand.jpg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Card
                    logoURL={sand}
                    headline={data.headline}
                    name={data.name}
                    creditImageURL={headshot}
                    message={data.message}
                    url={data.url}
                    urlDisplayName={data.urlDisplayName}
                />
            </div>
        );
    }
}

export default App;