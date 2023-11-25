import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";



const finishedOrders = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

 export default function FinishedOrders (props: any) {
    return (
        <TabPanel value={"3"}>
          <Stack>
            {finishedOrders?.map((order) => {
                return (
                    <Box className={"order_main_box"}>
                        <Box className={"order_box_scroll"}>
                            {order.map(() => {
                                const image_path = '/others/national.jpg';
                                return (
                                    <Box className={"ordersName_price"}>
                                        <img src={image_path} className={"orderDishImg"} />
                                        < p className={"titleDish"}>Meat Set</p>
                                        <Box className={"priceBox"}>
                                            <p>$7</p>
                                            <img src={"/icons/close.svg"} />
                                            <p>3</p>
                                            <img src={"/icons/pause.svg"} />
                                            <p style={{ marginLeft: "15px "}}>$45</p>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        <Box className={"total_price_box red_solid"}>
                            <Box className={"boxTotal"}>
                            <p>Product cost</p>
                                <p> $22</p>
                                <img
                                src={"/icons/plus.svg"}
                                style={{marginLeft: "20px" }}
                                />
                                <p>Delivery service</p>
                                <p>$3</p>
                                <img
                                src={"/icons/pause.svg"}
                                style={{marginLeft: "20px" }}
                                />
                                <p> Total cost</p>
                                <p> $25</p>

                            </Box>
                            <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{
                                        borderRadius: "10px",

                                    }}
                                >
                                    Cencel
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        borderRadius: "10px",

                                    }}
                                >
                                    Pay now
                                </Button>
                        </Box>
                        </Box>
                    );
                 })}
          </Stack>
        </TabPanel>
    )
}