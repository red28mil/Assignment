import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { getMovieCredits } from "../../api/tmdb-api";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log(credits)
let creditsCards = credits.map((s) => (
<>
{credits ? (
  <>
  <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <credits key={s.id} credits={s}/>
          </Grid>
  </>
):(
  <p>Wait</p>
)}
</>
)
);
return (
  <Typography>
{creditsCards}
  </Typography>

 );
};















