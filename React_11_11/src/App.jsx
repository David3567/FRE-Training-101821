import React from 'react';
import Hello from './Hello';

// const App = () => <Hello />;


class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
            </div>
        )
    }
}

export default App;