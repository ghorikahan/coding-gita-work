import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./back-landing.css";
function Backend_Feedback() {
  return (
    <div className="backend-feed">
      <div
        className="feedback-title"
        style={{
          fontSize: "32px",
          padding: "0vh 5vh 5vh 5vh",
          fontWeight: "bolder",
        }}
      >
        FAQs
      </div>
      <Accordion allowMultiple style={{ width: "100%" }}>
        <AccordionItem>
          <h2 style={{ padding: "1vh 0" }}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Why Outsource Your Backend Development Services?
              </Box>
              <AccordionIcon style={{ color: "#ed9302" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Backend development can be a complex, time-consuming process. It
            requires in-depth expertise and knowledge to ensure the best
            possible level of functionality, usability, and scalability.
            Outsourcing your backend development to CodingGita ensures you can
            benefit from: A simpler process: Our backend developer team does all
            the heavy lifting on your behalf. We work behind the scenes to make
            your project a success, collaborating with you every step of the
            way. We apply our expertise to your project, so you can focus on
            running your business. Higher quality results: Our team specializes
            in backend development. We have years of extensive experience in
            applying tried-and-true solutions to each new project. Our
            comprehensive experience leads to higher quality assurance results
            and fewer mistakes. Time savings: When you outsource backend
            development to CodingGita, you have more time to focus on other aspects
            of running your business. We focus on the development, so you can
            concentrate on what you do best. Cost savings: The lean and Agile
            development processes we use for backend development means a more
            cost-effective project for you. Cost savings are realized through
            better flexibility in development—you pay only for what you need.
            You can accelerate your timeline, speed your launch to the market,
            and save money on expensive iteration. Scalability: Our backend
            developers know how quickly projects and backend technology can be
            needed. No matter how quickly your business grows, your backend will
            be able to evolve with you, allowing for rapid growth and
            transformation.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowMultiple style={{ width: "100%" }}>
        <AccordionItem>
          <h2 style={{ padding: "1vh 0" }}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
              What Types of Frameworks will CodingGita Use?
              </Box>
              <AccordionIcon style={{ color: "#ed9302" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          We leverage battle-tested and proven frameworks to generate the best results for your business. Just some of the frameworks we leverage include:

Symfony: A backend PHP framework full of features and used to build a complex and scalable web app.

Laravel: An open-source backend PHP framework used to build web applications.

Lumen: An open-source PHP micro-framework for lightweight installations.

Node.js: A powerful cross platform, open-source server environment, ideal for server-side programming.

Express: Agile and minimalistic, Express is a framework for web and mobile apps.

Nest.js: A framework that is built with TypeScript and uses JavaScript to build highly efficient, scalable web applications.

Next.js: The powerful React framework used for developing strong web applications.

Yii: Fast and secure, the Yii PHP framework is flexible and pragmatic for web apps.

Go: A robust open-source programming language for developing dependable software.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowMultiple style={{ width: "100%" }}>
        <AccordionItem>
          <h2 style={{ padding: "1vh 0" }}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Is there a framework that CodingGita recommends?
              </Box>
              <AccordionIcon style={{ color: "#ed9302" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The framework recommendation depends your project and business
            requirements. CodingGita usually recommends popular industry-proven
            solutions such as Symfony, Laravel, Node.js, Nest.js, Express,
            Spring or others. After the Discovery stage we can suggest you full
            technological stack.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowMultiple style={{ width: "100%" }}>
        <AccordionItem>
          <h2 style={{ padding: "1vh 0" }}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                The Benefits of Working with CodingGita for Backend Services
              </Box>
              <AccordionIcon style={{ color: "#ed9302" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            CodingGita offers clients a reliable, consistent, and efficient way to
            develop backend projects in a timely and cost-effective manner. Our
            dedicated and experienced team of backend developers provide you
            with the guidance and support you need every step of the way,
            ensuring your project is a success. Using cutting edge technology,
            your backend development project is in the best of hands with
            CodingGita. Some of the key advantages of working with CodingGita include:
            Expert developers: Our backend developers are experts in their
            field, with years of software and app development experience and
            extensive industry knowledge. They can build a secure, robust, and
            resilient framework, perfect for supporting your site or
            application. Full stack development: Because we are not just a
            backend development company, but also frontend and mobile app
            developers, we have the knowledge and expertise to make your backend
            application better. We understand the user experience from a
            frontend and mobile perspective, and can ensure that the backend is
            designed with an understanding of how users will interact with the
            application. We can also make sure that the data flow between the
            frontend and backend is optimized for speed and performance.
            Innovative designers: A team of intuitive and inventive designers
            work with our developers in tandem to ensure your solution not only
            performs according to expectations, but looks and feels flawless
            too. Supportive project managers: Discover the benefits of a truly
            collaborative process with experienced project managers who keep
            your project coordinated, and on track, so you can be ready to
            launch at the right time. Streamlined development: Our Agile project
            management and iteration strategies allow for rapid and efficient
            development. We can adjust your project whenever needed, and adapt
            according to your specific requirements. Transparent billing: Keep
            your budget on track, as well as your project. Our transparent
            billing system ensures you’ll never get a nasty surprise when your
            project is complete. Frequent communication: We’ll always keep you
            in the loop. Forget development teams that keep you in the dark. Our
            experts illuminate the details of your project every step of the
            way, with consistent reporting and communication. Whether you’re
            looking for web application development, a mobile application, or a
            robust backend solution, CodingGita can provide your company with custom
            software development that satisfies your business needs, goals, and
            growth. Contact us today to discuss our backend development
            services.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Backend_Feedback;
