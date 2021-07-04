import React from 'react';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="small"
            >
                Send
      </Button>

        </div>
    );
}