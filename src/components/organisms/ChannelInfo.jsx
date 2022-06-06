import { Grid } from "@material-ui/core";
import React from "react";
import BasicModal from "../atoms/BasicModal";
import FullDayTimeFormat from "../atoms/FullDayTimeFormat";
import InputBox from "../atoms/InputBox";
import Label from "../atoms/Label";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  odd: {
    backgroundColor: "#f8fbfe",
    height: "40px",
    padding: "5px",
    bottomPadding: "5px",

  },
  even: {
    backgroundColor: "#ffffff",
    height: "40px",
    padding: "5px",
    bottomPadding: "5px",
  },
}));

const ChannelInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <BasicModal
        title={"Channel Information"}
        buttonName={"Channel Information"}
        width={946}
        btnText={"Save"}
      >
        <Grid container spacing={0} display>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <Label label={"Channels"} />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <Label label={"Friendly Name"} />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <Label label={"Interval"} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <Label label={"Start Time"} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <Label label={"End Time"} />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.odd}>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            Togo
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.even}>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            Catering Pickup
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.odd}>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            Catering Delivery
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.even}>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            Combined Channel
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.odd}>
          <Grid item md={2} lg={2} sm={2} xs={2}>
          Combined Channel
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.even}>
          <Grid item md={2} lg={2} sm={2} xs={2}>
          Combined Channel
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={2} lg={2} sm={2} xs={2}>
            <InputBox
              type="text"
              value=""
              name="label1"
              width={90}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
          <Grid item md={3} lg={3} sm={3} xs={3}>
            <FullDayTimeFormat minute={30} />
          </Grid>
        </Grid>

        {/* <Grid
          container
          spacing={0}
          style={{ display: "flex", justifyContent: "right" }}
        >
          <ButtonAtom
            background="white"
            color="black"
            border="0.25"
            text="Cancel"
          />
          <ButtonAtom text="Save" />
        </Grid> */}
      </BasicModal>
    </div>
  );
};

export default ChannelInfo;
