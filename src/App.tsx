import { ChakraProvider } from '@chakra-ui/react';
import Waitlist from './components/Waitlist/Waitlist';

import theme from './theme';
import './theme/styles.css';
import '@fontsource/inter';

import './App.css';

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                <Waitlist />
            </ChakraProvider>
        </div>
    );
}

export default App;