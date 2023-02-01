export interface VWPackable {
    pack(): void;

    unpack(): void;

    isPacked(): boolean;
}
