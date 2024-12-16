import Id from "@/modules/user/domain/valueObjects/id";

export default interface Repository<TEntity> {
  save(entity: TEntity): Promise<void>;

  deleteById(id: Id): Promise<void>;

  delete(entity: TEntity): Promise<void>;

  exists(entity: TEntity): Promise<boolean>;

  getById(id: Id): Promise<TEntity>;

  getAll(): Promise<TEntity[]>;
}
