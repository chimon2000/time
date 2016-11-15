import { Injectable } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Injectable()
export class AppReadyEvent {
    private isAppReady: boolean

    constructor( @Inject(DOCUMENT) private doc: Document) { }

    trigger() {
        if (this.isAppReady) return

        let bubbles = true
        let cancelable = false

        this.doc.dispatchEvent(this.createEvent('app-ready', { bubbles, cancelable }))
        this.isAppReady = true
    }

    createEvent(eventType: string, options: any) {
        let customEvent: CustomEvent

        try {
            customEvent = new CustomEvent(eventType, options)
        } catch (error) {
            let event = this.doc.createEvent('CustomEvent')

            event.initCustomEvent(eventType, options.bubbles, options.cancelable, null)

            customEvent = event
        }

        return customEvent
    }
}