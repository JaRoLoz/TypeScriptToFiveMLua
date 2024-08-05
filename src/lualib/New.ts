import { __TS__SetMethodsR } from "./SetMethodsR";

type Method = (this: void, ...args: any[]) => any;

export function __TS__New(this: void, target: LuaClass, ...args: any[]): any {
    const self = {};
    //@ts-ignore
    const constructor = target.prototype.____constructor;
    (constructor as Method)(self, ...args);

    __TS__SetMethodsR(self, target);

    return self;
}
