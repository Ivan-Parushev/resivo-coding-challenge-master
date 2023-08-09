import Typography from '@mui/material/Typography';
import { Door } from '@/models/Door';
import { DetailPageContainer } from '@/ui/layout/DetailPageContainer';
import { DetailPageItem } from '@/ui/layout/DetailPageItem';
import formatISOdateToLocalDatetime from '@/ui/lib/formatISOdateToLocalDatetime';

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  const textColor =
    door.connectionStatus === 'online' ? 'success.main' : 'error.main';
  return (
    <DetailPageContainer>
      <DetailPageItem label="ID">
        <Typography>{door.id}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Building">
        <Typography>{door.buildingName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Apartment">
        <Typography>{door.apartmentName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection type">
        <Typography>{door.connectionType}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection status">
        <Typography color={textColor}>{door.connectionStatus}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection update">
        <Typography>
          {formatISOdateToLocalDatetime(door.lastConnectionStatusUpdate)}
        </Typography>
      </DetailPageItem>
    </DetailPageContainer>
  );
}
