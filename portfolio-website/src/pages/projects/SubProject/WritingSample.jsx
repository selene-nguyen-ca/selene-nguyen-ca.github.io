import { Box, Typography, Card, CardContent, Link, Divider } from "@mui/material";

const publications = [
  {
    title: "Style: Discovering Yourself",
    description:
      "A resource exploring personal style, self-expression, and discovering your identity through fashion.",
    url: "https://learningcommons.ubc.ca/style-discovering-yourself/",
    type: "UBC Learning Commons",
  },
    {
      title: "I Tried It: A New Aesthetic for a Week",
  description: "A personal account of experimenting with a new aesthetic for a week.",
  url: "https://learningcommons.ubc.ca/i-tried-it-a-new-aesthetic-for-a-week/",
  type: "UBC Learning Commons",
},
  {
    title: "How To Use Audacity",
    description:
      "A guide covering the fundamentals of using Audacity for audio recording and editing.",
    url: "https://wiki.ubc.ca/images/e/e8/How_To_Use_Audacity_2025.pdf",
    type: "UBC Wiki — PDF Guide",
  },
  {
    title: "How To Use RØDECaster",
    description:
      "A guide covering the fundamentals of using the RØDECaster for audio recording and production.",
    url: "https://wiki.ubc.ca/images/0/04/How_To_Use_Rodecaster_2025.pdf",
    type: "UBC Wiki — PDF Guide",
  },
  {
  title: "Academic Learning Space Stewards (ALSS): Your Guide to Roles, Tools, Support, and Key Information",
  description:
    "A comprehensive guide outlining the roles, tools, support resources, workflows, and key information for Academic Learning Space Stewards.",
  url: "https://confluence.it.ubc.ca/spaces/MEDCOL/pages/387518303/Academic+Learning+Space+Stewards+ALSS+Your+Guide+to+Roles+Tools+Support+and+Key+Information",
  type: "UBC Confluence — Documentation",
},
];

function WritingSample() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: 6,
        px: { xs: 3, md: 6 },
      }}
    >
      {/* Page Heading */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "48px",
          mb: 1,
        }}
      >
        Publications
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* Publications */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {publications.map((publication, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#666",
                  mb: 1,
                }}
              >
                {publication.type}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "28px",
                  color: "black",
                  mb: 1.5,
                }}
              >
                {publication.title}
              </Typography>

              <Typography
                sx={{
                  color: "#444",
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {publication.description}
              </Typography>

              <Link
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  color: "#1a62ff",
                  fontWeight: 500,
                }}
              >
                View publication →
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default WritingSample;