import { Grid } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import BasicModal from "../atoms/BasicModal";
import ModalComponent from "../atoms/ModalComponent";
import FullDayTimeFormatField from "../molecules/FullDayTimeFormatField";
import InputField from "../molecules/InputField";
import SelectField from "../molecules/SelectField";
import ChannelInfo from "./ChannelInfo";

const Register = () => {
  useEffect(() => {
    console.log("INSIDE USEEFFECT");
  });

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };


  //   const inputFieldData = [
  //     {type:"text", value:{age}, label:"Age", name:"age", id:"age", placeholder:"age", onChange:{handleChange}},
  //     {type:"text", value:{gender}, label:"Gender", name:"gender", id:"gender", placeholder:"gender", onChange:{handleChange}},
  //   ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("### INSIDE ONSUBMIT ###", inputValue);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <InputField
          type="text"
          value={username}
          label="Username"
          name="username"
          id="username"
          placeholder="username"
          onChange={handleChange}
          width="100"
        />
        <InputField
          type="text"
          value={email}
          label="Email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
          width={100}
        />
        <InputField
          type="text"
          value={password}
          label="Password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
          width={100}
        />

        {/* <InputField inputFieldData={inputFieldData}/> */}
        <button type="submit">Register</button>
      </form>
      <FullDayTimeFormatField label="from" id="from" minute="30" />

      <ModalComponent title={"Create Combined Channel"}>
        <InputField
          type="text"
          value=""
          label="Combined Channel Name"
          name="label1"
          id="lb1"
          placeholder="label"
          onChange={handleChange}
          width={100}
        />
        {/* <FullDayTimeFormatField label="Start Time" id="start" minute="30" />
        <FullDayTimeFormatField label="End Time" id="end" minute="30" /> */}
      </ModalComponent>
      <BasicModal title={"Create Combined Channel"} buttonName={"Create Channel"} width={400} btnText={"Create"}>
      <InputField
          type="text"
          value=""
          label="Combined Channel Name"
          name="label1"
          id="channel"
          placeholder="label"
          onChange={handleChange}
          width={100}
        />
        <InputField
          type="text"
          value=""
          label="Friendly Name"
          name="label1"
          id="friendly"
          placeholder="label"
          onChange={handleChange}
          width={100}
        />
        <SelectField
          label="Channels"
          name="channels"
          id="channels"
          value=""
          onChange={handleChange}
          width={100}
        />
        <InputField
          type="text"
          value=""
          label="Interval"
          name="interval"
          id="lb1"
          placeholder="label"
          onChange={handleChange}
          width={100}
        />
        <Grid container spacing={0}>
          <Grid item md={5} lg={5} sm={5} xs={5}>
          <FullDayTimeFormatField label="Start Time" id="start" minute="30" />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2} style={{}}>
          <h5><center>to</center></h5>
          </Grid>
          <Grid item md={5} lg={5} sm={5} xs={5} >
          <FullDayTimeFormatField label="End Time" id="end" minute="30" />
          </Grid>
        </Grid>
        {/* <Grid container spacing={0} justify="flex-end">
          <ButtonAtom background="white" color="black" border="0.25" text="Cancel"/>
          <ButtonAtom  text="Create"/>
        </Grid> */}
      </BasicModal>
      <ChannelInfo/>
    </div>
  );
};

export default Register;
