import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoNewComponent } from './veiculo-new.component';

describe('VeiculoNewComponent', () => {
  let component: VeiculoNewComponent;
  let fixture: ComponentFixture<VeiculoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
