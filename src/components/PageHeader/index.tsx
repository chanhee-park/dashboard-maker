import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ButtonProps } from '../../types/button-props';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: Array<ButtonProps>;
}

const PageHeader = ({ title, description, actions }: PageHeaderProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={2} direction="row" style={{ float: 'right' }}>
            {actions &&
              actions.map(({ label, onClick }) => (
                <Button key={label} variant="contained" onClick={onClick}>
                  {label}
                </Button>
              ))}
          </Stack>
        </Grid>
      </Grid>
      {description && <Typography variant="body1">{description}</Typography>}
    </Box>
  );
};

export default PageHeader;
