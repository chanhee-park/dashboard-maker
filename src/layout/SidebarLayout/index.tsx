import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Styles from './index.style';

export interface NavigationItem {
  icon?: React.ReactNode;
  label: string;
  path: string;
}

export interface SidebarLayoutProps {
  appTitle: string;
  navigationItems: NavigationItem[];
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  appTitle,
  navigationItems,
  children,
}) => {
  const navigate = useNavigate();
  const onClickNavItem = (item: NavigationItem) => {
    navigate(item.path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight="800"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
            }}
          >
            {appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Styles.Sidebar>
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  onClickNavItem(item);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                  }}
                >
                  {item.icon ? item.icon : <CategoryRoundedIcon />}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Styles.Sidebar>
      <Styles.MainPage>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Styles.MainPage>
    </Box>
  );
};

export default SidebarLayout;
