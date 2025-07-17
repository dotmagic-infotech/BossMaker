import { Card, Grid, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Dashboard = () => {
    return (
        <div style={{ padding: "10px" }}>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Card sx={{ padding: "12px" }}>
                        <SchoolIcon sx={{ fontSize: 40 }} />
                        <Typography fontSize={20} fontWeight={600}>130</Typography>
                        <Typography>Courses</Typography>
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Card sx={{ padding: "12px" }}>
                        <GroupAddIcon sx={{ fontSize: 40 }} />
                        <Typography fontSize={20} fontWeight={600}>55</Typography>
                        <Typography>Instructors</Typography>
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Card sx={{ padding: "12px" }}>
                        <EmojiPeopleIcon sx={{ fontSize: 40 }} />
                        <Typography fontSize={20} fontWeight={600}>60</Typography>
                        <Typography>Participants</Typography>
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Card sx={{ padding: "12px" }}>
                        <AddReactionIcon sx={{ fontSize: 40 }} />
                        <Typography fontSize={20} fontWeight={600}>25</Typography>
                        <Typography>Student (optional)</Typography>
                    </Card>
                </Grid>
            </Grid>
            <h1>Welcome to Dashboard.</h1>
            <p>This is your module content.</p>
        </div>
    );
};

export default Dashboard;
