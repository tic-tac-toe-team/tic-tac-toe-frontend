export interface Cell {
    id: number;
    value: string;
}

export interface Player {
    playerId: number;
    name: string;
}

export interface GameResponseDto {
    gameId: number;
    state: string;
    cells: Cell[];
    players: Player[];
}
