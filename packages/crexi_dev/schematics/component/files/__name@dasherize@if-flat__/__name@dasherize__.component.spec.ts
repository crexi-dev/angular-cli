import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

describe('<%= classify(name) %>Component', () => {

    let component: <%= classify(name) %>Component;
    let fixture: ComponentFixture<<%= classify(name) %>Component>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                <%= classify(name) %>Component
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        .compileComponents().then(() => {

            fixture = TestBed.createComponent(<%= classify(name) %>Component);
            component = fixture.componentInstance;

        });

    }));

    afterEach(() => {

        fixture.destroy();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
