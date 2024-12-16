export default interface UseCase<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}
