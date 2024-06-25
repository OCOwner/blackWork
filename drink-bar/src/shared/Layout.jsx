import { styled } from 'styled-components';
import DeskTopHeader from '../components/header/DeskTopHeader';

const Layout = ({ children }) => {
  return (
    <Container>
      <DeskTopHeader />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div``;

export default Layout;
