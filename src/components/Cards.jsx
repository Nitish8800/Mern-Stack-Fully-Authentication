import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Counter from "./Counter";

const cardsData = [
  {
    title: "120",
    description: "Avg course completion time",
  },
  {
    title: "160",
    description: "Avg course completion time",
  },
  {
    title: "180",
    description: "Avg course completion time",
  },
];

const Cards = () => {
  return (
    <>
      {cardsData.map((el, i) => {
        return (
          <Card
            key={i}
            sx={{
              boxShadow: 3,
              bgcolor: "info.main",
              borderRadius: 3,
              p: 1,
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                align="center"
                color="#fff"
                sx={{ margin: "-5px auto" }}
              >
                {/* {el.title} hr */}
                <Counter number={el.title} />
              </Typography>
              <Typography
                sx={{ width: 155 }}
                variant="body2"
                align="center"
                color="#fff"
              >
                {el.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Cards;
