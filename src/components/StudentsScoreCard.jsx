import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { LinearProgress, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, progress) {
  return { id, date, name, shipTo, paymentMethod, progress };
}

const rows = [
  createData(0, "Darlene Robertson", "user id", "Incomplete", "1240 score", 50),
  createData(
    1,
    "Darlene Robertson",
    "user id",
    "Incomplete",
    "1580 score",
    100
  ),
  createData(2, "Darlene Robertson", "user id", "Complete", "250 score", 50),
  createData(
    3,
    "Darlene Robertson",
    "user id",
    "Incompleted",
    "1290 score",
    20
  ),
  createData(4, "Darlene Robertson", "user id", "Incomplete", "1580 score", 40),
  createData(5, "Darlene Robertson", "user id", "Completed", "250 score", 90),
  createData(5, "Darlene Robertson", "user id", "Incomplete", "2450 score", 20),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function StudentsScoreCard() {
  const [alignment, setAlignment] = React.useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table
        size="small"
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "2px solid transparent",
            // paddingBottom: "10px",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              {/* <TextField>TOP 3</TextField> */}
              {/* <TextField>ALL STUDENTS</TextField> */}

              <ToggleButtonGroup
                sx={{
                  border: "none",
                  boxShadow: "none",
                  // overflow: "hidden",
                }}
                // fullWidth
                value={alignment}
                exclusive
                onChange={(event, newAlignment) => {
                  handleChange(event, newAlignment);
                }}
              >
                {["Top 3", "All Students"].map((item, index) => {
                  return (
                    <ToggleButton
                      color={index === 0 ? "primary" : "secondary"}
                      sx={
                        alignment == item
                          ? {
                              border: "none",
                              fontWeight: "500",

                              margin: 0,
                              paddingX: "30px",
                              borderBottom: "2px solid #7B68EE",
                            }
                          : {
                              border: "none",

                              fontWeight: "500",
                              margin: 0,
                              paddingX: "30px",
                              borderBottom: "2px solid transparent",
                            }
                      }
                      value={item}
                    >
                      {item}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell align="right">
              <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3, ml: 1 }}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Button
                  m="10px"
                  //   variant="contained"
                  style={{ textTransform: "none" }}
                  startIcon={<DownloadIcon />}
                >
                  Download scorecard
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.shipTo}</TableCell>
              <TableCell align="right">{row.paymentMethod}</TableCell>
              <TableCell align="left">
                <Typography
                  sx={{
                    fontSize: "14px",
                    mt: "-10px",
                  }}
                >
                  {row.progress}%
                </Typography>

                <LinearProgress
                  variant="determinate"
                  color="info"
                  sx={{ height: 10 }}
                  value={row.progress}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={preventDefault}
        sx={{ mt: 3, ml: 1 }}
        style={{ textDecoration: "none" }}
      >
        <Button
          m="10px"
          //   variant="contained"
          style={{ textTransform: "none" }}
          startIcon={<KeyboardArrowDownIcon />}
        >
          See all
        </Button>
      </Link>
    </React.Fragment>
  );
}
