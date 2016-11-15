/**
 * Time
 */
export class Time {
    readonly start
    readonly end
    readonly what
    readonly id
    readonly date: string = new Date().toISOString().substring(0, 10)

    static fromJsonList = (jsonList: any[]) => jsonList.map(json => Time.fromJson(json))
    static fromJson = (json) => new Time(json)
    constructor(params:any = {}) {
        Object.assign(this, {}, params)
    }
}
