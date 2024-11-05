import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const Lines = styled(RotatingLines)`
  margin: auto;
  display: block;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;