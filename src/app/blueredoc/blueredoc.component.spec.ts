import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueredocComponent } from './blueredoc.component';

describe('BlueredocComponent', () => {
  let component: BlueredocComponent;
  let fixture: ComponentFixture<BlueredocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueredocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueredocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
