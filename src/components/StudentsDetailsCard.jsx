import { Card, CardHeader, Grid } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      color: "#264E7D",
    },
  })
);

const StudentsDetailsCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid mt={3} mb={3} ml={-0.5} width="230px" height="85px">
      <Card sx={{ borderLeft: "14px solid #264E7D" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" className={classes.avatar}>
              {item.component}
            </IconButton>
          }
          title={item.number}
          subheader={item.courseStatus}
        />
      </Card>
    </Grid>
  );
};

StudentsDetailsCard.propTypes = {
  item: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default StudentsDetailsCard;
