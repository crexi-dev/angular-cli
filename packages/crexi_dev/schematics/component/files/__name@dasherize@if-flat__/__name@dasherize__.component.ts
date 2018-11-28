import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';

@Component({<% if (changeDetection !== 'Default') { %>
    changeDetection: ChangeDetectionStrategy.<%= changeDetection %>,<% } if(!!viewEncapsulation) { %>
    encapsulation: ViewEncapsulation.<%= viewEncapsulation %>,<% } %>
    selector: '<%= selector %>',<% if(inlineStyle) { %>
    styles: [],<% } else { %>
    styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>'],<% } if(inlineTemplate) { %>
    template: `
        <p>
            <%= dasherize(name) %> works!
        </p>
    `<% } else { %>
    templateUrl: './<%= dasherize(name) %>.component.pug'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {

    constructor () {

        // constructor

    }

    ngOnInit () {

        // on init

    }

}
