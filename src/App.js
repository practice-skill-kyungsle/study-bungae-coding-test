// component
import Main from './page/Main';
// style
import './App.css';
// external library
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Main />
            </div>
        </QueryClientProvider>
    );
}

export default App;
