import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelhomeComponent } from './excelhome.component';

describe('ExcelhomeComponent', () => {
  let component: ExcelhomeComponent;
  let fixture: ComponentFixture<ExcelhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
