
import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
import { Container, Stack } from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material"
import Checkbox from "@mui/material/Checkbox";

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo"} };
    return (
      <div className="chosen_dish_page">
        <Container className="dish_container">
          <Stack className="chosen_dish_slider">

          </Stack>

        </Container>
      </div>

    )
  };
