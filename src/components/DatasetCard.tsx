import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Dataset } from '../types/dataset';

const DatasetCard = ({ dataset }: { dataset: Dataset }) => {
  const navigate = useNavigate();

  const openDetailView = () => {
    console.log(dataset.id);
    navigate(`${dataset.id}`);
  };

  return (
    <Card sx={{ minWidth: 320 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {dataset.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {dataset.author ?? 'unknown author'}
        </Typography>
        <Typography variant="body2">
          {dataset.description ?? 'no description'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={openDetailView}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default DatasetCard;
