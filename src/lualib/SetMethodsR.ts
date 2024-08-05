type Method = (this: void, ...args: any[]) => any;

export function __TS__SetMethodsR(this: void, tbl: any, classTemplate: any) {
    for (const [k, v] of Object.entries(classTemplate.prototype)) {
        if (typeof v === "function") {
            //@ts-ignore
            tbl[k] = (function(...args: any[]) {
                return (v as Method)(tbl, ...args);
            } as Method);
        }
    }

    if (classTemplate.____super != null) {
        __TS__SetMethodsR(tbl, classTemplate.____super);
    }
}