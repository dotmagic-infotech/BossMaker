// React Imports
import { useState } from 'react';

// Mui Imports
import { DataGrid } from '@mui/x-data-grid';
import { Button, Card, Divider, IconButton, Modal, Switch, Typography, Box, InputAdornment, TextField } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Custom Component
import { useToast } from '../../components/ToastProvider/ToastProvider';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

export default function Category() {

    // Hooks
    const { showToast } = useToast();

    // State
    const [openCategory, setOpenCategory] = useState(false)
    const [category, setCategory] = useState("")
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleClose = () => {
        setOpenCategory(false);
        setDeleteModalOpen(false)
        setEditCategoryId(null);
        setCategory("");
    };

    const handleEditCategory = (row) => {
        setEditCategoryId(row.id);
        setCategory(row.category);
        setOpenCategory(true);
    };

    const handleDeleteCategory = (row) => {
        setCategory(row.category);
        setEditCategoryId(row.id);
        setDeleteModalOpen(true)
    };

    const handleConfirmDelete = () => {
        setDeleteModalOpen(false);

        console.log("Delelte Category :::", editCategoryId)
        showToast("Deleted successfully", "success");
    };

    const columns = [
        {
            field: 'category',
            headerName: 'Category',
            minWidth: 150,
            flex: 0.5,
            headerAlign: 'start',
            align: 'start',
        },
        {
            field: 'status',
            headerName: 'CATEGORY STATUS',
            headerAlign: 'start',
            align: 'start',
            flex: 0.5,
            renderCell: (params) => (
                <Box>
                    <Switch color="success" onClick={() => console.log('status', params.row)} />
                </Box>
            )
        },
        {
            field: 'Action',
            headerName: 'ACTIONS',
            minWidth: 150,
            flex: 0.5,
            headerAlign: 'start',
            align: 'start',
            renderCell: (params) => (
                <Box direction="row" spacing={1}>
                    <IconButton onClick={() => handleEditCategory(params.row)}>
                        <CreateOutlinedIcon fontSize="medium" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteCategory(params.row)}>
                        <DeleteOutlineOutlinedIcon fontSize="medium" />
                    </IconButton>
                </Box>
            )
        },
    ];

    const rows = [
        { id: 1, category: 'Development' },
        { id: 2, category: 'Design' },
        { id: 3, category: 'Marketing' },
        { id: 3, category: 'Business' },
        { id: 3, category: 'Photography' },
        { id: 3, category: 'Personal Development' },
    ];

    const handleAddCategory = () => {
        if (category.trim() === "") {
            showToast('Please enter a category name.', 'error');
            return;
        }

        try {
            if (editCategoryId) {
                const payload = { id: editCategoryId, category };
                console.log("Updating category:", payload);
                // await updateCategoryApi(payload);
                showToast("Category updated successfully!", "success");
            } else {
                const payload = { category };
                console.log("Adding new category:", payload);
                // await addCategoryApi(payload);
                showToast("Category added successfully!", "success");
            }

            handleClose();
        } catch (error) {
            showToast("Something went wrong.", "error");
        }
    };

    return (
        <Box style={{ padding: "1.25rem", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant='subtitle1' fontSize="1.5rem" fontWeight={500}>Category</Typography>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <TextField
                        size="small"
                        placeholder="Search category..."
                        variant="outlined"
                        // value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button sx={{ bgcolor: "black", color: "white", fontWeight: '500' }} variant="outlined" startIcon={<AddOutlinedIcon />} onClick={() => setOpenCategory(true)}>
                        Add Categoty
                    </Button>
                </div>
            </div>
            <Box sx={{ marginTop: "10px", height: "100%" }}>
                <DataGrid
                    className="custom-datagrid"
                    rows={rows}
                    columns={columns}
                    disableRowSelectionOnClick
                    disableColumnMenu
                    pageSizeOptions={[5]}
                    rowHeight={50}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    sx={{
                        height: "calc(100% - 5.3rem)",
                        borderRadius: "10px",
                        '& .MuiDataGrid-cell:focus': {
                            outline: 'none',
                        },
                        '& .MuiDataGrid-cell:focus-within': {
                            outline: 'none',
                        },
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: "rgb(250, 250, 251)"
                        },
                    }}
                />
            </Box>

            <Modal
                open={openCategory}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Card
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        borderRadius: '1.2rem',
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", mb: 1, }}>
                        <Typography variant='h5' fontWeight="medium">{editCategoryId ? "Update" : "Add"} Category</Typography>
                        <div style={{ backgroundColor: "black", color: "white", padding: "5px", borderRadius: "50%", display: "flex", cursor: "pointer" }} onClick={() => handleClose()}>
                            <CloseOutlinedIcon fontSize="medium" fontWeight={600} />
                        </div>
                    </Box>
                    <Divider sx={{ margin: "10px -16px 20px -16px" }} />
                    <Box>
                        <Typography sx={{ mx: 0.5, mb: 0.4 }}>Category Name</Typography>
                        <TextField
                            fullWidth
                            id="category"
                            type='text'
                            placeholder="Category Name"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "end", gap: "10px", width: "100%", mt: 2 }}>
                        <Button variant="contained" color="primary" sx={{ backgroundColor: "black", width: "100px", borderRadius: "10px", padding: "10px", fontWeight: "500", fontSize: "18px" }}
                            onClick={handleAddCategory}>
                            {editCategoryId ? "Update" : "Save"}
                        </Button>
                        <Button variant="contained" color="" sx={{ backgroundColor: "white", width: "100px", borderRadius: "10px", padding: "10px", fontWeight: "500", fontSize: "18px" }}
                            onClick={() => handleClose()}>
                            Cancel
                        </Button>
                    </Box>
                </Card>
            </Modal>

            {/* Delete Modal */}
            <DeleteModal
                open={deleteModalOpen}
                title={category}
                description={`This category will be deleted permanently.`}
                onClose={handleClose}
                onDelete={handleConfirmDelete}
            />
        </Box>
    );
}
