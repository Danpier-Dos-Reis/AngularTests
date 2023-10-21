import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentthreeComponent } from './contentthree.component';

describe('ContentthreeComponent', () => {
  let component: ContentthreeComponent;
  let fixture: ComponentFixture<ContentthreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentthreeComponent]
    });
    fixture = TestBed.createComponent(ContentthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
