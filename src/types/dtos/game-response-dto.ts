export interface Cell {
    id: number;
    symbol: string;
}

export interface Player {
    playerId: number;
    isCurrent: boolean;
    symbol: string;
}

export interface GameResponseDto {
    gameId: number;
    state: string;
    cells: Cell[];
    players: Player[];
}
