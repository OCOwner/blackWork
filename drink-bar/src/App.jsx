import './App.css';
import MainRouter from './shared/MainRouter';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;

// theme props Styled Components를 이용한 스타일링 예시
// const StyledButton = styled.button`
//   background-color: ${props => props.theme.color.neonGreen};
// `;
