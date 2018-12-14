import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

describe('<%= classify(name) %>Service', () => {

    let service: <%= classify(name) %>Service;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                <%= classify(name) %>Service
            ]
        });

        service = TestBed.get(<%= classify(name) %>Service);

    });

    it('should be created', () => {

        expect(service).toBeTruthy();

    });

});
