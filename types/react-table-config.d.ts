// This file is necessary in order to get react-table's types to be
// recognized, since the original is not written in Typescript.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table#configuration-using-declaration-merging
// and https://stackoverflow.com/questions/62758670/something-went-wrong-with-react-table-using-typescript.

import {
    UseColumnOrderInstanceProps,
    UseColumnOrderState,
    UseExpandedHooks,
    UseExpandedInstanceProps,
    UseExpandedOptions,
    UseExpandedRowProps,
    UseExpandedState,
    UseFiltersColumnOptions,
    UseFiltersColumnProps,
    UseFiltersInstanceProps,
    UseFiltersOptions,
    UseFiltersState,
    UseGlobalFiltersColumnOptions,
    UseGlobalFiltersInstanceProps,
    UseGlobalFiltersOptions,
    UseGlobalFiltersState,
    UseGroupByCellProps,
    UseGroupByColumnOptions,
    UseGroupByColumnProps,
    UseGroupByHooks,
    UseGroupByInstanceProps,
    UseGroupByOptions,
    UseGroupByRowProps,
    UseGroupByState,
    UsePaginationInstanceProps,
    UsePaginationOptions,
    UsePaginationState,
    UseResizeColumnsColumnOptions,
    UseResizeColumnsColumnProps,
    UseResizeColumnsOptions,
    UseResizeColumnsState,
    UseRowSelectHooks,
    UseRowSelectInstanceProps,
    UseRowSelectOptions,
    UseRowSelectRowProps,
    UseRowSelectState,
    UseRowStateCellProps,
    UseRowStateInstanceProps,
    UseRowStateOptions,
    UseRowStateRowProps,
    UseRowStateState,
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByHooks,
    UseSortByInstanceProps,
    UseSortByOptions,
    UseSortByState
  } from 'react-table'
  
  declare module 'react-table' {
    // take this file as-is, or comment out the sections that don't apply to your plugin configuration
  
    export interface TableOptions<D extends Record<string, unknown>>
      extends UseExpandedOptions<D>,
        UseGroupByOptions<D>,
        // note that having Record here allows you to add anything to the options, this matches the spirit of the
        // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
        // feature set, this is a safe default.
        Record<string, any> {}
  
    export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>>
      extends UseExpandedHooks<D>,
        UseGroupByHooks<D> {}
  
    export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
      extends
        UseExpandedInstanceProps<D>,
        UseGroupByInstanceProps<D> {}
  
    export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
      extends 
        UseExpandedState<D>,
        UseGroupByState<D> {}
  
    export interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>>
      extends UseFiltersColumnOptions<D>,
        UseGroupByColumnOptions<D> {}
  
    export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
      extends
        UseGroupByColumnProps<D>,{}
  
    export interface Cell<D extends Record<string, unknown> = Record<string, unknown>, V = any>
      extends UseGroupByCellProps<D> {}
  
    export interface Row<D extends Record<string, unknown> = Record<string, unknown>>
      extends UseExpandedRowProps<D>,
        UseGroupByRowProps<D> {}
  }