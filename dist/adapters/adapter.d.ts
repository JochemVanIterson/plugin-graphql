import Context from "../common/context";
import Model from "../orm/model";
import { Data } from "../support/interfaces";
export declare enum ConnectionMode {
    AUTO = 0,
    PLAIN = 1,
    NODES = 2,
    EDGES = 3,
    ITEMS = 4
}
export declare enum ArgumentMode {
    TYPE = 0,
    LIST = 1
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
    getCustomQuery(model: Model, action: string, name: string, params: string, fields: string): string;
    parseQueryResult(model: Model, newData: Data, action: string, name: string): Data;
    transformIncomingData(data: Data | Array<Data>, model: Model, mutation: boolean, recursiveCall: boolean, context: Context): Data | Array<Data>;
    transformOutgoingData(model: Model, data: Data, read: boolean, action: string, mutationName: string, context: Context, whitelist?: Array<String>, outgoingRecords?: Map<string, Array<string>>, recursiveCall?: boolean): Data;
}
