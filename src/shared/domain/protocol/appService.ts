export default interface AppService<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}
