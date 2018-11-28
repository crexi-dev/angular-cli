import { NgModule } from '@angular/core';<% if (commonModule) { %>
import { CommonModule } from '@angular/common';<% } %><% if (routing) { %>
import { <%= camelize(name) %>Routes } from './<%= dasherize(name) %>.routes';<% } %>

@NgModule({
    declarations: [],
    imports: [<% if (commonModule) { %>
        CommonModule<%= routing ? ',' : '' %><% } %><% if (routing) { %>
        RouterModule.for<%= routingScope %>(routes)
    ]
})
export class <%= classify(name) %>Module { }
