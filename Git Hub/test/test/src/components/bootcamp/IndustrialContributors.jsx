import {
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const IndustrialContributors = () => {
  const contributors = [
    {
      name: "Rama Sankar",
      profile_link: "https://www.linkedin.com/in/ramasankarreddy/",
      company: "Amazon",
      prev_worked_at: "Tejas Networks",
    },
    {
      name: "Utkarsh Srivastava",
      profile_link: "https://www.linkedin.com/in/utkarsh-srivastava-6687b0148/",
      company: "Capegmini",
      prev_worked_at: "Leaders Lantern",
    },
    {
      name: "Yash Shinde",
      profile_link: "https://www.linkedin.com/in/yash-shinde-80b7b6148/",
      company: "Tata Consultancy Services",
      prev_worked_at: "-",
    },
    {
      name: "Angshuman Das",
      profile_link: "https://www.linkedin.com/in/angshuman2611/",
      company: "Nykaa Fashion",
      prev_worked_at: "Tokopedia",
    },
    {
      name: "Ninder Joshi",
      profile_link: "https://www.linkedin.com/in/ninder-joshi/",
      company: "Nagarro",
      prev_worked_at: "Purchasing Power",
    },
    {
      name: "Varun Reddy",
      profile_link: "https://www.linkedin.com/in/varun-reddy-bb7275170/",
      company: "Accenture",
      prev_worked_at: "-",
    },
    {
      name: "Anshul Sharma",
      profile_link: "https://www.linkedin.com/in/anshulsharma99/",
      company: "Cred",
      prev_worked_at: "Goodera",
    },
    {
      name: "Akhil Sabu",
      profile_link: "https://www.linkedin.com/in/mvrikxix/",
      company: "Integrtr",
      prev_worked_at: "-",
    },
    {
      name: "Riddhish Patel",
      profile_link: "https://www.linkedin.com/in/riddhishpatel/",
      company: "GS Lab",
      prev_worked_at: "-",
    },
    {
      name: "Jithin Purushothaman",
      profile_link: "https://www.linkedin.com/in/jithin-purushothaman/",
      company: "Kalvium",
      prev_worked_at: "SAP, Freshworks",
    },
    {
      name: "Suraj Raj",
      profile_link: "https://www.linkedin.com/in/surazraaz1998/",
      company: "Newgen Software",
      prev_worked_at: "Capgemini",
    },
    {
      name: "Joymalya Biswas",
      profile_link: "https://www.linkedin.com/in/joymalya/",
      company: "IndiaMart",
      prev_worked_at: "Capgemini",
    },
    // {
    //   name: "Sasidhar Thota",
    //   profile_link: "https://www.linkedin.com/in/sasidhar-thota/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Akhil Abothu",
    //   profile_link: "https://www.linkedin.com/in/akhil-abothu/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Akash Tyagi",
    //   profile_link: "https://www.linkedin.com/in/akash-tyagi-lpu/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Rajkumar Mali",
    //   profile_link: "https://www.linkedin.com/in/rajkumar105859/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Nandini Dutta",
    //   profile_link: "https://www.linkedin.com/in/nandini-dutta-1477b2148/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Shaik A",
    //   profile_link: "https://www.linkedin.com/in/avaies/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Divyanshu Thakur",
    //   profile_link: "https://www.linkedin.com/in/divyanshu-thakur-b8624b154/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Mohd. Yameen",
    //   profile_link: "https://www.linkedin.com/in/mohd-yameen-943a79131/",
    //   company: "",
    //   prev_worked_at: "",
    // },
    // {
    //   name: "Jefin Sabu",
    //   profile_link: "https://www.linkedin.com/in/jeffinsabu/",
    //   company: "",
    //   prev_worked_at: "",
    // },
  ];

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        margin={"5vh 0 0 0"}
        color={"primary.main"}
      >
        Industrial Contributors
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: "5vh",
          gap: "3vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {contributors.map((cont, index) => {
          return (
            <Card
              key={index + 1}
              variant="outlined"
              sx={{ height: "54vh", width: "36vh", border: "1px solid #333" }}
            >
              <CardMedia
                component={"img"}
                src={`/contributors_pfps/${cont.name}.jpg`}
                alt="image"
                sx={{
                  height: "32vh",
                  borderRadius: "20px",
                  padding: "2vh 2vh 0 2vh",
                }}
              />
              <CardContent
                sx={{
                  height: "22vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "900", p: "0 5px" }}>
                  {cont.name}
                </Typography>
                <Typography variant="p" fontSize={14} p={"0 5px"}>
                  {cont.company}
                </Typography>
                <Typography variant="p" fontSize={14} p={"0 5px"}>
                  {`Previously at ${cont.prev_worked_at}`}
                </Typography>
                <IconButton
                  onClick={() => {
                    window.open(cont.profile_link, "_blank");
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default IndustrialContributors;
