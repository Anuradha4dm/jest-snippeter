export const INIT_TEST_FILE_CONTEXT_COMPONENT= `
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { $COMPONENT$ } from '$COMPONENT_PATH$';

describe('Test $COMPONENT$', () => {
    let component: $COMPONENT$;
    let fixture: ComponentFixture<$COMPONENT$>

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [$COMPONENT$],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [],
        }).compileComponents();

        fixture = TestBed.createComponent($COMPONENT$);
        component = fixture.componentInstance;
    });

    it('should create the $COMPONENT$',()=>{
        expect(component).toBeDefined();
    });
});
`;
