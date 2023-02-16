import { styled } from '@mui/material/styles';

const MainPage = styled('div')`
  margin-top: 64px;
  width: 100%;
  background-color: #fafcff;
  height: calc(100vh - 64px);
  overflow-y: scroll;
`;

const Sidebar = styled('div')`
  margin-top: 64px;
  padding-top: 8px;
  width: 270px;
  height: calc(100vh - 64px);
  overflow: hidden;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default { MainPage, Sidebar };
