export type BoardProps = {
    cells: ('X' | 'O' | '')[];
    onCellClick: (index: number) => void;
};