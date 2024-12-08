import { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Rating,
  Autocomplete,
} from "@mui/material";

const restaurants = [
  {
    id: 1,
    name: "The Green Bowl",
    rating: 4.5,
    type: "Veg",
    image: "../veg_1.webp",
  },
  {
    id: 2,
    name: "Grill & Chill",
    rating: 4.0,
    type: "Non-Veg",
    image: "../non_veg_1.jpg",
  },
  {
    id: 3,
    name: "Spice Villa",
    rating: 4.2,
    type: "Veg",
    image: "../veg_2.webp",
  },
  {
    id: 4,
    name: "Fresher's Delight",
    rating: 4.8,
    type: "Non-Veg",
    image: "../non_veg_3.jpg",
  },
  {
    id: 5,
    name: "Roti Boti",
    rating: 3.5,
    type: "Non-Veg",
    image: "../ChickenTikka.jpg",
  },
  {
    id: 6,
    name: "Dinner Bell",
    rating: 4,
    type: "Veg",
    image: "../paratha.webp",
  },
  {
    id: 7,
    name: "Desi Jaika",
    rating: 2,
    type: "Veg",
    image: "../dosa.webp",
  },
  {
    id: 8,
    name: "Ocean 11",
    rating: 4.5,
    type: "Non-Veg",
    image: "../chiken_biryani.avif",
  },
  {
    id: 9,
    name: "Avantika Dining",
    rating: 4.8,
    type: "Non-Veg",
    image: "../fish_fry.jpg",
  },
  {
    id: 10,
    name: "Mama's Kitchen",
    rating: 5,
    type: "Veg",
    image: "../rajma-chawal.avif",
  },

];

function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesType = filterType ? restaurant.type === filterType : true;
    const matchesRating = restaurant.rating >= filterRating;

    return matchesSearch && matchesType && matchesRating;
  });

  const typeOptions = [
    { label: "All", value: "" },
    { label: "Veg", value: "Veg" },
    { label: "Non-Veg", value: "Non-Veg" },
    { label: "Mixed", value: "Mixed" },
  ];

  const ratingOptions = [
    { label: "All Ratings", value: 0 },
    { label: "3 & above", value: 3 },
    { label: "4 & above", value: 4 },
    { label: "5", value: 5 },
  ];

  return (
    <Box p={2}>
      <Box>
      <Typography
        variant="h4"
        gutterBottom
        textAlign={"center"}
        color="black"
        fontStyle={"italic"}
        fontFamily={"Droid Sans"}
        fontWeight={"bold"}
        fontSize={{ xs: "2rem", sm: "3rem" }}
        my={6}
      >
        Hunger's Lane
      </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        mb={8}
      >
        {/* Search Box */}
        <TextField
          fullWidth
          variant="outlined"
          label="Search Restaurants"
          value={searchText}
         
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // Default outline color
              },
              "&:hover fieldset": {
                borderColor: "black", // Outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", // Outline color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "black", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black", // Label color when focused
            },
          }}
        />

        {/* Filters */}
        <Autocomplete
          fullWidth
          options={typeOptions}
          getOptionLabel={(option) => option.label}
          value={
            typeOptions.find((option) => option.value === filterType) || null
          }
          onChange={(event, newValue) =>
            setFilterType(newValue ? newValue.value : "")
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Type"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />
          )}
        />
        <Autocomplete
          fullWidth
          options={ratingOptions}
          getOptionLabel={(option) => option.label}
          value={
            ratingOptions.find((option) => option.value === filterRating) ||
            null
          }
          onChange={(event, newValue) =>
            setFilterRating(newValue ? newValue.value : 0)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Rating"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "black", // Text color for the input
                  "& fieldset": {
                    borderColor: "black", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "black", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black", // Border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Label text color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black", // Label text color when focused
                },
              }}
            />
          )}
        />
      </Box>

      {/* Restaurant List */}
      <Grid container spacing={3}>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image={restaurant.image}
                alt={restaurant.name}
              />
              <CardContent sx={{ backgroundColor: "#ff6600" }}>
                <Typography variant="h6">{restaurant.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {restaurant.type}
                </Typography>
                <Rating
                  sx={{ color: " #ffff00" }}
                  value={restaurant.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* No Results */}
      {filteredRestaurants.length === 0 && (
        <Typography variant="body1" mt={3} textAlign="center">
          No restaurants found.
        </Typography>
      )}
    </Box>
  );
}

export default Dashboard;
