export const INIT_TEST_FILE_CONTEXT_COMPONENT_EXPECTED= `
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestComponent } from './test.component';

describe('Test TestComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should create the TestComponent',()=>{
        expect(component).toBeDefined();
    });
});
`;