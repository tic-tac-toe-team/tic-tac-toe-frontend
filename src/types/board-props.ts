export type Board = {
    cells: ('X' | 'O' | '')[];
    onCellClick: (index: number) => void;
};