import { Entity } from "@/shared/domain/entity/entity";
import Id from "@/shared/domain/valueObjects/id";
import Repository from "@/shared/repository/repository";

export default class InMemoryRepository<T extends Entity>
  implements Repository<T>
{
  static entities: Record<string, unknown[]> = {};

  constructor(private readonly entityName: string) {
    if (!InMemoryRepository.entities[entityName]) {
      InMemoryRepository.entities[entityName] = [];
    }
  }

  async save(entity: T): Promise<void> {
    InMemoryRepository.entities[this.entityName].push(entity);
  }

  async deleteById(id: Id): Promise<void> {
    InMemoryRepository.entities[this.entityName] = InMemoryRepository.entities[
      this.entityName
    ].filter((entity) => (entity as T).id !== id);
  }

  async delete(entity: T): Promise<void> {
    InMemoryRepository.entities[this.entityName] = InMemoryRepository.entities[
      this.entityName
    ].filter((currentEntity) => currentEntity !== entity);
  }

  async exists(entity: T): Promise<boolean> {
    return InMemoryRepository.entities[this.entityName].includes(entity);
  }

  async getById(id: Id): Promise<T> {
    const entity = (InMemoryRepository.entities[this.entityName] as T[]).find(
      (currentEntity) => currentEntity.id === id
    );

    if (!entity) {
      throw new Error("Entity not found");
    }

    return entity;
  }

  async getAll(): Promise<T[]> {
    return InMemoryRepository.entities[this.entityName] as T[];
  }

  async update(entity: T): Promise<void> {
    InMemoryRepository.entities[this.entityName] = InMemoryRepository.entities[
      this.entityName
    ].map((currentEntity) => {
      if ((currentEntity as T).id === entity.id) {
        return entity;
      }

      return currentEntity;
    });
  }

  async getByIds(ids: Id[]): Promise<T[]> {
    return InMemoryRepository.entities[this.entityName].filter((entity) =>
      ids.includes((entity as T).id!)
    ) as T[];
  }

  async deleteByIds(ids: Id[]): Promise<void> {
    InMemoryRepository.entities[this.entityName] = InMemoryRepository.entities[
      this.entityName
    ].filter((entity) => !ids.includes((entity as T).id!));
  }
}
