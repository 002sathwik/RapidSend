import React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const EmailTemplate = ({ res }) => (
  <Html>
    <Head />
    <Preview>RapidSend File</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <h1>
            <i>RapidSend Team</i>
          </h1>
        </Section>

        <Section style={content}>
          <Img
            width={620}
            src="https://www.sentandsecure.com/wp-content/uploads/how-to-transfer-files-securely.jpg"
            alt="Description"
          />

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi {res?.emailToSend?.split("@")[0]},
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                U have recived Link From your Friend Throught RapidSend Team
              </Heading>

              <Text style={paragraph}>
                <b>FileName </b>
                {res.fileName}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>FileType </b>
                {res.fileType}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>FileSize </b>
                {res.fileSize}
              </Text>

              <Text
                style={{
                  color: "rgb(0,0,0, 0.5)",
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                *Approximate geographic location based on IP address:
              </Text>
              <Section style={codeBox}>
                <Text style={confirmationCodeText}>sasas</Text>
              </Section>

              <Text style={paragraph}>
                If this was you, there's nothing else you need to do.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                If this wasn't you or if you have additional questions, please
                see our support page.
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: "0" }}>
            <Column style={containerButton} colSpan={2}>
              <Button href={res?.shortUrl} style={button}>
                Click To Downlode
              </Button>
            </Column>
          </Row>
          <Section style={containerImageFooter}>
            <Img
              width={620}
              src="https://t3.ftcdn.net/jpg/05/86/23/24/240_F_586232405_DpLRpVCtkgrQdCaugTaJOwLwb3Po75yM.jpg"
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 |RapidSend Team, India , Karkala |
            sathwikportfolio.netlify.app
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginRight: "50px",
  marginBottom: "30px",
  padding: "43px 23px",
};

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center",
  verticalAlign: "middle",
};
