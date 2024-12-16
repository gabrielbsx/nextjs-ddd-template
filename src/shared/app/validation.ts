export default interface Validation<TOutput> {
  validate(input: unknown): Promise<TOutput>;
}
