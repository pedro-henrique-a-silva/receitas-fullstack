import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import RecipesProvider from './context/recipesProvider';
import { theme } from './styles/theme';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <RecipesProvider>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </RecipesProvider>
    </BrowserRouter>,

  );
