import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CakeIcon from '@mui/icons-material/Cake';
import PinDropIcon from '@mui/icons-material/PinDrop';
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";


//Stlyes used on the actor detail page
const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const ActorDetails = ({ actor }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    //Return statement to render the actor details page
    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {actor.biography}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<CakeIcon />} label={`${actor.birthday}`} />
                <Chip
                    icon={<PinDropIcon />}
                    label={`${actor.place_of_birth}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${actor.popularity}`}
                />

            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>

        </>
    );
};
export default ActorDetails;
