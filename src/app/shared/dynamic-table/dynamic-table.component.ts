import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() columns: any;
  @Input() data:any;
  @Input() faColumns:any;
  @Input() hasDetailButton: boolean = false;
  @Output() showDetailBtn: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    
  }

  showDetail(id:any){
    this.showDetailBtn.emit(id);  
  }
}
