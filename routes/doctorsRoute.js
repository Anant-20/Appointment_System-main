const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctorModel");
const authMiddleware = require("../middlewares/authMiddleware");
const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");
const { Vonage } = require('@vonage/server-sdk')
const uuid = require('uuid');


router.post("/get-doctor-info-by-user-id", authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor info fetched successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
});

router.post("/get-doctor-info-by-id", authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.body.doctorId });
    res.status(200).send({
      success: true,
      message: "Doctor info fetched successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
});

router.post("/update-doctor-profile", authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(200).send({
      success: true,
      message: "Doctor profile updated successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
});

router.get(
  "/get-appointments-by-doctor-id",
  authMiddleware,
  async (req, res) => {
    try {
      const doctor = await Doctor.findOne({ userId: req.body.userId });
      const appointments = await Appointment.find({ doctorId: doctor._id });
      res.status(200).send({
        message: "Appointments fetched successfully",
        success: true,
        data: appointments,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error fetching appointments",
        success: false,
        error,
      });
    }
  }
);

router.post("/change-appointment-status", authMiddleware, async (req, res) => {
  try {
    const { appointmentId, status, mobileno, doctorName, userName, radioOption, userId } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, {
      status,
    });

    const user = await User.findOne({ _id: appointment.userId });
    const unseenNotifications = user.unseenNotifications;
    unseenNotifications.push({
      type: "appointment-status-changed",
      message: `Your appointment status has been ${status}`,
      onClickPath: "/appointments",
    });

    console.log(req.body)

    await user.save();
    const vonage = new Vonage({
      apiKey: "9fa012bf",
      apiSecret: "8GlU7ndkxFth5k5z"
    })

    if (`${status}` == 'approved' && `${radioOption}` == "1") {

      const from = "Vonage APIs"
      const to = `91${mobileno}`
      const text = `Hi ${userName}, your appointment with Doctor ${doctorName} is confirmed.\nTo join a video call with doctor ,follow below steps :\n 1. Login to your Profile \n 2.Go to Video Call Section \n 3.Enter this id ${userId} as room id and click on join.\nNow you are ready to communicate with doctor.\n Link for video call : http://localhost:3000/room/${userId}`;

      async function sendSMS() {
        await vonage.sms.send({ to, from, text })
          .then(resp => { console.log('Message sent successfully'); console.log(resp); })
          .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
      }
      // sendSMS();
    }

    if (`${status}` == 'approved' && `${radioOption}` == "2") {
      const from = "Vonage APIs"
      const to = `91${mobileno}`
      const text = `Hi ${userName}, your appointment with Doctor ${doctorName} is confirmed.Please be carry health reports with you at the time of appointment`;

      async function sendSMS() {
        await vonage.sms.send({ to, from, text })
          .then(resp => { console.log('Message sent successfully'); console.log(resp); })
          .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
      }

      // sendSMS();
    }



    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error changing appointment status",
      success: false,
      error,
    });
  }
});

module.exports = router;
