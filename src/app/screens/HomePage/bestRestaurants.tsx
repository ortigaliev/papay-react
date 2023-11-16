import { Favorite } from "@mui/icons-material";
import { AspectRatio,Card, CardOverflow, CssVarsProvider, IconButton, Typography, Link } from "@mui/joy";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from '@mui/icons-material/Call';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function BestRestaurants () {
  return (
    <div className="best_restaurant_frame">
    <img src={"icons/best_restaurant-icon.svg"}
    alt="BestRestaurantIcon" style={{position: "absolute", left: "6%", transform: "rotate(90 deg)"}} />
    <Container sx={{ mt: "153px "}}>
    <Stack flexDirection={"column"} alignItems={"center"}>
    <Box sx={{mb: "45px"}} className="category_title">Best Restaurants</Box>
    <Stack sx={{ display: "flex", flexDirection: "row"}}>
    <CssVarsProvider>


    <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}>
    <CardOverflow>
    <AspectRatio ratio="1">
    <img src="/homeImg/top-res1.jpg" alt="Best restaurantimg" />
    </AspectRatio>
    <IconButton className="top_restaurant_like-button" aria-label="Like minimal photography" size="md" variant="solid" color="neutral" sx={{ bottom: 0}} >
    <Favorite style={{ color: "white"}}/>

    </IconButton>
    </CardOverflow>

    <Typography level="h2" sx={{ fontSize: "md", mt: 2}}>
    Uzum
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<LocationOnRoundedIcon />}
    textColor="neutral.700">
    Tashkent, Yunus Abad 4-1
    </Link>
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<CallIcon />}
    textColor="neutral.700">
    +99890 7314578
    </Link>
    </Typography>
    <CardOverflow variant="soft"
    sx={{display: "flex",
    gap: 1.5,
    py: 1.5,
    px: "var(--Card-padding)",
    borderTop: "1px solid",
    borderColor: "neutral.outlinedBorder",
    bgcolor: "background.level1",
    }}>
    <Typography level="body-sm"
    sx={{fontWeight: "md",
    color: "neutral.300",
    alignItems: "center",
    display: "flex"
    }}>
      100 {" "}
    <VisibilityIcon sx={{ fontSize: 20,
      marginLeft: "5px"}}/>
    </Typography>
    <Box sx={{ width: 2, bgcolor: "divider", mr: "6px"}}/>
    <Typography level="body-sm" sx={{
      fontWeight: "md",
      display: "flex",
      color: "text.secondary",
      alignItems: "center",}}>
    <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}/>
    </Typography>
    </CardOverflow>
    </Card>

    <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}>
    <CardOverflow>
    <AspectRatio ratio="1">
    <img src="/homeImg/top-res1.jpg" alt="Best restaurantimg" />
    </AspectRatio>
    <IconButton className="top_restaurant_like-button" aria-label="Like minimal photography" size="md" variant="solid" color="neutral" sx={{ bottom: 0}} >
    <Favorite style={{ color: "white"}}/>

    </IconButton>
    </CardOverflow>

    <Typography level="h2" sx={{ fontSize: "md", mt: 2}}>
    Uzum
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<LocationOnRoundedIcon />}
    textColor="neutral.700">
    Tashkent, Yunus Abad 4-1
    </Link>
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<CallIcon />}
    textColor="neutral.700">
    +99890 7314578
    </Link>
    </Typography>
    <CardOverflow variant="soft"
    sx={{display: "flex",
    gap: 1.5,
    py: 1.5,
    px: "var(--Card-padding)",
    borderTop: "1px solid",
    borderColor: "neutral.outlinedBorder",
    bgcolor: "background.level1",
    }}>
    <Typography
    sx={{fontWeight: "md",
    color: "neutral.300",
    alignItems: "center",
    display: "flex"
    }}>
      100 {" "}
    <VisibilityIcon sx={{ fontSize: 20,
      marginLeft: "5px"}}/>
    </Typography>
    <Box sx={{ width: 2, bgcolor: "divider", mr: "6px"}}/>
    <Typography sx={{
      fontWeight: "md",
      display: "flex",
      color: "text.secondary",
      alignItems: "center",}}>
    <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}/>
    </Typography>
    </CardOverflow>
    </Card>

    <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}>
    <CardOverflow>
    <AspectRatio ratio="1">
    <img src="/homeImg/top-res1.jpg" alt="Best restaurantimg" />
    </AspectRatio>
    <IconButton className="top_restaurant_like-button" aria-label="Like minimal photography" size="md" variant="solid" color="neutral" sx={{ bottom: 0}} >
    <Favorite style={{ color: "white"}}/>

    </IconButton>
    </CardOverflow>

    <Typography level="h2" sx={{ fontSize: "md", mt: 2}}>
    Uzum
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<LocationOnRoundedIcon />}
    textColor="neutral.700">
    Tashkent, Yunus Abad 4-1
    </Link>
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<CallIcon />}
    textColor="neutral.700">
    +99890 7314578
    </Link>
    </Typography>
    <CardOverflow variant="soft"
    sx={{display: "flex",
    gap: 1.5,
    py: 1.5,
    px: "var(--Card-padding)",
    borderTop: "1px solid",
    borderColor: "neutral.outlinedBorder",
    bgcolor: "background.level1",
    }}>
    <Typography
    sx={{fontWeight: "md",
    color: "neutral.300",
    alignItems: "center",
    display: "flex"
    }}>
      100 {" "}
    <VisibilityIcon sx={{ fontSize: 20,
      marginLeft: "5px"}}/>
    </Typography>
    <Box sx={{ width: 2, bgcolor: "divider", mr: "6px"}}/>
    <Typography sx={{
      fontWeight: "md",
      display: "flex",
      color: "text.secondary",
      alignItems: "center",}}>
    <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}/>
    </Typography>
    </CardOverflow>
    </Card>

    <Card variant="outlined" sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}>
    <CardOverflow>
    <AspectRatio ratio="1">
    <img src="/homeImg/top-res1.jpg" alt="Best restaurantimg" />
    </AspectRatio>
    <IconButton className="top_restaurant_like-button" aria-label="Like minimal photography" size="md" variant="solid" color="neutral" sx={{ bottom: 0}} >
    <Favorite style={{ color: "white"}}/>

    </IconButton>
    </CardOverflow>

    <Typography level="h2" sx={{ fontSize: "md", mt: 2}}>
    Uzum
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<LocationOnRoundedIcon />}
    textColor="neutral.700">
    Tashkent, Yunus Abad 4-1
    </Link>
    </Typography>
    <Typography sx={{ mt: 0.5, mb: 2}}>
    <Link
    href=""
    startDecorator={<CallIcon />}
    textColor="neutral.700">
    +99890 7314578
    </Link>
    </Typography>
    <CardOverflow variant="soft"
    sx={{display: "flex",
    gap: 1.5,
    py: 1.5,
    px: "var(--Card-padding)",
    borderTop: "1px solid",
    borderColor: "neutral.outlinedBorder",
    bgcolor: "background.level1",
    }}>
    <Typography
    sx={{fontWeight: "md",
    color: "neutral.300",
    alignItems: "center",
    display: "flex"
    }}>
      100 {" "}
    <VisibilityIcon sx={{ fontSize: 20,
      marginLeft: "5px"}}/>
    </Typography>
    <Box sx={{ width: 2, bgcolor: "divider", mr: "6px"}}/>
    <Typography sx={{
      fontWeight: "md",
      display: "flex",
      color: "text.secondary",
      alignItems: "center",}}>
    <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}/>
    </Typography>
    </CardOverflow>
    </Card>

    </CssVarsProvider>
    </Stack>

    </Stack>


    </Container>
    </div>)
  };