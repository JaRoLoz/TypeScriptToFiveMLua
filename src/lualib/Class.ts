export function __TS__Class(): LuaClass {
    const c: LuaClass = { prototype: {} };
    c.prototype.__index = c.prototype;
    //@ts-ignore
    c.prototype.____constructor = () => {};
    return c;
}
