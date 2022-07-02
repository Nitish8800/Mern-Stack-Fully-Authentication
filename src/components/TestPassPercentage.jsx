import { Card, CardHeader, Grid } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiCardHeader-subheader	": {
        color: "#000000",
        marginTop: "15px",
        fontSize: "14px",
      },
    },

    avatar: {
      color: "#000000",
      paddingRight: "50px",
      fontSize: "28px",
    },
  })
);

const TestPassPercentage = () => {
  const classes = useStyles();
  return (
    <div>
      <Card
        style={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#00FFFF",
        }}
        className={classes.root}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings" className={classes.avatar}>
              74%
            </IconButton>
          }
          subheader={"Test Pass Percentage"}
        />
      </Card>
    </div>
  );
};

export default TestPassPercentage;
