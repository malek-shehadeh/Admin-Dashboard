const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

// Set up Nodemailer transporter with Gmail configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "malek.shehadeh96@gmail.com", // Your email address
    pass: "axuq oqty wwsh lvwc", // Your email password or app-specific password
  },
});

// Get all messages
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Respond to a message
exports.respondContact = async (req, res) => {
  try {
    const { contactId, response } = req.body;
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    contact.response = response;
    await contact.save();

    // Send email
    const mailOptions = {
      from: "malek.shehadeh96@gmail.com",
      to: contact.email,
      subject: "Reply to your contact message",
      text: response,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Response sent and email dispatched successfully" });
  } catch (error) {
    console.error("Error sending response or email:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get count of messages
exports.getMessageCount = async (req, res) => {
  try {
    const count = await Contact.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
