import { IPageInfo } from './IPageInfo';

export interface ICursorPaginationResult<M> {
  nodes: M[];
  pageInfo: IPageInfo;
}
