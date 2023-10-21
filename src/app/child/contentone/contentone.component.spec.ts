import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentoneComponent } from './contentone.component';

describe('ContentoneComponent', () => {
  let component: ContentoneComponent;
  let fixture: ComponentFixture<ContentoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentoneComponent]
    });
    fixture = TestBed.createComponent(ContentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
