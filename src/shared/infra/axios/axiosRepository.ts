import { Entity } from "@/shared/domain/entity/entity";
import Id from "@/shared/domain/valueObjects/id";
import Repository from "@/shared/repository/repository";
import { api } from "./axiosConfig";

export default class AxiosRepository<T extends Entity>
  implements Repository<T>
{
  constructor(protected readonly resource: string) {}

  async save(entity: T): Promise<void> {
    await api.post(this.resource, entity);
  }

  async exists(entity: T): Promise<boolean> {
    const { data } = await api.get(this.resource);

    return data.includes(entity);
  }

  async getById(id: Id): Promise<T> {
    const { data } = await api.get(`${this.resource}/${id.value}`);

    return data;
  }

  async getAll(): Promise<T[]> {
    const { data } = await api.get(this.resource);

    return data;
  }

  async deleteById(id: Id): Promise<void> {
    await api.delete(`${this.resource}/${id.value}`);
  }

  async delete(entity: T): Promise<void> {
    await api.delete(`${this.resource}/${entity.id?.value}`);
  }
}
