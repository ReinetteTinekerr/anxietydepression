import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// const CLIENT_ID = "960961170794-3vsp7jad0nks1ukol0g0b0tg17skahvo.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";
// const REFRESH_TOKEN = "1//049jc81emUgHICgYIARAAGAQSNwF-L9IrtjUyYRBCbco-wvml6BwpQYq7chFXcJnFNUnc6p1yKvsOTVAU3pe1vKFrJM2K2KUSUdA";
export async function POST(request: Request) {
  const body = await request.json();

  const sender = "frederick.l.santiago@isu.edu.ph"
  async function wrapedSendMail() {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: sender,
          pass: "wrcbtcktbfxbmydt"
        },
      });

      const mailOptions = {
        from: sender,
        to: body.toEmail,
        subject: "Hello from AnxietyXDepression ISU-E CCSICT | BSCS",
        text: body.subject,
      };

      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          console.error("Error sending email:", error);
          reject(new Error(error));
        } else {
          console.log("Email sent successfully:", info.response);
          resolve(true);
        }
      });
    });

  }
  // Create a transporter
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     type: "OAuth2",
  //     user: "reinettetinekerr@gmail.com",
  //     clientId: CLIENT_ID,
  //     clientSecret: CLIENT_SECRET,
  //     refreshToken: REFRESH_TOKEN,
  //   },
  // });

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: sender,
  //     pass: "wrcbtcktbfxbmydt"
  //   },
  // });
  // const mailOptions = {
  //   from: sender,
  //   to: body.toEmail,
  //   subject: "Hello from AnxietyXDepression ISU-E CCSICT | BSCS",
  //   text: body.subject,
  // };

  // transporter.sendMail(mailOptions, (error: any, info: any) => {
  //   if (error) {
  //     console.error("Error sending email:", error);
  //     NextResponse.error();
  //   } else {
  //     console.log("Email sent successfully:", info.response);
  //     NextResponse.json;
  //   }
  // });

  try {
    await wrapedSendMail();
    return NextResponse.json({});
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({});
  }
}

