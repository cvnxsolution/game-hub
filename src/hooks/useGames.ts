import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => useData<Game>("/games");

export default useGames;
