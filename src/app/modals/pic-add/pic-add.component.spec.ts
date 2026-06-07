import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicAddComponent } from './pic-add.component';

describe('PicAddComponent', () => {
  let component: PicAddComponent;
  let fixture: ComponentFixture<PicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
