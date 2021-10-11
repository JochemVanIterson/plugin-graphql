import Adapter, { ConnectionMode, ArgumentMode } from "../adapter";
import Model from "../../orm/model";
import { Arguments } from "../../support/interfaces";
export default class DefaultAdapter implements Adapter {
    getRootMutationName(): string;
    getRootQueryName(): string;
    getConnectionMode(): ConnectionMode;
    getArgumentMode(): ArgumentMode;
    getFilterTypeName(model: Model): string;
    getInputTypeName(model: Model, action?: string, mutation?: string): string;
    getInputTypeKey(model: Model, key: string, action?: string, mutation?: string): string;
    includeInputKey(model: Model, key: string, action?: string, mutation?: string): boolean;
    mapInputKeys(model: Model, args: Arguments, action?: string, mutation?: string): Arguments;
    getNameForDestroy(model: Model): string;
    getNameForFetch(model: Model, plural: boolean): string;
    getNameForPersist(model: Model): string;
    getNameForPush(model: Model): string;
    prepareSchemaTypeName(name: string): string;
    getCustomQuery(model: Model, action: string, name: string, params: string, fields: string): string;
}
