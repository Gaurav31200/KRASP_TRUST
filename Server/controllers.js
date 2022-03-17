const mongoose = require("mongoose");

const Customer = require("./models/customer");
const History = require("./models/history");

exports.getCustomers = (req, res) => {
  Customer.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};

exports.checkUsername = (req, res) => {
  const name = req.params.uname;
  Customer.findOne({ customerName: name }, (err, result) => {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.transfer = (req, res) => {
  let { sender, recipient, amount } = req.body;

  // Time
  const today = new Date();
  const time =
    today.getHours() +
    ":" +
    today.getMinutes() +
    " | " +
    today.getDate() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  Customer.findOne({ customerName: sender }, (e, r) => {
    if (e) {
      res.send(e);
    } else {
      let newAmount = r.customerBalance - amount;
      if (newAmount < 0) {
        const history = new History({
          SenderName: sender,
          RecipientName: recipient,
          Amount: amount,
          Time: time,
          Status: "Failed",
        });

        history.save();
        res.send("Insufficient Balance!");
      } else {
        Customer.updateOne(
          { customerName: sender },
          {
            $set: { customerBalance: newAmount },
            $currentDate: { lastModified: true },
          },
          (error, result) => {
            if (error) {
              console.log(error);
            } else {
            }
          }
        );
        Customer.findOne({ customerName: recipient }, (e, r) => {
          if (e) {
            res.send(e);
          } else {
            let newAmount = r.customerBalance - -amount;
            Customer.updateOne(
              { customerName: recipient },
              {
                $set: { customerBalance: newAmount },
                $currentDate: { lastModified: true },
              },
              (error, result) => {
                if (error) {
                  console.log(error);
                } else {
                }
              }
            );
          }
        });
        const history = new History({
          SenderName: sender,
          RecipientName: recipient,
          Amount: amount,
          Time: time,
          Status: "OK",
        });

        history.save();

        res.send("Transaction Completed at " + time);
      }
    }
  });
};

exports.getHistory = (req, res) => {
  History.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
