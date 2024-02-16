import { createSlice } from "@reduxjs/toolkit";
import Health from "../assets/Group 56.png";
import Materials from "../assets/Vector(7).png";
import Energy from "../assets/Vector(8).png";
import Consumer from "../assets/Vector(10).png";
import Consumer2 from "../assets/Vector(11).png";
import Real from "../assets/Group 58.png";
import IT from "../assets/Vector(12).png";
import Communication from "../assets/comments.png";
import Industrials from "../assets/XMLID_931_.png";
import Utilities from "../assets/Vector(13).png";
import Financials from "../assets/Group 57.png";

const industries1 = [
  { name: "Health care", img: Health },
  { name: "Materials", img: Materials },
  { name: "Energy", img: Energy },
  { name: "Consumer discretionary", img: Consumer },
  { name: "Consumer staples", img: Consumer2 },
  { name: "Real estate", img: Real },
];
const industries2 = [
  { name: "IT", img: IT },
  { name: "Communication", img: Communication },
  { name: "Industrials", img: Industrials },
  { name: "Utilities", img: Utilities },
  { name: "Financials", img: Financials },
];
const notification = [
  {
    name: "AMZN",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#D94111",
  },
  {
    name: "TSL",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#118F4B",
  },
  {
    name: "ABQQ",
    amount: 200,
    percent: "-0.25%",
    risk: "Low Risk",
    color: "#118F4B",
  },
  {
    name: "AMZN",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#D94111",
  },
  {
    name: "TSL",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#118F4B",
  },
  {
    name: "ABQQ",
    amount: 200,
    percent: "-0.25%",
    risk: "Low Risk",
    color: "#118F4B",
  },
  {
    name: "AMZN",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#D94111",
  },
  {
    name: "TSL",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#118F4B",
  },
  {
    name: "ABQQ",
    amount: 200,
    percent: "-0.25%",
    risk: "Low Risk",
    color: "#118F4B",
  },
  {
    name: "AMZN",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#D94111",
  },
  {
    name: "TSL",
    amount: 200,
    percent: "-0.25%",
    risk: "High Risk",
    color: "#118F4B",
  },
  {
    name: "ABQQ",
    amount: 200,
    percent: "-0.25%",
    risk: "Low Risk",
    color: "#118F4B",
  },
];
const initialState = { industries1, industries2, notification };
const dataSlice = createSlice({
  name: "GeekLapsData",
  initialState,
  reducers: {
    getData: (state) => {
      return state;
    },
  },
});
export default dataSlice.reducer;
export const { getData } = dataSlice.actions;
