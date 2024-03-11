import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionssComponent } from './definitionss.component';

describe('DefinitionssComponent', () => {
  let component: DefinitionssComponent;
  let fixture: ComponentFixture<DefinitionssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefinitionssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefinitionssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
