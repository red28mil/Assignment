import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import {  excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState();

  useEffect(() => {
    getMovieCredits(credits).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
<>
<p>Credits={credits}</p>
</>
    
  );
};