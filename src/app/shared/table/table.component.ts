import { Component, OnInit, Input } from '@angular/core';
import { TableOptions } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableOptions: TableOptions = { headers: [], selectionMode: 'none' }
  @Input() data = []

  constructor() { }

  ngOnInit() { }

  onSelectRow(item) {
    if (this.tableOptions.selectionMode === 'none') return
    if (this.tableOptions.selectionMode === 'single') {
      this.data.forEach(row => row.selected = false)
    }

    item.selected = !item.selected
  }

}
