import { useState } from "react";
import css from "./App.module.css";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loader } from "../Loader/Loader";
import { MovieGrid } from "../MovieGrid/MovieGrid";
import { MovieModal } from "../MovieModal/MovieModal";
import { SearchBar } from "../SearchBar/SearchBar";
import type { Votes, VoteType } from "../../types/votes";

export const App = () => {
  
  return (
    <div className={css.app}>
      <SearchBar />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
      <MovieModal />
    </div>
  );
};





