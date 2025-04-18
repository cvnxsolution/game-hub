import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeltons.map((s) => (
            <GameCardContainer>
              <GameCardSkelton key={s} />
            </GameCardContainer>
          ))}
        {data.map((game: Game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
