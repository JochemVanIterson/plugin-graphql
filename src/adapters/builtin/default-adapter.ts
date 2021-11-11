import Adapter, { ConnectionMode, ArgumentMode } from "../adapter";
import Model from "../../orm/model";
import { upcaseFirstLetter } from "../../support/utils";
import { Data } from "../../support/interfaces";

export default class DefaultAdapter implements Adapter {
  getRootMutationName(): string {
    return "Mutation";
  }

  getRootQueryName(): string {
    return "Query";
  }

  getConnectionMode(): ConnectionMode {
    return ConnectionMode.NODES;
  }

  getArgumentMode(): ArgumentMode {
    return ArgumentMode.TYPE;
  }

  getFilterTypeName(model: Model): string {
    return `${upcaseFirstLetter(model.singularName)}Filter`;
  }

  getInputTypeName(model: Model, action?: string, mutation?: string): string {
    return `${upcaseFirstLetter(model.singularName)}Input`;
  }

  getInputTypeKey(model: Model, key: string, action?: string, mutation?: string): string {
    return `${key}`;
  }
  includeInputKey(model: Model, key: string, action?: string, mutation?: string): boolean {
    return true;
  }
  mapInputKeys(model: Model, args: Data, action?: string, mutation?: string): Data {
    return args;
  }

  getNameForDestroy(model: Model): string {
    return `delete${upcaseFirstLetter(model.singularName)}`;
  }

  getNameForFetch(model: Model, plural: boolean): string {
    return plural ? model.pluralName : model.singularName;
  }

  getNameForPersist(model: Model): string {
    return `create${upcaseFirstLetter(model.singularName)}`;
  }

  getNameForPush(model: Model): string {
    return `update${upcaseFirstLetter(model.singularName)}`;
  }

  prepareSchemaTypeName(name: string): string {
    return upcaseFirstLetter(name);
  }

  getCustomQuery(
    model: Model,
    action: string,
    name: string,
    params: string,
    fields: string
  ): string {
    return `
        ${name ? name : model.singularName}${params} {
          ${fields}
        }
      `;
  }

  parseQueryResult(model: Model, newData: Data, action: string, name: string): Data {
    return newData;
  }

  transformIncomingData(
    result: Data | Array<Data>,
    data: Data | Array<Data>,
    model: Model,
    mutation: boolean = false,
    recursiveCall: boolean = false
  ) {
    return result;
  }
}
