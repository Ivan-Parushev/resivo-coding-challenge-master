import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Door } from '@/models/Door';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import formatISOdateToLocalDatetime from '@/ui/lib/formatISOdateToLocalDatetime';

interface DoorListProps {
  doors: Door[];
}

const columns: GridColDef<Door>[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'buildingName',
    headerName: 'Building',
    flex: 1,
  },
  {
    field: 'apartmentName',
    headerName: 'Apartment',
    flex: 1,
  },
  {
    field: 'connectionType',
    headerName: 'Connection type',
    flex: 1,
  },
  {
    field: 'connectionStatus',
    headerName: 'Connection status',
    flex: 1,
    renderCell: ({ row: door }) => {
      const textColor =
        door.connectionStatus === 'online' ? 'success.main' : 'error.main';

      return <Typography color={textColor}>{door.connectionStatus}</Typography>;
    },
  },
  {
    field: 'lastConnectionStatusUpdate',
    headerName: 'Last connection',
    flex: 1,
    renderCell: ({ row: door }) => {
      return (
        <Typography>
          {formatISOdateToLocalDatetime(door.lastConnectionStatusUpdate)}
        </Typography>
      );
    },
  },
];

export function DoorList({ doors }: DoorListProps) {
  const router = useRouter();

  const onDoorRowClick = useCallback(
    (gridRow: GridRowParams<Door>) => {
      router.push({
        pathname: '/doors/[doorId]',
        query: { doorId: gridRow.id },
      });
    },
    [router],
  );

  return (
    <DataGrid
      autoHeight
      hideFooter
      rows={doors}
      columns={columns}
      disableRowSelectionOnClick
      onRowClick={onDoorRowClick}
    />
  );
}
