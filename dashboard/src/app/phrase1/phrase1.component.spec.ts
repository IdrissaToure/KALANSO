import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phrase1Component } from './phrase1.component';

describe('Phrase1Component', () => {
  let component: Phrase1Component;
  let fixture: ComponentFixture<Phrase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Phrase1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Phrase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
