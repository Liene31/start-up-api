import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const server = express();

server.get("/api", (req, res) => {
  let filteredData = startups;

  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    filteredData = filteredData.filter((data) => {
      return data.industry.toLowerCase() === industry.toLowerCase();
    });
  }

  if (country) {
    filteredData = filteredData.filter((data) => {
      return data.country.toLowerCase() === country.toLowerCase();
    });
  }

  if (continent) {
    filteredData = filteredData.filter((data) => {
      return data.continent.toLowerCase() === continent.toLowerCase();
    });
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter((data) => {
      return (
        data.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
      );
    });
  }

  if (has_mvp) {
    filteredData = filteredData.filter((data) => {
      return data.has_mvp === JSON.parse(has_mvp.toLowerCase());
    });
  }

  res.json(filteredData);
});

server.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
