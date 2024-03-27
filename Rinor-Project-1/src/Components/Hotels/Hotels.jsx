/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  ListItemIcon,
  MenuItem,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { data } from "./HotelsData"; // Import data from your generated file

const Example = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const columns = useMemo(
    () => [
      {
        id: "hotels", 
        header: "Hotels",
        columns: [
          {
            accessorFn: (row) => row.name, 
            id: "name",
            header: "Name",
            size: 200,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  alt="avatar"
                  height={50}
                  src={row.original.photos[0]}
                  loading="lazy"
                  style={{ border: "2px solid teal", borderRadius: "5px" }}
                />
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "city",
            header: "City", 
            size: 150,
          },
          {
            accessorKey: "address",
            header: "Address",
            size: 150,
          },
          {
            accessorKey: "distance",
            header: "Distance",
            size: 150,
          },
          {
            accessorKey: "rating",
            header: "Rating",
            size: 150,
          },
          {
            accessorKey: "cheapestPrice",
            header: "Cheapest Price", 
            size: 150,
          },
          // {
          //   accessorKey: "featured",
          //   header: "Featured", 
          //   size: 150,
          // },
        ],
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [5, 10, 15, 20, 25, 30],
      shape: "rounded",
      variant: "outlined",
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "16px", 
          textAlign: "center", 
          maxWidth: "100%",
        }}
      >
        <img
          alt="avatar"
          src={row.original.photos[0]}
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto", border: "2px solid teal", borderRadius: "5px", marginBottom: "16px" }}
        />
        <Typography variant="h5" sx={{ marginBottom: "8px" }}>{row.original.title}</Typography>
        <Typography variant="body1">{row.original.desc}</Typography>
      </Box>
    ),
    
    
    renderRowActionMenuItems: ({ closeMenu, table }) => [
      <MenuItem
        key="edit"
        onClick={() => {
          // Edit logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        Edit
      </MenuItem>,
      <MenuItem
        key="delete"
        onClick={() => {
          const selectedRows = table.getSelectedRowModel().flatRows;
          selectedRows.forEach((row) => table.deleteRow(row.id));
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        Delete
      </MenuItem>,
    ],
  });

  return (
    <>
      <Box mb={2} textAlign="right">
        <Button variant="contained" color="primary" onClick={handleModalOpen}>
          ADD NEW+
        </Button>
      </Box>
      <MaterialReactTable table={table} />

      {/* New Hotels Form */}
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
            maxHeight: "90%",
            overflowY: "auto",
          }}
        >
          <form>
            <Typography variant="h5">Add New Booking</Typography>
            <TextField
              variant="standard"
              label="Hotel Name"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="City"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="Address"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="Distance"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="Rating"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="Cheapest Price"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="Featured"
              fullWidth
              margin="normal"
            />
            {/* Other fields */}
            <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }} >
            <Button
              variant="contained"
              color="primary"
              onClick={handleModalClose}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleModalClose}
            >
              Add Booking
            </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Example;
