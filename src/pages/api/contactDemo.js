import { mailOptions, transporter } from "../../config/nodemailer";
import Mailgen from "mailgen";

const CONTACT_MESSAGE_FIELDS = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    companyName: "Company Name",
    phoneNumber: 'Phone Number',
    country: 'Country',
    numberOfLearners: 'Number of Learners',
    haveAnLMS: 'Have an LMS',
    requestComment: "Message",
};

const generateEmailContent_1 = (data) => {

    // Create a Mailgen instance
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Loonum Enterprise',
            link: 'https://www.loonumlms.com/',
            logo: 'https://www.loonumlms.com/static/Slogo.svg',
        }
    });

    // Create the email body
    const email = {
        body: {
            name: `${data.firstName} ${data.lastName}`,
            intro: `<p>We’re absolutely thrilled to welcome you to SuryaLMS! 🎉</p>
                    <p>To get started, we’re excited to offer you a 14-day free trial—a perfect opportunity to explore everything our platform has to offer. Dive in, experiment, and discover how Loonam can elevate your experience.</p>`,
            table: {
                data: Object.entries(data)
                    .filter(([key]) => key !== 'subject') // Exclude the 'subject' field
                    .map(([key, val]) => {
                        return {
                            item: CONTACT_MESSAGE_FIELDS[key],
                            description: val
                        };
                    }),
                columns: {
                    customWidth: {
                        item: '30%',
                        description: '70%'
                    },
                }
            },

            outro: 'Thank you for using our service!'
        }
    };

    // Generate the email HTML and text content
    const emailBody = mailGenerator.generate(email);
    const emailText = mailGenerator.generatePlaintext(email);

    return {
        text: emailText,
        html: emailBody
    };
};

const generateEmailContent = (data) => {
    // Create a Mailgen instance
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Loonum Enterprise',
            link: 'https://www.loonumlms.com/',
            logo: 'https://www.loonumlms.com/static/Slogo.svg',
        }
    });

    // Create the email body
    const email = {
        body: {
            name: `K. Dananjaya Perera`,
            intro: 'You have received a new contact message:',
            table: {
                data: Object.entries(data)
                    .filter(([key]) => key !== 'subject') // Exclude the 'subject' field
                    .map(([key, val]) => {
                        return {
                            item: CONTACT_MESSAGE_FIELDS[key],
                            description: val
                        };
                    }),
                columns: {
                    customWidth: {
                        item: '30%',
                        description: '70%'
                    },
                }
            },
            outro: ''
        }
    };

    // Generate the email HTML and text content
    const emailBody = mailGenerator.generate(email);
    const emailText = mailGenerator.generatePlaintext(email);

    return {
        text: emailText,
        html: emailBody
    };
};

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        console.log("data", data);
        if (!data || !data.firstName || !data.lastName || !data.companyName || !data.email || !data.phoneNumber || !data.country || !data.numberOfLearners || !data.haveAnLMS || !data.requestComment || !data.subject) {
            return res.status(400).send({ message: "Bad request" });
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: data.subject,
            });
            await transporter.sendMail({
                ...mailOptions,
                to: data.email,
                ...generateEmailContent_1(data),
                subject: data.subject,
            });
            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err.message });
        }
    }
    return res.status(400).json({ message: "Bad request" });
};
export default handler;