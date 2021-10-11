import Model from "../orm/model";
import { Data } from "../support/interfaces";

export enum ConnectionMode {
  AUTO,
  PLAIN,
  NODES,
  EDGES,
  ITEMS
}

export enum ArgumentMode {
  TYPE,
  LIST
}

export default interface Adapter {
  getRootQueryName(): string;
  getRootMutationName(): string;

  getNameForPersist(model: Model): string;
  getNameForPush(model: Model): string;
  getNameForDestroy(model: Model): string;
  getNameForFetch(model: Model, plural: boolean): string;

  getConnectionMode(): ConnectionMode;

  getArgumentMode(): ArgumentMode;

  getFilterTypeName(model: Model): string;
  getInputTypeName(model: Model, action?: string, mutation?: string): string;
  getInputTypeKey(model: Model, key: string, action?: string, mutation?: string): string;
  includeInputKey(model: Model, key: string, action?: string, mutation?: string): boolean;
  mapInputKeys(model: Model, args: Data, action?: string, mutation?: string): Data;

  prepareSchemaTypeName(name: string): string;

  getCustomQuery(
    model: Model,
    action: string,
    name: string,
    params: string,
    fields: string
  ): string;
}
