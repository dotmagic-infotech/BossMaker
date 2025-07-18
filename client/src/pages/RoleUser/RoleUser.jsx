// React Imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mui Imports
import { DataGrid } from '@mui/x-data-grid';
import { Button, Card, Divider, IconButton, Modal, Switch, Typography, Box, InputAdornment, TextField } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Custom Component
import { useToast } from '../../components/ToastProvider/ToastProvider';
import PasswordField from '../../components/PasswordField/PasswordField';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

export default function RoleUser() {

    // Hooks
    const { showToast } = useToast();
    const navigate = useNavigate();

    // State
    const [userId, setUserId] = useState(null);
    const [roleUSerName, setRoleUSerName] = useState("")
    const [changePassword, setChangePassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleClose = () => {
        setChangePassword(null);
        setDeleteModalOpen(false);
    };

    const handleDeleteRole = (row) => {
        setRoleUSerName(`${row.firstName || ''} ${row.lastName || ''}`);
        setUserId(row.id);
        setDeleteModalOpen(true)
    };

    const handleConfirmDelete = () => {
        setDeleteModalOpen(false);
        console.log("Delelte User :::", userId);
        showToast("Deleted successfully", "success");
    };

    const columns = [
        {
            field: 'username', headerName: 'USER NAME', minWidth: 150, flex: 0.5, headerAlign: 'start', align: 'start',
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        { field: 'email', headerName: 'EMAIL', minWidth: 150, flex: 0.5, headerAlign: 'start', align: 'start' },
        { field: 'mobile', headerName: 'MOBILE NUMBER', minWidth: 110, flex: 0.5, headerAlign: 'start', align: 'start' },
        {
            field: 'status', headerName: 'STATUS', minWidth: 150, headerAlign: 'start', align: 'start',
            renderCell: (params) => (
                <Box>
                    <Switch color="success" onClick={() => console.log('status', params.row)} />
                </Box>
            )
        },
        {
            field: 'Action', headerName: 'ACTIONS', minWidth: 150, flex: 0.5, headerAlign: 'center', align: 'center',
            renderCell: (params) => (
                <Box direction="row" spacing={1}>
                    <IconButton onClick={() => console.log('Edit', params.row)}>
                        <CreateOutlinedIcon fontSize="medium" />
                    </IconButton>
                    <IconButton onClick={() => showToast('Success! Something happened.', 'success')}>
                        <LockOpenOutlinedIcon fontSize="medium" />
                    </IconButton>
                    <IconButton onClick={() => setChangePassword(params.row.id)}>
                        <PasswordOutlinedIcon fontSize="medium" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteRole(params.row)}>
                        <DeleteOutlineOutlinedIcon fontSize="medium" />
                    </IconButton>
                </Box>
            )
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', email: 'test@gmail.com', firstName: 'Jon', mobile: 9876543215 },
        { id: 2, lastName: 'Lannister', email: 'test@gmail.com', firstName: 'Cersei', mobile: 7894561235 },
        { id: 3, lastName: 'Lannister', email: 'test@gmail.com', firstName: 'Jaime', mobile: 1593572846 },
        { id: 4, lastName: 'Stark', email: 'test@gmail.com', firstName: 'Arya', mobile: 465781235 },
        { id: 5, lastName: 'Targaryen', email: 'test@gmail.com', firstName: 'Daenerys', mobile: 4657981326 },
        { id: 6, lastName: 'Melisandre', email: 'test@gmail.com', firstName: 'raj', mobile: 1237894659 },
        { id: 7, lastName: 'Clifford', email: 'test@gmail.com', firstName: 'Ferrara', mobile: 3216549875 },
        { id: 8, lastName: 'Frances', email: 'test@gmail.com', firstName: 'Rossini', mobile: 6549871237 },
        { id: 9, lastName: 'Roxie', email: 'test@gmail.com', firstName: 'Harvey', mobile: 7891234651 },
    ];

    return (
        <Box style={{ padding: "1.25rem", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant='subtitle1' fontSize="1.5rem" fontWeight={500}>Roles & Permissions</Typography>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <TextField
                        size="small"
                        placeholder="Search user..."
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
                    <Button sx={{ bgcolor: "black", color: "white", fontWeight: '500' }} variant="outlined" startIcon={<AddOutlinedIcon />} onClick={() => navigate("/add-role")}>
                        Add User
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
                open={changePassword}
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
                        <Typography variant='h5' fontWeight="medium">Change Password</Typography>
                        <div style={{ backgroundColor: "black", color: "white", padding: "5px", borderRadius: "50%", display: "flex", cursor: "pointer" }} onClick={() => handleClose()}>
                            <CloseOutlinedIcon fontSize="medium" fontWeight={600} />
                        </div>
                    </Box>
                    <Divider sx={{ margin: "10px -16px 20px -16px" }} />
                    <PasswordField
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained"
                            sx={{
                                mt: 2, backgroundColor: 'black', color: 'white',
                                '&:hover': {
                                    backgroundColor: '#333',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </Card>
            </Modal>


            {/* Delete Modal */}
            <DeleteModal
                open={deleteModalOpen}
                title={roleUSerName}
                description={`This user will be deleted permanently.`}
                onClose={handleClose}
                onDelete={handleConfirmDelete}
            />
        </Box>
    );
}
