import {
  Component,
  OnInit,
  Input,
} from '@angular/core';


@Component({
  selector: 'test',
  template: `
    <div>
      TestComponent {{ this.tab }} content
    </div>
  `,
})
export class TestComponent implements OnInit {
  @Input()
  public tab: number;

  public ngOnInit(): void {
    console.log(`>>> TestComponent ${ this.tab } initialized`);
  }
}
