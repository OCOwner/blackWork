import { createGlobalStyle, styled } from 'styled-components';
import DeskTopHeader from '../components/header/DeskTopHeader';

// 전역 스타일 초기화
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle /> {/* 전역 스타일 초기화 적용 */}
      <DeskTopHeader />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div``;

export default Layout;
