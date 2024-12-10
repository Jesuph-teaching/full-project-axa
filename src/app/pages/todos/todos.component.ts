import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { ColumnDef, PaginationState } from '@tanstack/angular-table';
import { DynamicTableComponent } from '../../components/dynamic-table/dynamic-table.component';
import { TodoStore } from '../../stores/todo.store';

@Component({
  selector: 'app-todo-table',
  imports: [DynamicTableComponent],
  templateUrl: './todos.component.html',
  styles: `:host{
    @apply w-full;
  }`,
})
export class TodoTableComponent {
  todosStore = inject(TodoStore);
  pagination = signal<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  columns: ColumnDef<TodoI>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'title',
      id: 'lastName',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'completed',
      id: 'completed',
      cell: (info) => (info.getValue() ? 'completed' : 'not yet'),
    },
  ];
}
