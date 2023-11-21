
import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
import { Container, Stack } from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material"
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo"} };
    return (
      <div className="chosen_dish_page">
        <Container className="dish_container">
          <Stack className="chosen_dish_slider">
            <Swiper
            className="dish_swiper"
            loop={true}
            navigation={true}
            spaceBetween={10}
              navigation={true}

              modules={[FreeMode, Navigation, Thumbs]}
            >

              { chosen_list.map((ele) => {
                const image_path =`others/sandivich.jpg`;

              })}
             </Swiper>
          </Stack>

        </Container>
      </div>

    )
  };