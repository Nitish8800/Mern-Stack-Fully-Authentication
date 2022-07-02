import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProgressBar(props) {
  return (
    <Box sx={{ position: "relative" }}>
      {/* <CircularProgress variant="determinate" {...props} /> */}
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={180}
        thickness={7}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          // animationDuration: "1ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={140}
        thickness={7}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" component="div" color="info.main">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

ProgressBar.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({ progress }) {
  const [limit, setProgress] = React.useState(0);

  React.useEffect(() => {
    for (let i = 0; i <= limit; i++) {
      const timer = setTimeout(() => {
        if (limit < progress) {
          setProgress(limit + 1);
        }

        return () => {
          clearInterval(timer);
        };
      });
    }
  }, [limit]);

  return <ProgressBar size={140} value={limit} />;
}
