import { useDispatch } from "react-redux";
import { ACTIONS_TYPES } from "../redux/reducer";
import { Box, Button, Grid } from "@mui/material";



export const Mem = ({ memes }) => {
  const dispatch = useDispatch();

  const upvote = (title) => {
    dispatch({ type: ACTIONS_TYPES.UPVOTE, payload: { title: title } });
  };
  const downvote = (title) => {
    dispatch({ type: ACTIONS_TYPES.DOWNVOTE, payload: { title: title } });
  };
  const toggleFavourite = (event) => {
    const title = event.target.title;
    dispatch({
      type: ACTIONS_TYPES.TOGGLE_FAVOURITE,
      payload: { title: title },
    });
  };

  return memes.map((meme) => {
    return (
      <Box
        key={meme.title}
        mt={2}
        ml={{ xs: "38%", md: "37%" }}
        mr={{ xs: "5%", md: "6%", lg: "7%", xl: "14%" }}
        pt={1}
        backgroundColor={"black"}
      >
        <Grid container spacing={70} columns={16}>
        <Grid item color="white" justifyContent="left" paddingLeft={50}>
          <h2>{meme.title} </h2>
          </Grid>
         <Grid item color="white" justifyContent="right">
           <input
            type="checkbox"
            className="star"
            defaultChecked={meme.favourite}
            title={meme.title}
            onClick={toggleFavourite}
          ></input>
        </Grid>
        </Grid>
        <img src={meme.img} width="80%" alt="meme" />
        <Box pt={2} pb={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              upvote(meme.title);
            }}
          >
            <Box fontWeight="bold" mr={5}>
              👍 Like: {meme.upvotes}
            </Box>
          </Button>
          <Button
            variant="contained"
            color="neutral"
            onClick={() => {
              downvote(meme.title);
            }}
          >
            <Box fontWeight="bold" mr={1}>
              👎 Dislike: {meme.downvotes}
            </Box>{" "}
          </Button>
        </Box>
      </Box>
    );
  });
};
