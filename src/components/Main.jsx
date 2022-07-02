import * as React from "react";
import { Grid, Typography, Box, Link } from "@mui/material";
import Cards from "./Cards";
import Graphs from "./Graphs";
import StudentsDetailsCard from "./StudentsDetailsCard";
import StudentsDetails from "./StudentsDetails";
import CircularStatic from "./ProgressBar";
import TestPassPercentage from "./TestPassPercentage";
import StudentsScoreCard from "./StudentsScoreCard";
import ProgressBar from "./ProgressBar";

const Main = () => {
  // console.log("stdent details", StudentsDetails);

  const CoursesDetails = [
    {
      work: "Course completion rate",
      percentage: "62",
    },
    {
      work: "Test pass rate",
      percentage: "74",
    },
  ];

  return (
    <>
      <Box
        p={10}
        pt={0}
        pb={10}
        //  style={{ border: "1px solid yellow" }}
      >
        <Grid
          item
          md={8}
          sm={12}
          lg={12}
          display="inline-flex"
          sx={{ marginBottom: 5, flexDirection: "column" }}
          // style={{ border: "1px solid red" }}
        >
          <Typography variant="subtitle2">
            Courses / Course Name /
            <Link href="#" underline="none" ml={0.5}>
              Course Progress
            </Link>{" "}
          </Typography>
        </Grid>

        <Grid
          container
          md={12}
          sm={12}
          lg={12}
          w={1}
          display="flex"
          style={{
            // border: "5px solid pink",
            marginBottom: "80px",
          }}
        >
          <Grid
            item
            container
            sm={12}
            md={12}
            lg={7}
            // style={{ border: "10px solid red" }}
          >
            <Grid
              item
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              sm={12}
              md={12}
              lg={12}
              gap={1}
              // style={{ border: "6px solid orange" }}
            >
              <Cards />
            </Grid>
            <Grid
              container
              //  style={{ border: "5px solid skyblue" }}
            >
              <Grid
                item
                lg={4.5}
                // style={{ border: "5px solid yellow" }}
              >
                {StudentsDetails.map((item) => {
                  return (
                    <>
                      <Grid
                        key={item.id}
                        //  style={{ border: "3px solid teal" }}
                      >
                        <StudentsDetailsCard item={item} />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <Grid
                sm={12}
                md={12}
                lg={7.32}
                item
                container
                p={3}
                gap={3}
                borderRadius={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  boxShadow: 3,
                  // margin: 1,
                  marginTop: 2.2,
                  height: "auto",
                  marginBottom: "50px",
                }}
                // style={{ border: "2px solid teal" }}
              >
                {CoursesDetails.map((item) => {
                  return (
                    <>
                      <Grid
                        item

                        //  style={{ border: "2px solid yellow" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                          // style={{ border: "2px solid red" }}
                        >
                          <Box
                            // style={{ border: "2px solid teal" }}
                            sx={{ mb: 3 }}
                            textAlign="center"
                          >
                            <Typography>{item.work}</Typography>
                          </Box>
                          <Box
                          // style={{ border: "2px solid teal" }}
                          >
                            {/* <ProgressBar /> */}
                            <CircularStatic progress={item.percentage} />
                          </Box>
                        </Box>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={12}
            md={12}
            lg={5}
            spacing={5}
            direction="row"
            maxWidth="lg"
            // style={{ border: "1px solid black" }}
          >
            <Typography ml={5.5} mt={-4} variant="subtitle2">
              Assignment Performance
            </Typography>
            <Grid
              item
              sm={12}
              md={12}
              p={1}
              borderRadius={3}
              sx={{ boxShadow: 3, margin: 1, marginLeft: 4 }}
              // style={{ border: "2px solid orange" }}
            >
              {" "}
              <Graphs />
            </Grid>
            <Grid
              p={2}
              borderRadius={3}
              sx={{
                boxShadow: 3,
                margin: 1,
                marginLeft: 4,
                marginTop: 5,
                height: "111px",
                backgroundColor: "#00FFFF",
              }}
              // style={{ border: "2px solid orange" }}
              item
            >
              {" "}
              <TestPassPercentage />
            </Grid>
          </Grid>

          <Grid
            container
            sm={12}
            md={8}
            lg={6}
            // display="flex"
            sx={{ marginTop: 5, marginLeft: 2 }}
            // style={{ border: "1px solid red" }}
          >
            <Typography variant="subtitle2">Students score board</Typography>
          </Grid>

          <Grid
            container
            mt={2.5}
            style={{
              // border: "1px solid black",
              height: "auto",
            }}
          >
            <Grid
              borderRadius={3}
              sx={{ boxShadow: 3 }}
              sm={12}
              md={12}
              lg={8}

              // style={{ border: "2px solid orange", height: "auto" }}
            >
              <StudentsScoreCard />
            </Grid>
            <Grid
              borderRadius={3}
              sx={{ boxShadow: 3, ml: 3 }}
              sm={12}
              md={8}
              lg={3.5}
              item
              style={
                {
                  //  border: "2px solid orange",
                  // height: "auto",
                }
              }
            ></Grid>
          </Grid>
          <Grid
            container
            mt={5}
            style={{
              // border: "1px solid black",
              height: "auto",
            }}
          >
            <Grid
              borderRadius={3}
              sx={{ boxShadow: 3 }}
              sm={12}
              md={8}
              lg={3.5}
              item
              style={
                {
                  //  border: "2px solid orange",
                  // height: "auto",
                }
              }
            >
              <Box container>
                <Grid
                  item
                  sx={{
                    m: 3,
                    mt: 2,
                  }}
                >
                  <Typography>Chapters progress</Typography>
                </Grid>
                <Grid item display="flex">
                  <Box
                    sx={{
                      width: 65,
                      height: 40,
                      borderRadius: 3,
                      m: 3,
                      mt: 0,
                      mr: 1,
                      backgroundColor: "success.main",
                    }}
                  ></Box>
                  <Typography p={1} pt={0} fontSize={16}>
                    Introduction to cyber security Rating
                  </Typography>
                </Grid>
              </Box>
            </Grid>
            <Grid
              borderRadius={3}
              sx={{ boxShadow: 3, ml: 3 }}
              sm={12}
              md={7}
              lg={8}
              item
            >
              <Box height={350}></Box>
              {/* <StudentsScoreCard style={{ display: "hidden" }} /> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
